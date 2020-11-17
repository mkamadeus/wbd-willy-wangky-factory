import { getBalance } from "@/api/balance";
import React from "react";
import { useQuery } from "react-query";
import InputField from "../shared/InputField";
import LazyText from "../shared/LazyText";

const PurchaseCard = () => {
  const { data: balance, isLoading } = useQuery("balance", getBalance);

  return (
    <div className="flex flex-col rounded bg-white p-4 shadow">
      <div className="flex justify-between items-end mb-2">
        <div className="text-3xl font-bold">Purchase</div>
        <div className="flex items-center text-md">
          <div className="px-1 font-semibold">Balance: </div>
          <div className={`${!isLoading ? "" : "w-24"} px-1`}>
            {!isLoading && balance ? (
              `Rp ${balance.toLocaleString()}`
            ) : (
              <LazyText />
            )}
          </div>
        </div>
      </div>
      <div>
        {/* TODO : Make form for purchase */}
        <form>
          <InputField />
          <InputField />
        </form>
      </div>
    </div>
  );
};

export default PurchaseCard;
