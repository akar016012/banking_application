"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp className="w-full"
        decimals={2}
        end={amount}
        decimal="."
        prefix="$"
      />
    </div>
  );
};

export default AnimatedCounter;
