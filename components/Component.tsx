import Link from "next/link";
import {
  File,
  PlusCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import Nav from "@/app/sidenav/Nav";

export function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Nav/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">

            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Component</CardTitle>
                  <CardDescription>
                    Manage your component and view their status.
                  </CardDescription>
            <div className="flex items-center">            
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1 bg-yellow-300 text-neutral-950">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Link href="/createcomponent">
                <Button size="sm" variant="outline" className="h-8 gap-1 bg-yellow-300 text-neutral-950">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add Component
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Serial</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Remaining</TableHead>
                        <TableHead>Min. QTY</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Order No.</TableHead>
                        <TableHead>Purchase Date</TableHead>
                        <TableHead>Purchase Cost</TableHead>
                        <TableHead>Check in/ Check out</TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
