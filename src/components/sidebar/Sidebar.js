import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";



function Sidebar() {

    // const pathName = useLocation().pathname;

  const menus = [
    { name: "Home", path: "/" },
    { name: "고객정보 조회", path: "/memberEdit" },
    { name: "고객정보 등록", path: "/memberReg" },
    { name: "약품정보 조회", path: "/medicineEdit" },
    { name: "약품정보 등록", path: "/medicineReg" },
    { name: "기기 시간 설정", path: "/timeSet" },
    { name: "약 복용 시간 조회", path: "/MedicineTime" },
    { name: "비밀번호 변경", path: "/passwordEdit" },
    { name: "개인정보 관리", path: "/profileEdit" },
    { name: "비밀번호 변경", path: "/passwordEdit" }

  ];

  return (
    <div className="sidebar">
      {menus.map((menu, index) => {
        return (
          <NavLink to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
            />
          </NavLink>
        );
      })}
    </div>
  );
}

export default Sidebar;