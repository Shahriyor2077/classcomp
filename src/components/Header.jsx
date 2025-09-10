import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const isPink = pathname === "/user";
  console.log(isPink);

  return (
    <header
      className={`${
        isPink ? "bg-pink-300" : ""
      }  bg-amber-300  flex h-20 items-center justify-around `}
    >
      <div className="font-bold text-2xl text-red-700">Dummy</div>
      <NavLink
        className={({ isActive }) =>
          `uppercase ${isActive ? "text-red-500 underline " : ""} `
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `uppercase ${isActive ? "text-red-500 underline " : ""} `
        }
        to={"/user"}
      >
        User
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `uppercase ${isActive ? "text-red-500 underline " : ""} `
        }
        to={"/login"}
      >
        Login
      </NavLink>
    </header>
  );
};

export default Header;
