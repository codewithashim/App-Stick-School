const RutineDetailsComponent = ({RutineDetailData}) => {

  return (
    <section className="w-[100%] h-[60vw]">
    <iframe src={RutineDetailData?.file} width={"100%"} height={"100%"}></iframe>
    </section>
  );
};

export default RutineDetailsComponent;