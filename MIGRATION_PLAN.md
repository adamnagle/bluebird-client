# Major Package Version Migration Plan for Bluebird Client

## Executive Summary
This document outlines the strategy for upgrading major versions of key packages in the bluebird-client React TypeScript project. The migration targets:
- Mantine v7 → v8
- Vite v5 → v7  
- Zod v3 → v4
- Recharts v2 → v3
- React v19.0.0 → v19.0.1+ (latest patch)
- Storybook v8 → v9

## Current State Analysis

### Package Versions
- **Mantine**: 7.17.1 (extensive usage across 14 packages)
- **Vite**: 5.4.3
- **Zod**: 3.24.2 (used in 14 files for validation)
- **Recharts**: 2.15.1 (dependency, charts via @mantine/charts)
- **React**: 19.0.0
- **Storybook**: 8.6.4
- **TypeScript**: 5.8.2

## Recommended Update Order

### Phase 1: Foundation Updates
1. **Vite v5 → v7**
2. **React patch updates**

### Phase 2: Core Library Updates  
3. **Zod v3 → v4**
4. **Recharts v2 → v3**

### Phase 3: UI Framework Update
5. **Mantine v7 → v8** (most complex, done after stabilizing other deps)

### Phase 4: Development Tools
6. **Storybook v8 → v9**

## Detailed Migration Steps

### 1. Vite v5 → v7 Migration

#### Breaking Changes
- **Config format changes**: Minor adjustments to vite.config.mjs
- **CSS handling**: Updated PostCSS integration
- **Build optimizations**: New chunk splitting defaults
- **Plugin compatibility**: Some plugins may need updates

#### Required Actions
```javascript
// vite.config.mjs updates
- Test environment config may move to separate config
- Update @vitejs/plugin-react to v5.x
- Review vite-tsconfig-paths compatibility
```

#### Code Modifications
- Update vite.config.mjs for new config format
- Review and update any custom Vite plugins
- Test HMR and build processes

### 2. React v19.0.0 → v19.0.1+ 

#### Breaking Changes
- Minimal for patch updates
- Check for deprecated APIs if any

#### Required Actions
- Update @types/react and @types/react-dom
- Run comprehensive test suite
- Verify React DevTools compatibility

### 3. Zod v3 → v4 Migration

#### Breaking Changes
- **Error handling**: ZodError structure changes
- **Type inference**: Improved but may break some edge cases
- **Async validation**: New API for async schemas
- **Transform API**: Updated transform behavior

#### Code Locations Requiring Updates
Files using Zod (14 locations):
- `src/utilities/date.ts`
- `src/utilities/boolean.ts`
- `src/utilities/phone-number.ts`
- `src/api/entities/*.ts`
- `src/api/dtos/auth.ts`
- `src/api/helpers.ts`
- `src/__backend/handlers/auth.ts`
- `src/__backend/helpers/request.ts`
- `src/hooks/api/auth.ts`

#### Required Actions
```typescript
// Update error handling patterns
// Old (v3)
catch (error) {
  if (error instanceof ZodError) {
    error.errors // array format
  }
}

// New (v4)
catch (error) {
  if (error instanceof ZodError) {
    error.issues // new format
  }
}
```

### 4. Recharts v2 → v3 Migration

#### Breaking Changes
- **Component API changes**: Some props renamed/removed
- **Animation defaults**: Changed behavior
- **TypeScript types**: Stricter typing
- **Custom components**: May need updates

#### Impact Assessment
- Project uses @mantine/charts which wraps Recharts
- Check @mantine/charts compatibility with Recharts v3
- May need to wait for @mantine/charts update

### 5. Mantine v7 → v8 Migration (Most Complex)

#### Major Breaking Changes
- **CSS variables system**: Complete overhaul
- **Theme object structure**: Significant changes
- **Component APIs**: Many components have breaking changes
- **Styles API**: New approach to component styling
- **Color system**: New color management
- **Responsive styles**: New breakpoint system

#### Affected Files
- All style imports in `src/app.tsx`
- Theme configuration in `src/theme/index.ts`
- All components using Mantine (extensive usage)
- Custom CSS modules may need updates

#### Required Actions

##### Theme Updates
```typescript
// src/theme/index.ts
// Old (v7)
createTheme({
  cursorType: 'pointer',
  fontFamily: 'Inter, sans-serif',
  breakpoints: { /* ... */ }
})

// New (v8)
createTheme({
  // cursorType removed
  fontFamily: 'Inter, sans-serif',
  breakpoints: { /* new format */ }
})
```

##### Style Imports
```tsx
// Old (v7)
import '@mantine/core/styles.layer.css';

// New (v8)
import '@mantine/core/styles.css';
// Layer system changed
```

##### Component Updates
- Review all Mantine component usage
- Update deprecated props
- Migrate custom styles to new system
- Update responsive props syntax

#### Related Package Updates
- `mantine-datatable`: Must be v8 compatible
- `postcss-preset-mantine`: Update to v2.x
- `eslint-config-mantine`: Update to v5.x

### 6. Storybook v8 → v9 Migration

#### Breaking Changes
- **Config format**: New main.ts structure
- **Addon API**: Updated addon system
- **MDX stories**: Format changes
- **Controls**: New control types

#### Required Actions
```typescript
// .storybook/main.ts updates
- Update configuration format
- Migrate addon configurations
- Update story formats if needed
```

## Compatibility Matrix

| Package | Current | Target | React 19 | Vite 7 | TS 5.9 |
|---------|---------|--------|----------|--------|--------|
| Mantine | v7 | v8 | ✅ | ✅ | ✅ |
| Vite | v5 | v7 | ✅ | - | ✅ |
| Zod | v3 | v4 | ✅ | ✅ | ✅ |
| Recharts | v2 | v3 | ⚠️ | ✅ | ✅ |
| Storybook | v8 | v9 | ⚠️ | ✅ | ✅ |

⚠️ = Requires verification

## Risk Mitigation Strategy

### 1. Pre-Migration Preparation
- Create feature branch: `feature/major-deps-upgrade`
- Full backup of current working state
- Document current test coverage
- Run full test suite and save results

### 2. Incremental Updates
- Update one package at a time
- Run tests after each update
- Commit working state after each successful update
- Use npm/yarn resolutions if needed for conflicts

### 3. Testing Strategy
```bash
# After each major update
npm run typecheck
npm run lint
npm run test
npm run build
npm run storybook:build
```

### 4. Rollback Procedures

#### For Each Package Update:
1. **Git checkpoint**: Commit before starting
2. **Package-lock backup**: Save package-lock.json
3. **Rollback command**: 
   ```bash
   git reset --hard <commit-hash>
   npm ci
   ```

### 5. Validation Checklist
- [ ] TypeScript compilation passes
- [ ] All linters pass
- [ ] Test suite passes
- [ ] Build succeeds
- [ ] Development server runs
- [ ] Storybook builds and runs
- [ ] No console errors in browser
- [ ] Visual regression testing (if available)

## Additional Dependencies to Consider

### Packages that may need updates for compatibility:
- `@vitejs/plugin-react`: v4.3.4 → v5.x (for Vite 7)
- `vite-tsconfig-paths`: v5.1.4 → v6.x (for Vite 7)  
- `@testing-library/react`: v16.2.0 (check React 19 compat)
- `postcss-preset-mantine`: v1.18.0 → v2.x (for Mantine 8)
- `mantine-datatable`: v7.17.1 → v8.x (for Mantine 8)
- TypeScript: Consider v5.8.2 → v5.9.x

## Migration Timeline Estimate

| Phase | Package | Estimated Time | Complexity |
|-------|---------|---------------|------------|
| 1 | Vite v7 | 2-4 hours | Medium |
| 1 | React patches | 1 hour | Low |
| 2 | Zod v4 | 2-3 hours | Medium |
| 2 | Recharts v3 | 1-2 hours | Low-Medium |
| 3 | Mantine v8 | 8-16 hours | High |
| 4 | Storybook v9 | 2-4 hours | Medium |

**Total Estimate**: 16-30 hours

## Post-Migration Tasks

1. **Documentation Updates**
   - Update README with new versions
   - Document any API changes for team
   - Update CI/CD configurations

2. **Performance Testing**
   - Benchmark build times
   - Check bundle sizes
   - Test runtime performance

3. **Team Communication**
   - Notify team of breaking changes
   - Update development setup guides
   - Schedule knowledge sharing session

## Monitoring and Success Metrics

### Success Criteria
- Zero regression in functionality
- Build time ≤ current + 10%
- Bundle size ≤ current + 5%
- All tests passing
- No new TypeScript errors
- Successful deployment to staging

### Monitoring Points
- Development server startup time
- HMR performance
- Build performance
- Test execution time
- Bundle size analysis

## Appendix: Useful Resources

### Official Migration Guides
- [Mantine v7 to v8](https://mantine.dev/changelog/8-0-0/)
- [Vite v5 to v6 to v7](https://vitejs.dev/guide/migration)
- [Zod v3 to v4](https://github.com/colinhacks/zod/releases)
- [Recharts v2 to v3](https://recharts.org/en-US/guide/migration)
- [Storybook v8 to v9](https://storybook.js.org/docs/migration-guide)

### Testing Commands
```bash
# Full validation suite
npm run typecheck && npm run lint && npm run test && npm run build

# Quick validation
npm run typecheck && npm run build

# Visual testing
npm run storybook:build
```

## Notes and Warnings

⚠️ **Critical Considerations:**
1. Mantine v8 has the most breaking changes - allocate extra time
2. Some Mantine community packages may not be v8 ready
3. Recharts v3 compatibility with @mantine/charts needs verification
4. Storybook v9 may not be released yet - verify availability
5. Always check for security vulnerabilities after updates

---

*This migration plan should be reviewed and adjusted based on the latest package documentation and your specific project requirements.*