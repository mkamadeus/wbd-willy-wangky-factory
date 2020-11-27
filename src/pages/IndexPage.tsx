import React, { ReactNode, useMemo, useState } from "react";
import PurchaseCard from "@/components/dashboard/PurchaseCard";
import OrderCard from "@/components/dashboard/OrderCard";
import IngredientCard from "@/components/dashboard/IngredientCard";
import RecipeCard from "@/components/dashboard/RecipeCard";
import ChocolateCard from "@/components/dashboard/ChocolateCard";
import Navbar from "@/components/shared/Navbar";
import useLogin from "@/hooks/useLogin";

interface DashboardCardData {
  title: string;
  description: string;
  color: string;
  link?: string;
}

const IndexPage = () => {
  useLogin();

  const [cardIndex, setCardIndex] = useState<number>(0);

  const cardNavigation = useMemo((): {
    name: string;
    component: ReactNode;
  }[] => {
    return [
      {
        name: "Orders",
        component: <OrderCard />,
      },
      {
        name: "Purchases",
        component: <PurchaseCard />,
      },
      {
        name: "Ingredient",
        component: <IngredientCard />,
      },
      {
        name: "Recipes",
        component: <RecipeCard />,
      },
      {
        name: "Chocolates",
        component: <ChocolateCard />,
      },
    ];
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex w-full p-2 justify-evenly">
        {cardNavigation.map((nav, i) => {
          return (
            <div
              className={`${
                i === cardIndex
                  ? "rounded-full bg-blue-500 text-white font-bold"
                  : "underline text-blue-500"
              } p-2 w-32 text-center`}
              onClick={() => {
                setCardIndex(i);
              }}
            >
              {nav.name}
            </div>
          );
        })}
      </div>
      <div className="p-6 h-full">{cardNavigation[cardIndex].component}</div>
    </div>
  );
};

export default IndexPage;
