"use client";

import SearchBar from "../Input/SearchBar";
import {
  Catalyst,
  SearchIcon,
  MenuIcon,
  CrossIcon
} from "../assets/index";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";

import { Button } from "@nextui-org/button"

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
} from "@/components/icons";
import { DownArrow } from "../assets/index";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" shouldHideOnScroll={true}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Catalyst />
            <p className="text-xl sm:text-2xl font-bold font-sans">Catalyst</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className="hidden lg:flex">
          <SearchBar icon={<SearchIcon />} buttonText="Search" placeHolder="Search..." />
        </NavbarItem>
        <NavbarItem>
          <Button variant="bordered" className="px-4 py-1 rounded-full font-bold"> Articles</Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="px-4 py-1 rounded-full font-bold">
                Learn<DownArrow />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">Catalyst Overview</DropdownItem>
              <DropdownItem key="copy">SDK</DropdownItem>
              <DropdownItem key="edit">FAQ</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="px-4 py-1 sm:py-2 rounded-xl bg-[var(--secondary-300)] text-[var(--primary-700)]">Connect</Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
