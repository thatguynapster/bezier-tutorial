import React from "react";

const Card = ({
  value,
  title,
  currency,
}: {
  value: string;
  title: string;
  currency?: boolean;
}) => {
  return (
    <div className="rounded-md bg-[#212121] p-4">
      <h1 className="text-2xl text-white font-semibold">
        {currency && "$"}
        {value}
      </h1>
      <p className="text-white text-xs">{title}</p>
    </div>
  );
};

export default Card;
