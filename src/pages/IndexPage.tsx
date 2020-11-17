import React, { useMemo } from "react";
import Navbar from "@/components/shared/Navbar";
import PurchaseCard from "@/components/dashboard/PurchaseCard";
import OrderCard from "@/components/dashboard/OrderCard";
import IngredientCard from "@/components/dashboard/IngredientCard";

interface DashboardCardData {
  title: string;
  description: string;
  color: string;
  link?: string;
}

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <div className="h-32 p-6">
        <div className="text-4xl font-bold relative">
          Welcome, mkamadeus!
          <div
            className="absolute bottom-0 bg-gradient-to-r from-teal-400 to-blue-500"
            style={{ width: 200, height: 6, left: 50 }}
          />
        </div>
        <div className="mt-2 italic text-gray-600">
          What are you going to do?
        </div>
      </div>
      <div className="flex-1 p-2">
        <div className="grid grid-rows-4 grid-flow-col gap-2 w-full">
          <div className="p-2 col-span-2 row-span-3">
            <OrderCard />
          </div>
          <div className="p-2 col-span-2 row-span-1">
            <PurchaseCard />
          </div>
          <div className="p-2 col-span-1 row-span-2">
            <IngredientCard />
          </div>
          <div className="p-2 col-span-1 row-span-2">
            <OrderCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
