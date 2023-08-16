import React, { ReactNode } from "react";
import { classNames } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export interface SidebarOptionsProps {
  icon: ReactNode;
  name: string;
  href: string;
  onClick?: () => void;
}

const SidebarOption = ({ name, href, icon, onClick }: SidebarOptionsProps) => {
  const router = useRouter();

  const handleActive = (link: string) => {
    return router.pathname.startsWith(link);
  };

  return (
    <Link
      //   {...{ href }}
      href={href}
      className={classNames(
        handleActive(href)
          ? "bg-primary text-white"
          : "bg-transparent text-secondary",
        name.toLowerCase() === "logout" && "!text-danger",
        "rounded cursor-pointer",
        "hover:bg-secondary hover:text-white",
        "flex gap-3",
        "px-4 py-2"
      )}
      onClick={(ev) => {
        if (onClick) {
          ev.preventDefault();
          onClick();
        }
      }}
    >
      {icon}

      <p className="font-medium">{name}</p>
    </Link>
  );
};

export default SidebarOption;
