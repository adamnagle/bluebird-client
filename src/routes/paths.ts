import docs from '@/pages/docs/paths';

export const paths = {
  docs,
  auth: {
    root: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    otp: '/auth/otp',
    terms: '/auth/terms',
    privacy: '/auth/privacy',
  },

  dashboard: {
    root: '/dashboard',
    home: '/dashboard/home',
    management: {
      root: '/dashboard/management',
      customers: {
        root: '/dashboard/management/customers',
        list: '/dashboard/management/customers/list',
        view: (customerId: string) => `/dashboard/management/customers/${customerId}`,
      },
    },
    apps: {
      root: '/dashboard/apps',
      kanban: '/dashboard/apps/kanban',
    },
    widgets: {
      root: '/dashboard/widgets',
      metrics: '/dashboard/widgets/metrics',
      charts: '/dashboard/widgets/charts',
      tables: '/dashboard/widgets/tables',
      applicationUi: {
        authentication: '/dashboard/widgets/application-ui/authentication',
        forms: '/dashboard/widgets/application-ui/forms',
        overlays: '/dashboard/widgets/application-ui/overlays',
        navigation: '/dashboard/widgets/application-ui/navigation',
        feedback: '/dashboard/widgets/application-ui/feedback',
        dataDisplay: '/dashboard/widgets/application-ui/data-display',
      },
      pageSections: {
        hero: '/dashboard/widgets/page-sections/hero',
        features: '/dashboard/widgets/page-sections/features',
        pricing: '/dashboard/widgets/page-sections/pricing',
        contact: '/dashboard/widgets/page-sections/contact',
        faq: '/dashboard/widgets/page-sections/faq',
        footers: '/dashboard/widgets/page-sections/footers',
      },
      blogUi: {
        articleCards: '/dashboard/widgets/blog-ui/article-cards',
        comments: '/dashboard/widgets/blog-ui/comments',
        layouts: '/dashboard/widgets/blog-ui/layouts',
        authors: '/dashboard/widgets/blog-ui/authors',
      },
    },
  },
};
