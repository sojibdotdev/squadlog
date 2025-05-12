import { FaWhatsapp } from "react-icons/fa6";

export const WhatsAppButton = () => {
  return (
    <>
      <a
        href="https://wa.me/+8801888559006?text=Hello,%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        className=" fixed  z-30  right-2 bottom-2 flex items-center gap-2 text-white bg-purple-800 sm:p-3 p-2 rounded-md cursor-pointer"
      >
        <FaWhatsapp size={18} />
        <span className="  sm:text-sm text-xs  font-medium">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
};
