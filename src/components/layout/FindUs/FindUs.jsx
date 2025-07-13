import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mt-3 mb-3">Find Us On</h2>
      <div className="join flex join-vertical *.bg-base-100 gap-2">
        <button className="btn join-item justify-start">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaXTwitter />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <BsInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
