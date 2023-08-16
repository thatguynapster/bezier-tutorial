import { ArtistsIcon, DashboardIcon, Logo, LogoutIcon, ProjectsIcon, SalesIcon, SettingsIcon } from "./icons"; // prettier-ignore
import SidebarOption, { SidebarOptionsProps } from "./sidebar-option";
import { classNames } from "@/utils";
import { routes } from "@/routes";
import React from "react";

const Sidebar = () => {
  const managementNav: SidebarOptionsProps[] = [
    {
      name: "Dashboard",
      href: routes.management.dashboard,
      icon: <DashboardIcon className="w-6 h-6" />,
    },
    {
      name: "Artists",
      href: routes.management.artists,
      icon: <ArtistsIcon className="w-6 h-6" />,
    },
    {
      name: "Projects",
      href: routes.management.artists,
      icon: <ProjectsIcon className="w-6 h-6" />,
    },
    {
      name: "Sales",
      href: routes.management.artists,
      icon: <SalesIcon className="w-6 h-6" />,
    },
  ];

  const sessionNav: SidebarOptionsProps[] = [
    {
      name: "Settings",
      href: routes.management.artists,
      icon: <SettingsIcon className="w-6 h-6" />,
    },
    {
      name: "Logout",
      href: "#",
      icon: <LogoutIcon className="w-6 h-6" />,
      onClick: () => {
        console.log("logged out");
      },
    },
  ];

  return (
    <div
      className={classNames(
        "flex flex-col gap-32",
        "bg-[#F2F2F2]",
        "w-60 h-full",
        "px-8 py-14"
      )}
    >
      <div className="flex gap-2 items-center">
        <Logo className="text-primary w-8 h-6" />
        <h1
          className={classNames(
            "bg-gradient-to-r from-primary to-[#427A5B]",
            "text-transparent bg-clip-text",
            "text-2xl font-semibold"
          )}
        >
          Bezier
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        {managementNav.map((nav, i) => {
          return (
            <SidebarOption
              name={nav.name}
              href={nav.href}
              icon={nav.icon}
              key={i}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-6">
        {sessionNav.map((nav, i) => {
          return (
            <SidebarOption
              name={nav.name}
              href={nav.href}
              icon={nav.icon}
              onClick={nav.onClick}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
