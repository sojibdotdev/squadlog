"use client";
import { HiOutlineXMark } from "react-icons/hi2";

const BookCall = ({
  isModalOpen,
  isLoading,
  setIsModalOpen,
  setIsLoading,
}: {
  isModalOpen: boolean;
  isLoading: boolean;
  setIsModalOpen: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}) => {
  return (
    <>
      {isModalOpen && (
        <div className=" fixed z-50 w-screen h-screen top-14 bottom-0 left-0 right-0 bg-[#0F0F0F]">
          <button
            onClick={() => setIsModalOpen(false)}
            className=" text-white absolute right-8 top-5 hover:bg-white transition-all hover:text-purple-700 bg-gray-800 p-2 rounded-full"
          >
            <HiOutlineXMark size={30} />
          </button>
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-black">
              <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <iframe
            src="https://cal.com/squadlog"
            className=" w-[90vw] mx-auto h-[90vh] mt-2 z-50"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default BookCall;
