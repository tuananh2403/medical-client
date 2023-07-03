import React, { Fragment, useState } from "react";
import logo from "../assets/logo.png";
import { adminSidebar } from "../ultils/contants";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { AiOutlineDown } from "react-icons/ai";

const activedStyle = "px-4 py-2 flex items-center gap-2 bg-gray-500";
const notActivedStyle = "px-4 py-2 flex items-center gap-2 hover:bg-gray-600";

const AdminSidebar = () => {
  const [actived, setActived] = useState([]);

  const handleShowtabs = (tabID) => {
    if (actived.some((el) => el === tabID)) {
      setActived((prev) => prev.filter((el) => el !== tabID));
    } else setActived((prev) => [...prev, tabID]);
  };
  return (
    <div className="py-4 bg-gray-200 h-full ">
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <img src={logo} alt="logo" className="w-[100px] object-contain" />
        <small>Admin Workspace</small>
      </div>
      <div className="flex flex-col">
        {adminSidebar.map((el) => (
          <Fragment key={el.id}>
            {el.type === "single" && (
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  clsx(isActive && activedStyle, !isActive && notActivedStyle)
                }
              >
                {el.text}
              </NavLink>
            )}
            {el.type === "parent" && (
              <div
                onClick={() => handleShowtabs(el.id)}
                className=" flex flex-col "
              >
                <div className="px-4 py-2 hover:bg-gray-600 flex items-center justify-between gap-2 cursor-pointer">
                  <div> {el.text}</div>
                  <AiOutlineDown />
                </div>
                {actived.some((id) => +id === +el.id) && (
                  <div className="flex flex-col ">
                    {el.submenu.map((item) => (
                      <NavLink
                        key={item.id}
                        to={item.path}
                        onClick={(e) => e.stopPropagation()}
                        className={({ isActive }) =>
                          clsx(
                            isActive && activedStyle,
                            !isActive && notActivedStyle,
                            "pl-6"
                          )
                        }
                      >
                        {item.text}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
