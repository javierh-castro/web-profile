import './Button.css'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function ButtonIdioma() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Español"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown className="custom-dropdown-menu">
      
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize custom-button"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="Español" className="custom-dropdown-item">Español</DropdownItem>
        <DropdownItem key="Ingles" className="custom-dropdown-item">Ingles</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
