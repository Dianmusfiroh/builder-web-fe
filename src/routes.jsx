import { Home, Profile, SignIn, SignUp, Desain, Harga, HubungiKami, CariDomain } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
   {
    name: "cari domain",
    path: "/cari-domain",
    element: <CariDomain />,
  },
  {
    name: "cari desain",
    path: "/desain",
    element: <Desain />,
  },
  {
    name: "harga",
    path: "/harga",
    element: <Harga />,
  },
  {
    name: "hubungi kami",
    path: "/hubungi-kami",
    element: <HubungiKami />,
  },
 
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
