import {
  AdminDashboard,
  AdminScrapperProducts,
  AdminScrapperUserAdd,
  AdminScrapperUserDetail,
  Home,
  Profile,
  SignIn,
  SignUp,
  Desain,
  Harga,
  HubungiKami,
  CariDomain,
} from "@/pages";

export const routes = [
  {
    // name: "home",
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    hidden: true,
  },
  {
    path: "/admin/scrapper/products",
    element: <AdminScrapperProducts />,
    hidden: true,
  },
  {
    path: "/admin/scrapper/users/add",
    element: <AdminScrapperUserAdd />,
    hidden: true,
  },
  {
    path: "/admin/scrapper/users/:id",
    element: <AdminScrapperUserDetail />,
    hidden: true,
  },
  //  {
  //   name: "cari domain",
  //   path: "/cari-domain",
  //   element: <CariDomain />,
  // },
  // {
  //   name: "cari desain",
  //   path: "/desain",
  //   element: <Desain />,
  // },
  // {
  //   name: "harga",
  //   path: "/harga",
  //   element: <Harga />,
  // },
  // {
  //   name: "hubungi kami",
  //   path: "/hubungi-kami",
  //   element: <HubungiKami />,
  // },
 
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
