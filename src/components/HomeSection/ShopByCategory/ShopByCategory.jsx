import React from "react";
import ToyTab from "./ToyTab";

const ShopByCategory = ({setViewDetail}) => {

  return (
    <div className="backdrop-blur-md rounded-lg p-5">
      <h2 className="text-center text-3xl font-semibold">Shop By Category</h2>

      {/* Receive setViewDetail function from home page and pass it through Toy Tab */}
      <ToyTab setViewDetail={setViewDetail}/>
    </div>
  );
};

export default ShopByCategory;
