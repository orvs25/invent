"use client";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BarChart from "@/app/analyticcomponent/barchart";
import { App } from "@/app/analyticcomponent/pie";

import Nav from "@/app/sidenav/Nav";
import { Linechart } from "@/app/analyticcomponent/linechart";

export default function Analytics() {
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Nav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <h1 className="text-3xl font-bold ml-5">Analytics</h1>
        <main>
          <div className="px-5 py-2 flex-row flex">
            <Card
              x-chunk="analytics-02-chunk-3"
              className="flex h-[550px] w-[550px] flex-col mr-5"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  Asset By Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
            <Card
              x-chunk="analytics-02-chunk-3"
              className="flex h-[550px] w-[500px] flex-col mr-5"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  Asset By Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <App />
              </CardContent>
            </Card>
            <Card
              x-chunk="analytics-02-chunk-3"
              className="flex h-[550px] w-[730px] flex-col items-center justify-center"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  Asset By Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Linechart />
              </CardContent>
            </Card>
          </div>
          <div className="px-5 py-5 flex-row flex">
          <Card
              x-chunk="analytics-02-chunk-3"
              className="flex h-[500px] w-full flex-col items-center justify-center"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  Asset By Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Linechart />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
