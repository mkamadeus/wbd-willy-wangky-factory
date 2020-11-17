import { IngredientMeta } from "@/types/ingredient";
import React, { useState } from "react";
import LazyText from "../shared/LazyText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  ingredientId?: number;
  name?: string;
  list?: Array<IngredientMeta>;
}

const Lazy: React.FC = () => {
  return (
    <div className="w-full p-1">
      <LazyText />
    </div>
  );
};

const IngredientItem: React.FC<Props> & { Lazy: React.FC } = (props) => {
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
        <div className="text-sm">{props.name}</div>
      </div>
      {show && (
        <div className="flex flex-col ml-4">
          {props.list &&
            props.list.map((meta) => {
              return (
                <div className="flex justify-between">
                  <div className="italic text-xs text-gray-700">
                    {meta.expiryDate.toDateString()}
                  </div>
                  <div className="italic text-xs text-gray-700">
                    {meta.stock}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

IngredientItem.Lazy = Lazy;

export default IngredientItem;
