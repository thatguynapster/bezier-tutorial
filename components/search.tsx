import { classNames } from "@/utils";
import React, { ChangeEvent, useCallback, useState } from "react";
import { SearchIcon } from "./icons";
import { debounce } from "lodash";

interface SearchProps {
  value: string;
  placeholder?: string;
  delay?: number;
  onSearch: (query: string) => void;
}

const Search = ({
  value,
  delay = 1000,
  placeholder = "Search",
  onSearch,
}: SearchProps) => {
  const [search, setSearch] = useState<string>(() => value ?? "");

  const handleSearch = useCallback(
    debounce((search) => {
      onSearch(search);
    }, delay),
    []
  );

  return (
    <div
      className={classNames(
        "border border-neutral-200",
        "flex gap-2 items-center",
        "rounded-lg",
        "w-full"
      )}
    >
      <span className="block pl-4">
        <SearchIcon className="h-5 w-5 text-neutral-400" />
      </span>

      <input
        type="search"
        name="search"
        value={search}
        placeholder={placeholder}
        className={classNames(
          "text-sm placeholder:text-neutral-400",
          "px-4 bg-transparent",
          "outline-none",
          "w-full h-full"
        )}
        onChange={({
          currentTarget: { value },
        }: ChangeEvent<HTMLInputElement>) => {
          setSearch(value);
          handleSearch(value);
        }}
      />
    </div>
  );
};

export default Search;
