const routes = [
  {
    path: "/",
    component: () => import("layouts/TestLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/TestPage.vue"),
      },
    ],
  },
  {
    path: "/test",
    component: () => import("pages/TestPage.vue"),
  },
  {
    path: "/profil",
    component: () => import("layouts/TestLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("components/UserFormComponent.vue"),
      },
    ],
  },
  {
    path: "/tentang",
    component: () => import("layouts/TestLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AboutPage.vue"),
      },
    ],
  },
  {
    path: "/daftar-isi",
    component: () => import("layouts/TestLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/TableOfContentPage.vue"),
      },
    ],
  },
];

export default routes;
