import React from "react";

const ResultDetailsComponent = ({resultDetailData}) => {
  console.log(resultDetailData)
 

  return (
    <section className="w-[100%] h-[70vw]">
      <iframe src={`${basedUrl}${resultDetailData?.file}`} width={"100%"} height={"100%"}></iframe>
    </section>
  );
};

export default ResultDetailsComponent;