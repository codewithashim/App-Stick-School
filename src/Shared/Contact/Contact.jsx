import { FaMapMarkerAlt,FaRegEnvelope ,FaPhoneSquareAlt} from "react-icons/fa";


const Contact = () => {

  return (
    <section>
        <div>
          <div className="w-full p-8 mx-auto border">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="flex items-center gap-4 text-[1.5rem] font-semibold"
                >
                 <FaMapMarkerAlt className="text-[2.5rem]"/> <span>Address : Sylhet </span> 
                </label>
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="flex items-center gap-4 text-[1.5rem] font-semibold"
                >
                 <FaRegEnvelope className="text-[2.5rem]"/> <span> Email : school.info@gmail.com</span> 
                </label>
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="flex items-center gap-4 text-[1.5rem] font-semibold"
                >
                 <FaPhoneSquareAlt className="text-[2.5rem]"/> <span>Phone : +880174415662 </span> 
                </label>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default Contact;
