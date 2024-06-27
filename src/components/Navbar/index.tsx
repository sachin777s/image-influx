"use client";
import { ImageInfluxLogo } from "@/components/assets"
import { navData } from "./navbarData";
import {
  Navbar as AppNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button"
import { ThemeSwitcher } from "../ThemeSwitcher";
import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";
import { FaCaretDown } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {

  const[isAuthenticated,setIsAuthenticated] = useState<boolean>(false);


  return (
    <AppNavbar maxWidth="2xl" isBordered className="min-w-0">
      <NavbarBrand>
        <Link className="text-xl sm:text-2xl flex items-center gap-1 font-bold" href={"/"}>
          <ImageInfluxLogo height={22} width={22} />
          <span className="hidden sm:contents">{navData.brandName}</span>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button className="bg-transparent pr-0" variant="flat">
                Explore <FaCaretDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              {
                navData.exploreMenu.map((item, index) =>
                  <DropdownItem key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownItem>
                )
              }
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>


        <NavbarItem className="">
          {
            isAuthenticated
              ? <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    as="button"
                    className="transition-transform"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Profile Actions"
                  variant="flat"
                  topContent={
                    <div className="pl-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">zoey@example.com</p>
                    </div>
                  }
                >
                  {
                    navData.userMenu.map((item, index) =>
                      <DropdownItem key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownItem>
                    )
                  }
                </DropdownMenu>
              </Dropdown>
              :
              <Button variant="light">Login</Button>
          }
        </NavbarItem>
        <NavbarItem>
          <Button className="p-0 sm:px-4 sm:py-1 bg-[var(--primary-color)] text-white font-bold min-w-[40px] w-[30px] sm:w-auto">
            <span className="hidden sm:contents">Upload</span>
            <span className="contents sm:hidden"><FaUpload width={90} /></span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </AppNavbar>
  )
}
