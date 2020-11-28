import React, { useState } from "react";
import { getBalance } from "@/api/balance";
import { getSupplierIngredients } from "@/api/ingredient";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import DropdownField from "../shared/DropdownField";
import InputField from "../shared/InputField";
import LazyText from "../shared/LazyText";
import { createTransaction } from "@/api/transaction";
import Swal from "sweetalert2";

type FormData = {
  quantity: number[];
  uuid: string[];
};

const PurchaseCard = () => {
  const {
    data: balance,
    isLoading: isBalanceLoading,
    refetch: refetchBalance,
  } = useQuery("balance", getBalance);
  const { data: ingredients, isLoading: isIngredientsLoading } = useQuery(
    "ingredientsSupplier",
    getSupplierIngredients
  );
  const [mutate] = useMutation(createTransaction);

  const { register, handleSubmit, watch } = useForm();

  const [count, setCount] = useState<number>(1);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onSubmit = async (ingredients: FormData) => {
    const ingredientList = [];
    for (let i = 0; i < ingredients.quantity.length; i++) {
      ingredientList.push({
        quantity: ingredients.quantity[i],
        uuid: ingredients.uuid[i],
      });
    }
    await mutate({
      data: { balance: balance as number, ingredients: ingredientList },
    })
      .then((response) => {
        refetchBalance();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Transaction success, balance has been cut.",
        });
        console.log(response);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Transaction failed.",
          text: "We did an oopsie!",
        });
        console.log(err);
      });
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
            <div>
              {ingredients.map((ing) => {
                return (
                  <div className="flex -m-1 text-xs">
                    <div className="p-1">{ing.name}</div>
                    <div className="p-1">Rp {ing.price?.toLocaleString()}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end p-2 -m-1">
              <div className="p-1">
                <button
                  className="bg-green-500 text-white rounded-full w-6 h-6 focus:outline-none"
                  onClick={() => {
                    decrementCount();
                  }}
                >
                  -
                </button>
              </div>
              <div className="p-1">
                <button
                  className="bg-green-500 text-white rounded-full w-6 h-6 focus:outline-none"
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
                  // console.log(ingredients);
                  return (
                    <div className="flex p-2 -m-1" key={`form-item-${i}`}>
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
                          name={`quantity[${i}]`}
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
