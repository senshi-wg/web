import React, { ReactNode } from "react";
import { Button} from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const SearchBar = (props: {
  icon: ReactNode,
  buttonText: string
}) => {

  const { icon, buttonText } = props;

  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "pl-4 pr-0 bg-default-100 rounded-full border-2 border-gray-600",
        input: "ml-4 text-sm outline-none border-none",
        innerWrapper: "flex",
      }}
      endContent={
        <Button radius="full" className="px-4 py-1 rounded-full bg-[var(--main-color)]">
          {buttonText}
        </Button>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={icon}
      type="search"
    />
  );
};

export default SearchBar;
