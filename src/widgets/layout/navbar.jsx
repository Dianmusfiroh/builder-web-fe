import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action, isDarkText }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => {
        const itemClass = `flex items-center gap-1 p-1 font-bold text-black`;

        return (
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            {href ? (
              <a href={href} target={target} className={itemClass}>
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </a>
            ) : (
              <Link to={path} target={target} className={itemClass}>
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </Link>
            )}
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center  justify-between text-black">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-black">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          <a
            href="https://www.material-tailwind.com/blocks?ref=mtkr"
            target="_blank"
          >
           
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="black"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          <a
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block opacity-50",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: (
    <div className="flex items-center gap-2">
      <img src="/img/logo3.png" alt="Mitrascale" className="h-6 w-auto" />
      <span className="font-bold text-black"></span>
    </div>
  ),
  action: (
    <a
      href="https://wa.me/6282296973952/?text=Saya%20tertarik%20untuk%20membuat%20website"
      target="_blank"
    >
      <Button variant="gradient" color="blue" dark size="sm" fullWidth>
        Buat Web Sekarang
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
