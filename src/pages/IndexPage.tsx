import React, { useContext, useEffect } from "react";
import PurchaseCard from "@/components/dashboard/PurchaseCard";
import OrderCard from "@/components/dashboard/OrderCard";
import IngredientCard from "@/components/dashboard/IngredientCard";
import RecipeCard from "@/components/dashboard/RecipeCard";
import { ApiContext } from "@/context/ApiContext";
import { useHistory } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

interface DashboardCardData {
  title: string;
  description: string;
  color: string;
  link?: string;
}

const IndexPage = () => {
  const apiContext = useContext(ApiContext);
  const userContext = useContext(UserContext);
  const history = useHistory();

  // useEffect(() => {
  //   console.log(apiContext.token, userContext.isLoggedIn);
  //   if (!userContext.isLoggedIn) {
  //     history.push("/login");
  //   }
  // }, [apiContext]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
            <RecipeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
