import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      <nav className="main-menu bg-purple-500">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </span>
        </div>
        <ul
          className={`md:flex md:static absolute duration-500 ${
            open === true ? "top-6" : "-top-36"
          }`}
        >
          {menus.map((menu) => (
            <li key={menu.id} className="mr-5">
              <a href={menu.path}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
