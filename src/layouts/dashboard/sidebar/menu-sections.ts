import { ElementType } from 'react';
import {
  PiChartLineUpDuotone,
  PiChatCenteredDotsDuotone,
  PiFilesDuotone,
  PiKanbanDuotone,
  PiLockKeyDuotone,
  PiShieldCheckDuotone,
  PiSquaresFourDuotone,
  PiStarDuotone,
  PiTableDuotone,
  PiUserPlusDuotone,
  PiUsersDuotone,
} from 'react-icons/pi';
import { paths } from '@/routes/paths';

interface MenuItem {
  header: string;
  section: {
    name: string;
    href: string;
    icon: ElementType;
    dropdownItems?: {
      name: string;
      href: string;
      badge?: string;
    }[];
  }[];
}

export const menu: MenuItem[] = [
  {
    header: 'Overview',
    section: [
      {
        name: 'Welcome',
        href: paths.dashboard.home,
        icon: PiStarDuotone,
      },
      {
        name: 'Documentation',
        href: paths.docs.root,
        icon: PiFilesDuotone,
      },
    ],
  },

  {
    header: 'Apps',
    section: [
      {
        name: 'Kanban',
        href: paths.dashboard.apps.kanban,
        icon: PiKanbanDuotone,
      },
    ],
  },

  {
    header: 'Management',
    section: [
      {
        name: 'Customers',
        icon: PiUsersDuotone,
        href: paths.dashboard.management.customers.root,
        dropdownItems: [
          {
            name: 'List',
            href: paths.dashboard.management.customers.list,
          },
        ],
      },
    ],
  },

  {
    header: 'Widgets',
    section: [
      {
        name: 'Charts',
        href: paths.dashboard.widgets.charts,
        icon: PiChartLineUpDuotone,
      },
      {
        name: 'Metrics',
        href: paths.dashboard.widgets.metrics,
        icon: PiSquaresFourDuotone,
      },
      {
        name: 'Tables',
        href: paths.dashboard.widgets.tables,
        icon: PiTableDuotone,
      },
      {
        name: 'Application UI',
        href: paths.dashboard.widgets.applicationUi.forms,
        icon: PiSquaresFourDuotone,
        dropdownItems: [
          {
            name: 'Core UI',
            href: paths.dashboard.widgets.applicationUi.coreUi,
          },
          {
            name: 'Authentication',
            href: paths.dashboard.widgets.applicationUi.authentication,
          },
          {
            name: 'Forms',
            href: paths.dashboard.widgets.applicationUi.forms,
          },
          {
            name: 'Overlays',
            href: paths.dashboard.widgets.applicationUi.overlays,
          },
          {
            name: 'Navigation',
            href: paths.dashboard.widgets.applicationUi.navigation,
          },
          {
            name: 'Feedback',
            href: paths.dashboard.widgets.applicationUi.feedback,
          },
          {
            name: 'Data Display',
            href: paths.dashboard.widgets.applicationUi.dataDisplay,
          },
          {
            name: 'Navbars',
            href: paths.dashboard.widgets.applicationUi.navbars,
          },
          {
            name: 'Headers',
            href: paths.dashboard.widgets.applicationUi.headers,
          },
          {
            name: 'Footers',
            href: paths.dashboard.widgets.applicationUi.footers,
          },
          {
            name: 'Grids',
            href: paths.dashboard.widgets.applicationUi.grids,
          },
          {
            name: 'User Info',
            href: paths.dashboard.widgets.applicationUi.userInfo,
          },
          {
            name: 'Inputs',
            href: paths.dashboard.widgets.applicationUi.inputs,
          },
          {
            name: 'Buttons',
            href: paths.dashboard.widgets.applicationUi.buttons,
          },
          {
            name: 'Sliders',
            href: paths.dashboard.widgets.applicationUi.sliders,
          },
          {
            name: 'Dropzones',
            href: paths.dashboard.widgets.applicationUi.dropzones,
          },
          {
            name: 'Application Cards',
            href: paths.dashboard.widgets.applicationUi.applicationCards,
          },
          {
            name: 'Stats',
            href: paths.dashboard.widgets.applicationUi.stats,
          },
          {
            name: 'Tables',
            href: paths.dashboard.widgets.applicationUi.tables,
          },
          {
            name: 'Drag & Drop',
            href: paths.dashboard.widgets.applicationUi.dragDrop,
          },
          {
            name: 'Carousels',
            href: paths.dashboard.widgets.applicationUi.carousels,
          },
        ],
      },
      {
        name: 'Page sections',
        href: paths.dashboard.widgets.pageSections.hero,
        icon: PiFilesDuotone,
        dropdownItems: [
          {
            name: 'Hero',
            href: paths.dashboard.widgets.pageSections.hero,
          },
          {
            name: 'Features',
            href: paths.dashboard.widgets.pageSections.features,
          },
          {
            name: 'Pricing',
            href: paths.dashboard.widgets.pageSections.pricing,
          },
          {
            name: 'Contact',
            href: paths.dashboard.widgets.pageSections.contact,
          },
          {
            name: 'FAQ',
            href: paths.dashboard.widgets.pageSections.faq,
          },
          {
            name: 'Footers',
            href: paths.dashboard.widgets.pageSections.footers,
          },
          {
            name: 'Authentication',
            href: paths.dashboard.widgets.pageSections.authentication,
          },
          {
            name: 'Error Pages',
            href: paths.dashboard.widgets.pageSections.errorPages,
          },
          {
            name: 'Banners',
            href: paths.dashboard.widgets.pageSections.banners,
          },
        ],
      },
      {
        name: 'Blog UI',
        href: paths.dashboard.widgets.blogUi.articleCards,
        icon: PiChatCenteredDotsDuotone,
        dropdownItems: [
          {
            name: 'Article Cards',
            href: paths.dashboard.widgets.blogUi.articleCards,
          },
          {
            name: 'Comments',
            href: paths.dashboard.widgets.blogUi.comments,
          },
          {
            name: 'Layouts',
            href: paths.dashboard.widgets.blogUi.layouts,
          },
          {
            name: 'Authors',
            href: paths.dashboard.widgets.blogUi.authors,
          },
          {
            name: 'Table of Contents',
            href: paths.dashboard.widgets.blogUi.tableOfContents,
          },
        ],
      },
    ],
  },

  {
    header: 'Authentication',
    section: [
      {
        name: 'Register',
        href: paths.auth.register,
        icon: PiUserPlusDuotone,
      },
      {
        name: 'Login',
        href: paths.auth.login,
        icon: PiShieldCheckDuotone,
      },
      {
        name: 'Forgot Password',
        href: paths.auth.forgotPassword,
        icon: PiLockKeyDuotone,
      },
      {
        name: 'OTP',
        href: paths.auth.otp,
        icon: PiChatCenteredDotsDuotone,
      },
    ],
  },
];
