import { getBalance } from "@/api/balance";
import { getSupplierIngredients } from "@/api/ingredient";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import DropdownField from "../shared/DropdownField";
import InputField from "../shared/InputField";
import LazyText from "../shared/LazyText";

const PurchaseCard = () => {
  const { data: balance, isLoading: isBalanceLoading } = useQuery(
    "balance",
    getBalance
  );
  const { data: ingredients, isLoading: isIngredientsLoading } = useQuery(
    "ingredientsSupplier",
    getSupplierIngredients
  );
  const { register, handleSubmit } = useForm();

  const [count, setCount] = useState<number>(1);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col rounded bg-white p-4 shadow">
      <div className="flex justify-between items-end mb-2">
        <div className="text-3xl font-bold">Purchase</div>
        <div className="flex items-center text-md">
          <div className="px-1 font-semibold">Balance: </div>
          <div className={`${!isBalanceLoading ? "" : "w-24"} px-1`}>
            {!isBalanceLoading && balance ? (
              `Rp ${balance.toLocaleString()}`
            ) : (
              <LazyText />
            )}
          </div>
        </div>
      </div>
      <div>
        {!isIngredientsLoading && ingredients ? (
          <>
            <div className="flex p-2 -m-1">
              <div className="p-1">
                <button
                  className="bg-green-500 text-white rounded-full w-6 h-6"
                  onClick={() => {
                    decrementCount();
                  }}
                >
                  -
                </button>
              </div>
              <div className="p-1">
                <button
                  className="bg-green-500 text-white rounded-full w-6 h-6"
                  onClick={() => {
                    incrementCount();
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {Array(count)
                .fill(1)
                .map((_, i) => {
                  return (
                    <div className="flex p-2 -m-1">
                      <div className="w-full p-1">
                        <DropdownField
                          label="Ingredient"
                          options={ingredients.map((ing) => ing.uuid as string)}
                          optionsLabel={ingredients.map((ing) => ing.name)}
                          name={`uuid[${i}]`}
                          ref={register}
                          placeholder="Select ingredient..."
                        />
                      </div>
                      <div className="w-full p-1">
                        <InputField
                          label="Count"
                          type="number"
                          name={`qty[${i}]`}
                          ref={register}
                        />
                      </div>
                    </div>
                  );
                })}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white rounded p-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : null}
        {/* TODO : Make form for purchase */}
      </div>
    </div>
  );
};

export default PurchaseCard;
