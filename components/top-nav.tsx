import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useDebouncer } from "@/utils";
import { BellIcon } from "./icons";
import Search from "./search";

const TopNav = () => {
  return (
    <div className="flex justify-between p-8">
      <div className="lg:flex hidden cursor-pointer w-[741px]">
        <Search
          value={""}
          placeholder="Search"
          onSearch={(query: string) => {
            console.log(query);
          }}
        />
      </div>

      <div className="flex">
        <Image
          width={40}
          height={40}
          className="w-10 h-10 object-contain object-center"
          src={"/img/user_image.png"}
          alt={"User Image"}
        />

        <div className="ml-2">
          <p className="text-secondary text-sm font-semibold">Karim Benzema</p>
          <p className="text-muted text-sm font-semibold">Admin</p>
        </div>

        <div className="rounded-full bg-[#F2F2F2] w-10 h-10 flex items-center justify-center ml-10">
          <BellIcon className="w-6 h-6 text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
