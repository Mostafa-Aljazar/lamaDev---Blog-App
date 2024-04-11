import React from "react";

const HydrationTest_2nd_Solution = () => {
  // 2nd solution => craete a specific component to display SSR

  const a = Math.random();
  //   console.log(a);

  return <div>{`HydrationTest_2nd_Solution => ` + a}</div>;
};

export default HydrationTest_2nd_Solution;

const HydrationTest_3rd_Solution = () => {
  // 3nd solution => their is a  Hydration problem,but I'm not to show in a browser

  const a = Math.random();
  //   console.log(a);

  return (
    <div suppressHydrationWarning>{`HydrationTest_3rd_Solution => ` + a}</div>
  );
};

export { HydrationTest_3rd_Solution };
