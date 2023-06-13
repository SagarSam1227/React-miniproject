import React from "react";
import data from "./constants";
import { Card } from "./card";
import { useState, useEffect, useContext } from "react";
import useFetch from "../../utils/useFetch";
import Shimmer from "./Shimmer";
import useOnline from "../../utils/useOnline";
import userContext from "../../utils/userContext";

function filterData(data, input) {
  const result = data.filter((element) => {
    return element.title.toLowerCase().includes(input.toLowerCase());
  });
  return result;
}

const Body = () => {
  const { user,setLoginUser } = useContext(userContext);
  console.log(user);
  const [input, setInput] = useState();
  const [capList, setCapList] = useState();
  const [orgList, setOrgList] = useState();
  const isOnline = useOnline();

  console.log("rendering first");
  const data = useFetch(setCapList, setOrgList);
  console.log("dataaaaaa..second", data);

  if (!isOnline) {
    return <h1>sorryy you are offline............</h1>;
  }

  if (capList) {
    return (
      <>
        <div className="search">
          <input
            type="text"
            className="searchInput"
            placeholder="  search here..."
            onChange={(e) => {
              setInput(e.target.value);
              const result = filterData(capList, input);
            }}
          ></input>


{/* 
          <input value={user.name} onChange={(e)=>{
            setLoginUser({
              name:e.target.value,
              username:'new'
            })
          }}></input> */}



          <div className="img-div">
            <img
              onClick={() => {
                const output = filterData(orgList, input);
                console.log(output);
                setCapList(output);
              }}
              className="search-img"
              src="https://img.freepik.com/free-icon/search-magnifier-interface-symbol_318-60384.jpg?w=2000"
            ></img>
          </div>
        </div>
        <div className="product">
          {capList.map((element) => {
            return <Card card={element} />;
          })}
        </div>
      </>
    );
  } else {
    return <Shimmer />;
  }
};

export default Body;
