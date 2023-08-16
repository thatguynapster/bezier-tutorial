import React, { useEffect, useState } from "react";
import FormGroup from "./formgroup";
import { BellIcon, SearchIcon } from "./icons";
import Image from "next/image";
import { useDebouncer } from "@/utils";

const TopNav = ({ onSearch }: { onSearch: (term: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceQuery = useDebouncer(searchTerm, 1500);

  // TODO hit an actual route
  useEffect(() => {
    let mounted = true;
    onSearch(debounceQuery);

    return () => {
      mounted = false;
    };
  }, [debounceQuery]);

  return (
    <div className="flex justify-between p-8">
      <div className="lg:flex hidden cursor-pointer w-[741px]">
        <FormGroup
          type={"text"}
          id={"pageSearch"}
          className="bg-[#fafafa] text-gray-700 w-full rounded-md pl-12 py-3 cursor-pointer"
          prependIcon={<SearchIcon className="w-32 text-gray-600" />}
          placeholder="Search artists, projects"
          onAppendClicked={() => {}}
          prependIconContainerClass="w-10 pl-4"
          onValueChanged={(ev: any) => {
            setSearchTerm(ev.target.value);
          }}
          onFocusOut={() => {}}
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
