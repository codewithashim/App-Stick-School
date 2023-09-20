const SylebusDetailsComponent = ({SylebusDetailData}) => {

  return (
    <section className="w-[100%] h-[60vw]">
   <iframe src={SylebusDetailData?.file} width={"100%"} height={"100%"}></iframe>

      {/* <h1 className="text-[2rem] text-red-500 text-center">
        Under Construction ... {"{Update Soon...}"}
      </h1> */}

    </section>
  );
};

export default SylebusDetailsComponent;