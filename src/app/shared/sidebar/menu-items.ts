import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Analytics',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Report',
    icon: 'icon-speedometer',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/dashboard/price-product',
    title: 'Product',
    icon: 'ti-palette',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/dashboard/price-site',
    title: 'Site',
    icon: 'ti-palette',
    class: '',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '/dashboard',
  //   title: 'Competitor',
  //   icon: 'ti-palette',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '',
  //   title: 'Scheduler',
  //   icon: 'mdi mdi-dots-horizontal',
  //   class: 'nav-small-cap',
  //   extralink: true,
  //   submenu: []
  // },
  // {
  //   path: '/dashboard',
  //   title: 'Data Scheduler',
  //   icon: 'ti-palette',
  //   class: 'has-arrow',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/component/accordion',
  //       title: 'Site',
  //       icon: 'mdi mdi-adjust',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/alert',
  //       title: 'Product',
  //       icon: 'mdi mdi-adjust',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/carousel',
  //       title: 'Event',
  //       icon: 'mdi mdi-adjust',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     }
  //   ]
  // },
  // {
  //   path: '/dashboard',
  //   title: 'Report Scheduler',
  //   icon: 'ti-palette',
  //   class: 'has-arrow',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/component/accordion',
  //       title: 'Site',
  //       icon: 'mdi mdi-adjust',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/alert',
  //       title: 'Product',
  //       icon: 'mdi mdi-adjust',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/carousel',
  //       title: 'Event',
  //       icon: 'mdi mdi-adjust',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Others',
  //   icon: 'mdi mdi-dots-horizontal',
  //   class: 'nav-small-cap',
  //   extralink: true,
  //   submenu: []
  // },
  // {
  //   path: '/dashboard',
  //   title: 'Meta Data',
  //   icon: 'icon-speedometer',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/dashboard',
  //   title: 'Support',
  //   icon: 'icon-speedometer',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // }
];
