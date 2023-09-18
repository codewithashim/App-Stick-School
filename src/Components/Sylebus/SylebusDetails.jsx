// import { basedUrl } from "@/src/Utils/Network/Network";

const SylebusDetailsComponent = ({SylebusDetailData}) => {
  console.log(SylebusDetailData)


  return (
    <section className="w-[100%] h-[60vw]">
      {/* <iframe src={`http://localhost:8000/api/v1/${SylebusDetailData?.file}`} width={"80%"} height={"60%"}></iframe> */}

      <h1 className="text-[2rem] text-red-500 text-center">
        Under Construction ... {"{Update Soon...}"}
      </h1>

    </section>
  );
};

export default SylebusDetailsComponent;