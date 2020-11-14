import React, { useMemo } from "react";
import Navbar from "@/components/shared/Navbar";
import DashboardCard from "@/components/shared/dashboard/DashboardCard";

interface DashboardCardData {
  title: string;
  description: string;
  color: string;
  link?: string;
}

const IndexPage = () => {
  const dashboardItems: DashboardCardData[] = [
    {
      title: "Orders",
      description: "Check orders and approve them.",
      color: "bg-pink-200",
    },
    {
      title: "Ingredients",
      description: "Check your ingredients and their prices.",
      color: "bg-purple-200",
    },
    {
      title: "Chocolates",
      description: "Check available chocolates and their recipes.",
      color: "bg-blue-200",
    },
    {
      title: "Purchase",
      description: "Purchase ingredients from supplier.",
      color: "bg-orange-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
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
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap -m-2">
          {dashboardItems.map((data) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                <DashboardCard
                  title={data.title}
                  description={data.description}
                  color={data.color}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
