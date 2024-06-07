"use client"
import {
    ReceiptText,
    Download,
    CircleDotDashed,
    CircleX,
    CircleCheck,
    ListFilter,
  } from "lucide-react";
  
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Tabs, TabsContent } from "@/components/ui/tabs";

  import React from "react";
  import Nav from "@/app/sidenav/Nav";

  
  export function Activity() {
    return (
      <div className="flex min-h-screen w-full flex-col ">
        <Nav/>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-9">
            <div className="grid auto-rows-max items-start gap-9 md:gap-1 lg:col-span-9">
              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-6 xl:grid-cols-6">
                <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                  <CardHeader className="pb-3">
                    <CardTitle>Your Activity</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      Introducing Our Dynamic Activity Dashboard for Seamless
                      Management and Insightful Analysis.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card x-chunk="dashboard-05-chunk-1">
                  <CardHeader className="pb-2 flex justify-center items-center">
                    <CardDescription>Approve</CardDescription>
                    <CircleCheck className="h-5 w-5" />
                    <CardTitle className="text-4xl flex justify-center items-center">
                      6
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground flex justify-center items-center">
                      Total of Approve
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-05-chunk-1">
                  <CardHeader className="pb-2 flex justify-center items-center">
                    <CardDescription>Decline</CardDescription>
                    <CircleX className="h-5 w-5" />
                    <CardTitle className="text-4xl">2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground flex justify-center items-center">
                      Total of Decline
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-05-chunk-1">
                  <CardHeader className="pb-2 flex justify-center items-center">
                    <CardDescription>Pending</CardDescription>
                    <CircleDotDashed className="h-5 w-5" />
                    <CardTitle className="text-4xl">0</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground flex justify-center items-center">
                      Total of Pending
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-05-chunk-2">
                  <CardHeader className="pb-2 flex justify-center items-center">
                    <CardDescription>Total activity</CardDescription>
                    <ReceiptText className="h-5 w-5" />
                    <CardTitle className="text-4xl ">8</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground flex justify-center items-center">
                      Total of Activity
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Tabs defaultValue="week">
                <TabsContent value="week">
                  <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7">
                      <CardTitle>Activity</CardTitle>
                      <CardDescription>
                        Recent Activity from your Inventory
                      </CardDescription>
                      <div className="flex items-end justify-end">
                        <div className="flex items-end gap-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                            <Button size="sm" variant="outline" className="h-7 gap-1 bg-yellow-300 text-neutral-950"> 
                                <ListFilter className="h-3.5 w-3.5" />
                                <span>
                                  Filter
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuCheckboxItem checked>
                                All
                              </DropdownMenuCheckboxItem>
                              <DropdownMenuCheckboxItem>
                                Approved
                              </DropdownMenuCheckboxItem>
                              <DropdownMenuCheckboxItem>
                                Declined
                              </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <Button size="sm" variant="outline" className="h-7 gap-1 bg-yellow-300 text-neutral-950">
                            <Download className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only">Export</span>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader> 
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden sm:table-cell">
                              Type
                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                              Status
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Date
                            </TableHead>
                            <TableHead className="text-right">Item</TableHead>
                            <TableHead className="text-right">Serial</TableHead>
                            <TableHead className="text-right">Remarks</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="bg-accent">
                            <TableCell>
                              <div className="font-medium">Mecca Denise</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Assets
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Approved
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2024-02-23
                            </TableCell>
                            <TableCell className="text-right">Monitor</TableCell>
                            <TableCell className="text-right">ABCD1234</TableCell>
                            <TableCell className="text-right">
                              For Replace
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Kent Escala</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Lincense
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="destructive">
                                Declined
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2024-06-24
                            </TableCell>
                            <TableCell className="text-right">
                              Office 365 Personal
                            </TableCell>
                            <TableCell className="text-right">N/A</TableCell>
                            <TableCell className="text-right">
                              For Upgrade
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Orville Montero</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Assets
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Approved
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2024-06-24
                            </TableCell>
                            <TableCell className="text-right">Headset</TableCell>
                            <TableCell className="text-right">1234ABCD</TableCell>
                            <TableCell className="text-right">
                              For deploy
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Orville Montero</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Assets
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Approved
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2024-06-24
                            </TableCell>
                            <TableCell className="text-right">Monitor</TableCell>
                            <TableCell className="text-right">ASDV3162</TableCell>
                            <TableCell className="text-right">
                              For Replace
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Micah Avance</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Assets
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="destructive">
                                Decline
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2024-06-25
                            </TableCell>
                            <TableCell className="text-right">
                              Laptop(ASUS)
                            </TableCell>
                            <TableCell className="text-right">QW12QW12</TableCell>
                            <TableCell className="text-right">
                              For Replace
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Micah Avance</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Assets
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Approved
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2024-06-25
                            </TableCell>
                            <TableCell className="text-right">
                              Laptop(ASUS)
                            </TableCell>
                            <TableCell className="text-right">QW12QW12</TableCell>
                            <TableCell className="text-right">
                              For Repair
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Kent Escala</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Consumables
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Approved
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2024-06-23
                            </TableCell>
                            <TableCell className="text-right">
                              Cloud Storage
                            </TableCell>
                            <TableCell className="text-right">N/A</TableCell>
                            <TableCell className="text-right">
                              For Upgrade
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Rei Tuazon</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Consumables
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Approved
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2024-06-26
                            </TableCell>
                            <TableCell className="text-right">
                              Cloud Storage
                            </TableCell>
                            <TableCell className="text-right">N/A</TableCell>
                            <TableCell className="text-right">
                              For Upgrade
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div>{/* side pannel */}</div>
          </main>
        </div>
      </div>
    );
  }
  