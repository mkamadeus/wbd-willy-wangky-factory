import React from "react";

type DashboardCardProps = {
  title: string;
  description: string;
  color: string;
};

const DashboardCard: React.FC<DashboardCardProps> = (props) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md hover:shadow-lg p-4 bg-white h-full transition duration-300">
      <div className="flex-1 p-2">
        <div className={`rounded-full ${props.color} h-12 w-12`} />
      </div>
      <div className="flex-1 p-2">
        <div className="font-bold text-3xl">{props.title}</div>
        <div className="italic text-gray-500">{props.description}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
