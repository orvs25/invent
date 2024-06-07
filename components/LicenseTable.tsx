import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "./ui/badge";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ListFilter, MoreHorizontal, PlusCircle, Download } from "lucide-react";

import prisma from "@/lib/db/prisma";

export default async function LicenseTable() {

    const data = await prisma.license.findMany({orderBy:{createdAt:'desc'}}) 
    console.log(data);
    
  return (
    <TableBody>
      {
        data && data.map((x, y:number)=>{
            return(
                <TableRow key={y}>
        <TableCell className="font-medium">{x.softwareName}</TableCell>
        <TableCell>
          <Badge variant="default">{x.category}</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">{x.productKey}</TableCell>
        <TableCell className="hidden md:table-cell">{x.manufacturer}</TableCell>
        <TableCell className="hidden md:table-cell">{x.licensedto_name}</TableCell>
        <TableCell className="hidden md:table-cell">{x.licensedto_email}</TableCell>
        <TableCell className="hidden md:table-cell">{x.purchaseDate}</TableCell>
        <TableCell className="hidden md:table-cell">{x.purchaseCost}</TableCell>
        <TableCell className="hidden md:table-cell">{x.expirationDate }</TableCell>
        <TableCell className="hidden md:table-cell">{new Date(x.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Manila' })}</TableCell>

        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
            )
        })
      }
    </TableBody>
    
  );
}
