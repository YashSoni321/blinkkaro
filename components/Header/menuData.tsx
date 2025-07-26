import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/features",
  },
  // {
  //   id: 3,
  //   title: "Company",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "About Us",
  //       newTab: false,
  //       path: "/about",
  //     },
  //     {
  //       id: 32,
  //       title: "Contact",
  //       newTab: false,
  //       path: "/contact",
  //     },
  //     {
  //       id: 33,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //   ],
  // },
];

export default menuData;
