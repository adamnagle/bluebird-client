import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AuthGuard } from '@/guards/auth-guard';
import { GuestGuard } from '@/guards/guest-guard';
import { AuthLayout } from '@/layouts/auth';
import { DashboardLayout } from '@/layouts/dashboard';
import docsRoutes from '@/pages/docs/routes';
import { LazyPage } from './lazy-page';
import { paths } from './paths';

const router = createBrowserRouter([
  ...docsRoutes,
  {
    path: '/',
    element: <Navigate to={paths.dashboard.root} replace />,
  },
  {
    path: paths.auth.root,
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        path: paths.auth.root,
        element: <Navigate to={paths.auth.login} replace />,
      },
      {
        path: paths.auth.login,
        element: LazyPage(() => import('@/pages/auth/login')),
      },
      {
        path: paths.auth.register,
        element: LazyPage(() => import('@/pages/auth/register')),
      },
      {
        path: paths.auth.forgotPassword,
        element: LazyPage(() => import('@/pages/auth/forgot-password')),
      },
      // {
      //   path: routes.auth.resetPassword,
      //   element: LazyPage(() => import('@/pages/auth/reset-password')),
      // },
      {
        path: paths.auth.otp,
        element: LazyPage(() => import('@/pages/auth/otp')),
      },
      // {
      //   path: routes.auth.terms,
      //   element: LazyPage(() => import('@/pages/auth/terms')),
      // },
      // {
      //   path: routes.auth.privacy,
      //   element: LazyPage(() => import('@/pages/auth/privacy')),
      // },
    ],
  },
  {
    path: paths.dashboard.root,
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        path: paths.dashboard.root,
        element: <Navigate to={paths.dashboard.home} replace />,
      },
      {
        path: paths.dashboard.home,
        element: LazyPage(() => import('@/pages/dashboard/home')),
      },
      /* ---------------------------------- APPS ---------------------------------- */
      {
        path: paths.dashboard.apps.root,
        children: [
          {
            index: true,
            path: paths.dashboard.apps.root,
            element: <Navigate to={paths.dashboard.apps.kanban} replace />,
          },
          {
            path: paths.dashboard.apps.kanban,
            element: LazyPage(() => import('@/pages/dashboard/apps/kanban')),
          },
        ],
      },
      /* ------------------------------- MANAGEMENT ------------------------------- */
      {
        path: paths.dashboard.management.root,
        children: [
          {
            index: true,
            path: paths.dashboard.management.root,
            element: <Navigate to={paths.dashboard.management.customers.root} replace />,
          },
          {
            path: paths.dashboard.management.customers.root,
            children: [
              {
                index: true,
                path: paths.dashboard.management.customers.root,
                element: <Navigate to={paths.dashboard.management.customers.list} replace />,
              },
              {
                path: paths.dashboard.management.customers.list,
                element: LazyPage(() => import('@/pages/dashboard/management/customers/list')),
              },
            ],
          },
        ],
      },
      /* --------------------------------- WIDGETS -------------------------------- */
      {
        path: paths.dashboard.widgets.root,
        children: [
          {
            index: true,
            path: paths.dashboard.widgets.root,
            element: <Navigate to={paths.dashboard.widgets.charts} replace />,
          },
          {
            path: paths.dashboard.widgets.metrics,
            element: LazyPage(() => import('@/pages/dashboard/widgets/metrics')),
          },
          {
            path: paths.dashboard.widgets.charts,
            element: LazyPage(() => import('@/pages/dashboard/widgets/charts')),
          },
          {
            path: paths.dashboard.widgets.tables,
            element: LazyPage(() => import('@/pages/dashboard/widgets/tables')),
          },
          // Application UI routes
          {
            path: paths.dashboard.widgets.applicationUi.coreUi,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/core-ui')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.authentication,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/authentication')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.forms,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/forms')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.overlays,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/overlays')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.navigation,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/navigation')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.feedback,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/feedback')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.dataDisplay,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/data-display')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.navbars,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/navbars')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.headers,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/headers')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.footers,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/footers')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.grids,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/grids')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.userInfo,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/user-info')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.inputs,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/inputs')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.buttons,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/buttons')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.sliders,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/sliders')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.dropzones,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/dropzones')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.applicationCards,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/application-cards')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.stats,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/stats')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.tables,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/tables')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.dragDrop,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/drag-drop')),
          },
          {
            path: paths.dashboard.widgets.applicationUi.carousels,
            element: LazyPage(() => import('@/pages/dashboard/widgets/application-ui/carousels')),
          },
          // Page sections routes
          {
            path: paths.dashboard.widgets.pageSections.hero,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/hero')),
          },
          {
            path: paths.dashboard.widgets.pageSections.features,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/features')),
          },
          {
            path: paths.dashboard.widgets.pageSections.pricing,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/pricing')),
          },
          {
            path: paths.dashboard.widgets.pageSections.contact,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/contact')),
          },
          {
            path: paths.dashboard.widgets.pageSections.faq,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/faq')),
          },
          {
            path: paths.dashboard.widgets.pageSections.footers,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/footers')),
          },
          {
            path: paths.dashboard.widgets.pageSections.authentication,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/authentication')),
          },
          {
            path: paths.dashboard.widgets.pageSections.errorPages,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/error-pages')),
          },
          {
            path: paths.dashboard.widgets.pageSections.banners,
            element: LazyPage(() => import('@/pages/dashboard/widgets/page-sections/banners')),
          },
          // Blog UI routes
          {
            path: paths.dashboard.widgets.blogUi.articleCards,
            element: LazyPage(() => import('@/pages/dashboard/widgets/blog-ui/article-cards')),
          },
          {
            path: paths.dashboard.widgets.blogUi.comments,
            element: LazyPage(() => import('@/pages/dashboard/widgets/blog-ui/comments')),
          },
          {
            path: paths.dashboard.widgets.blogUi.layouts,
            element: LazyPage(() => import('@/pages/dashboard/widgets/blog-ui/layouts')),
          },
          {
            path: paths.dashboard.widgets.blogUi.authors,
            element: LazyPage(() => import('@/pages/dashboard/widgets/blog-ui/authors')),
          },
          {
            path: paths.dashboard.widgets.blogUi.tableOfContents,
            element: LazyPage(() => import('@/pages/dashboard/widgets/blog-ui/table-of-contents')),
          },
        ],
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
