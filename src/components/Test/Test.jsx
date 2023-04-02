import React from "react";

const Test = () => {
  return (
    <div>
      <nav className="main-menu">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500" />
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

export default Test;
