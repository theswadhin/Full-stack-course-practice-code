import { useEffect, useState } from "react";
//import Products from "./Data.js";
import Productcard from "./Productcard";

let home = () => {
  let [allProducts,setProduct]=useState([])

  let getData= async () => {
    let Data=await fetch("https://dummyjson.com/products");
    let obj=await Data.JSON();
    setProduct(obj.allProducts);
  }

  useEffect(() => {
    getData();
  },[]);

  // const handleRating=()=>{

  //   let filterArray=Products.filter((obj) => {
  //       return obj.rating >4;
  //     });
  //   setProduct(filterArray);
  // }

  return (
    <>
      <div className="menu menu-horizontal font-serif text-lg bg-red-500 text-black flex justify-around ">
        <button className="hover:bg-zinc-600 rounded-xl" >
         Top rated
        </button>
        <button className="hover:bg-zinc-600 rounded-xl">
          Beauty
        </button>
        <button>
          <label>
            <input type="text" placeholder="Search any product.." className="text-white" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-5"
                fill="none"
                viewBox="0 0 24 13"
                stroke="currentColor"
              >
                <path
                  strokebuttonnecap="round"
                  strokebuttonnejoin="round"
                  strokeWidth="4"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </label>
        </button>
        <button className="hover:bg-zinc-600 rounded-xl">
          Furniture
        </button>
        <button className="hover:bg-zinc-600 rounded-xl">
          Grocery
        </button>
      </div>

      <div className="flex flex-wrap justify-around">
        {allProducts.map((obj) => {
          return <Productcard obj={obj}></Productcard>;
        })}
      </div>
    </>
  );
};

export default home;
