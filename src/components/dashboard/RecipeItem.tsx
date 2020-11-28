import { ChocolateBase } from "@/types/chocolate";
import { IngredientRecipe } from "@/types/ingredient";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import LazyText from "../shared/LazyText";

interface Props {
  chocolate: ChocolateBase;
  ingredients: Array<IngredientRecipe>;
}

const Lazy: React.FC = () => {
  return (
    <div className="w-full p-1">
      <LazyText />
    </div>
  );
};

const RecipeItem: React.FC<Props> & { Lazy: React.FC } = (props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <div
        className="flex p-1"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div
          className={`transform ${
            show ? "rotate-90" : "rotate-0"
          } transition duration-150`}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded w-2 h-2 bg-pink-500 mx-2" />
        </div>
        <div className="text-sm">{props.chocolate.name}</div>
      </div>
      {show && (
        <div className="flex flex-col ml-4">
          {props.ingredients &&
            props.ingredients.map((ing) => {
              return (
                <div className="flex -m-1">
                  <div className="italic text-xs text-gray-700 p-1">
                    {ing.name}
                  </div>
                  <div className="italic text-xs text-gray-700 p-1">
                    {ing.amount}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

RecipeItem.Lazy = Lazy;

export default RecipeItem;
