"use client";

import * as React from "react";
// import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {useTheme} from "next-themes";

import {Button} from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle() {
  const {setTheme} = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full" size="theme" variant="ghost">
          <div className="relative flex w-[90%] rotate-0 scale-100 flex-row items-center gap-4 transition-all dark:-rotate-90 dark:scale-0">
            {/* <SunIcon className="h-[1rem] w-[1rem]" /> */}
            <p className="text-sm font-normal">Modo claro</p>
          </div>

          <div className="absolute flex w-[90%] rotate-90 scale-0 flex-row items-center gap-4 transition-all dark:rotate-0 dark:scale-100">
            {/* <MoonIcon className="h-[1rem] w-[1rem]" /> */}
            <p className="text-sm font-normal">Modo oscuro</p>
          </div>

          {/* <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme("light")}>Claro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Oscuro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>Sistema</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
