import React from "react";

const Shimmer = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="product">
        {Array(16)
          .fill()
          .map((ell, index) => {
            return (
              <>
                <div className="shimmer-card"></div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
