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

export default async function AssetTable() {

    const data = await prisma.assets.findMany({orderBy:{createdAt:'desc'}}) 
    
  return (
    <TableBody>
      {
        data && data.map((x, y:number)=>{
            return(
                <TableRow key={y}>
        <TableCell className="font-medium">{x.model}</TableCell>
        
        <TableCell>
          <Badge variant="default">{x.status}</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">{x.serial}</TableCell>
        <TableCell className="hidden md:table-cell">{x.category}</TableCell>
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
