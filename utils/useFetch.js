import React from "react";
import { useEffect, useState } from "react";

const useFetch = (firstFun, secondFun) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("UseEffect...fetching");
    setData(getFetchData());
  }, []);

  async function getFetchData() {
    const fechData = await fetch(
      "https://api.nike.com/cic/browse/v2?queryid=products&anonymousId=81D7514FBB5E024F6306C6EE7EC15911&country=in&endpoint=%2Fproduct_feed%2Frollup_threads%2Fv2%3Ffilter%3Dmarketplace(IN)%26filter%3Dlanguage(en-GB)%26filter%3DemployeePrice(true)%26filter%3DattributeIds(744dd301-77dd-4f26-928f-da8ecf422729%2C0f64ecc7-d624-4e91-b171-b83a03dd8550)%26anchor%3D24%26consumerChannelId%3Dd9a5bc42-4b9c-4976-858a-f159cf99c647%26count%3D24&language=en-GB&localizedRangeStr=%7BlowestPrice%7D%E2%80%94%7BhighestPrice%7D"
    );
    const json = await fechData.json();
    const result = json.data.products.products;
    firstFun(result);
    secondFun(result);
    return result;
  }

  return data;
};

export default useFetch;
