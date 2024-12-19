import React from "react";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
  return (
    <ul className="flex gap-3 text-zinc-400 md:gap-9">
      <li>
        <NavLink href="/#features">Cechy</NavLink>
      </li>
      <li>
        <NavLink href="/#testimonials">Referencje</NavLink>
      </li>
      <li>
        <NavLink href="/#pricing">Ceny</NavLink>
      </li>
      <li>
        <NavLink href="/#" external>
          Kariera
        </NavLink>
      </li>
    </ul>
  );
};
