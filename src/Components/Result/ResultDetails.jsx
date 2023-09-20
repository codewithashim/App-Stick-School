const ResultDetailsComponent = ({resultDetailData}) => {
  console.log(resultDetailData)


  return (
    <section className="w-[100%] h-[60vw]">
      <iframe src={resultDetailData?.file} width={"100%"} height={"100%"}></iframe>
    </section>
  );
};

export default ResultDetailsComponent;