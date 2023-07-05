import React, { useState } from "react";
import { Navbar, OverlyNav} from "./index"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <OverlyNav setIsOpen = {setIsOpen} />
      ) : (
        <Navbar setIsOpen = {setIsOpen}/>
      )}
    </>
  );
}
