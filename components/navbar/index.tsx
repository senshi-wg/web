"use client";

import SearchBar from "../Input/SearchBar";
import { Catalyst, SearchIcon, MenuIcon, CrossIcon } from "../assets/index";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button"

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

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
    <NextUINavbar maxWidth="full" position="sticky" className="my-4">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Catalyst />
            <p className="text-lg font-sans">Catalyst</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className="hidden lg:flex">
          <SearchBar icon={<SearchIcon />} buttonText="Search" />
        </NavbarItem>
        <NavbarItem>
          <Button className="px-4 py-1 border-2 border-[var(--gray-300)] rounded-full font-bold"> Articles</Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="px-4 py-1 border-2 border-[var(--gray-300)] rounded-full font-bold">
            Learn<DownArrow />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu className="block">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>

            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" className="px-4 py-1 sm:py-2 rounded-xl bg-[var(--secondary-300)] text-[var(--primary-700)]">Connect</Button>
        </NavbarItem>
        <NavbarItem className="block sm:hidden">
          <NavbarMenuToggle icon={(isOpen: boolean) => isOpen ? <CrossIcon /> : <MenuIcon />} />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
