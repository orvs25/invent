import Link from "next/link";

import {
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { UserButton, useAuth } from "@clerk/nextjs";

const menu2 = [
  "Dashboard",
  "Activity",
  "Assets",
  "Analytics",
  "License",
  "Accessories",
  "Consumables",
  "Component",
  "Furnitures",
  "Vehicles",
  "Appliances",
  "Users",
  "Settings",
];
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Description } from "@radix-ui/react-toast";

export default function Nav() {
  const { userId } = useAuth();
  return (
    <div className="flex flex-col gap-4  w-full ">
      
      <header className="top-0 flex h-16 items-center justify-center gap-4 bg-background px-4 md:px-6 bg-yellow-300 drop-shadow-lg w-full">
        <div className="flex flex-row items-center justify-center">
        </div>
        <div className="flex flex-row items-center justify-center">
          <a href="/dashboard" className="font-bold ">
            UAS INVENTORY SYSTEM
          </a>
        </div>
        <div>
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <h1 className="font-bold">|</h1>
            <Link
              href="/dashboard"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Dashboard</p>
            </Link>
            <Link
              href="/activity"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Activity</p>
            </Link>
            <Link
              href="/analytics"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Analytics</p>
            </Link>
            <Link
              href="/users"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <p className="font-bold">Users</p>
            </Link>
          </nav>
        </div>
        <div>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">
                  Inventory
                </MenubarTrigger>
                <MenubarContent className="flex">
                  <div className="grid grid-cols-2 w-80 h-auto">
                    <MenubarItem className="font-bold ">
                      <a href="/assets">Assets <br/> 
                      <Description className="font-light"> Tangible items or equipment that are stocked within the system.
                       </Description> 
                      </a>
                    </MenubarItem>
                    <MenubarItem className="font-bold">
                      <a href="/license">License<br/> 
                      <Description className="font-light"> Legal authorization of digital resources within an organization.
                       </Description> 
                      </a>
                    </MenubarItem>
                    <MenubarItem className="font-bold ">
                      <a href="/accessories">Accessories<br/> 
                      <Description className="font-light"> Additional peripherals and supplementary items.
                       </Description> 
                      </a>
                    </MenubarItem>
                    <MenubarItem className="font-bold">
                      <a href="/consumables">Consumables<br/> 
                      <Description className="font-light"> Other supplies that are regularly depleted and need replenishment.
                       </Description> 
                      </a>
                    </MenubarItem>
                  </div>
                  <div className="grid grid-cols-2 w-80 h-auto">
                    <MenubarItem className="font-bold">
                      <a href="/component">Component<br/> 
                      <Description className="font-light"> Elements that make up larger systems, like CPUs.
                       </Description> 
                      </a>
                    </MenubarItem>
                    <MenubarItem className="font-bold">
                      <a href="/furniture">Furniture<br/> 
                      <Description className="font-light"> Movable objects used to enhance the environment within a workspace.
                       </Description> 
                      </a>
                    </MenubarItem>
                    <MenubarItem className="font-bold">
                      <a href="/vehicle">Vehicle<br/> 
                      <Description className="font-light"> Means of transportation designed to carry people or goods.
                       </Description> 
                      </a>
                    </MenubarItem>
                    <MenubarItem className="font-bold">
                      <a href="/appliances">Appliances<br/> 
                      <Description className="font-light"> Electronic devices designed for specific functions.
                       </Description> 
                      </a>
                    </MenubarItem>
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        <div className="flex w-auto items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">

          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                Create New
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <a href="/createpages/createassets">Assets</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createlicense">License</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createaccessories">Accessories</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createconsumables">Consumables</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createcomponent">Component</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createfurniture">Furniture</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createvehicle">Vehicle</a>
                </MenubarItem>
                <MenubarItem>
                  <a href="/createpages/createappliances">Appliances</a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        {!userId && (
          <Link href={"/sign-in"}>
            <Button>Sign In</Button>
          </Link>
        )}
        {userId && <UserButton />}
      </header>
    </div>
  );
}
