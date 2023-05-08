import { motion } from "framer-motion";
import { HiOutlineUser, HiX, HiStar, HiOutlineHeart } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import {
  MdOutlineBedroomChild,
  MdOutlineShower,
  MdOutlineTableBar,
  MdSmartphone,
  MdOutlineEditCalendar,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { FiDownload } from "react-icons/fi";

const HotelDetail = ({ hotel, isOpen, onClose }: any) => {
  return (
    <motion.div
      className="fixed overflow-y-auto h-screen top-0 w-full bg-overlay z-50"
      animate={{
        right: isOpen ? 0 : "-100%",
        transition: { duration: 0.5 },
      }}
    >
      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
          transition: { duration: 0.5 },
        }}
        className="close h-9 w-9 cursor-pointer flex items-center justify-center fixed top-5 left-80 z-50 bg-white rounded-full"
      >
        <HiX size={16} color={"black"} onClick={onClose} />
      </motion.div>

      <div className="block p-8 bg-white w-9/12 ml-auto ">
        <div className="flex gap-4 h-120">
          <div className="row-span-3 w-[62%]">
            <img
              src={hotel?.images[0]}
              className="h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4 w-[38%]">
            <div className="col-span-2 w-full h-[232px]">
              <img
                src={hotel?.images && hotel?.images[1]}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="row-span-2 col-span-2 w-full h-[232px]">
              <img
                src={hotel?.images && hotel?.images[2]}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-8 gap-8 relative">
          <div>
            <div className="flex justify-between text-left border-b border-grey">
              <div>
                <p className="text-[32px] font-medium">{hotel?.name}</p>
                <p className="text-base text-light-grey text-base mb-8">
                  {hotel?.location}
                </p>
                <div className="flex justify-between gap-10 mb-8">
                  <div className="flex items-center">
                    <HiOutlineUser className="mr-2" size={20} />
                    <p className="text-sm">16+ guests</p>
                  </div>
                  <div className="flex">
                    <MdOutlineBedroomChild className="mr-2" size={20} />
                    <p className="text-sm">8 beds</p>
                  </div>
                  <div className="flex">
                    <IoBedOutline className="mr-2" size={20} />
                    <p className="text-sm">8 beds</p>
                  </div>
                  <div className="flex">
                    <MdOutlineShower className="mr-2" size={20} />
                    <p className="text-sm">8 baths</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="heart w-9 h-9 rounded-full mr-2 bg-grey flex items-center justify-center top-3 right-3">
                  <FiDownload size={16} />
                </div>
                <div className="heart w-9 h-9 rounded-full  bg-grey flex items-center justify-center top-3 right-3">
                  <HiOutlineHeart size={16} />
                </div>
              </div>
            </div>
            <div className="flex py-8 border-b border-grey gap-8">
              <div>
                <div className="mb-4 h-14 w-14 rounded-full bg-[#fef8f8] flex justify-center items-center">
                  <MdOutlineTableBar size={30} color="#d43b50" />
                </div>
                <p className="text-base font-medium text-left">
                  Dedicated workspace
                </p>
                <p className="text-sm text-light-grey text-left">
                  A private room with wifi that’s well-suited for working.
                </p>
              </div>
              <div>
                <div className="mb-4 h-14 w-14 rounded-full bg-[#fef8f8] flex justify-center items-center">
                  <MdSmartphone size={30} color="#d43b50" />
                </div>
                <p className="text-base font-medium text-left">Self check-in</p>
                <p className="text-sm text-light-grey text-left">
                  Check yourself in with the keypad.
                </p>
              </div>
              <div>
                <div className="mb-4 h-14 w-14 rounded-full bg-[#fef8f8] flex justify-center items-center">
                  <MdOutlineEditCalendar size={30} color="#d43b50" />
                </div>
                <p className="text-base font-medium text-left">
                  Free cancellation before Jul 25
                </p>
                <p className="text-sm text-light-grey text-left">
                  A private room with wifi that’s well-suited for working.
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[18px] text-left mb-2 mt-10 ">
                About this space
              </p>
              <p className="text-sm text-light-grey text-left">
                Enjoy a quiet getaway in this charming cottage renovated,
                designed, and owned by Chip and Joanna Gaines. Originally the
                carriage house for Hillcrest Estate, this home includes one
                bedroom, one bath, an office nook and a private back patio. This
                makes it the perfect getaway for a party of two, or if you’re
                stopping through town and need a restful place to retreat.
              </p>

              <p className="font-medium text-base mb-2 mt-8 text-left">
                The space
              </p>
              <p className="text-sm text-light-grey text-left">
                {" "}
                An open living, dining, and kitchen area provide ample room in
                this cozy cottage. French double doors lead you out to the back
                patio to enjoy your own private outdoor space. A dedicated,
                covered parking spot for your use. The parking lot is shared
                with Hillcrest Estate guests.
              </p>

              <p className="text-red text-sm font-medium text-left mt-8">
                Read more
              </p>
            </div>
          </div>

          <div
            className="sticky top-4 w-full max-w-[360px] bg-grey rounded-2xl p-6 h-fit"
            style={{
              backgroundColor: "rgb(245, 245, 244)",
            }}
          >
            <div>
              <div className="flex justify-between mb-6">
                <p className="text-2xl font-semibold">
                  $10,000 <span className="text-sm font-normal">/ night</span>
                </p>
                <div className="flex gap-2 items-center">
                  <HiStar className="" size={23} />
                  <p className="text-sm">{hotel?.rating}</p>
                </div>
              </div>
              <div className="flex justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs text-left mb-1 text-[#717171]">
                    Check In
                  </p>
                  <div className="relative max-w-sm ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MdOutlineCalendarToday size={"20px"} color={"#717171"} />
                    </div>
                    <input
                      type="text"
                      className="bg-white h-12 text-sm rounded-lg text-black block w-full pl-10 py-3 px-4"
                      placeholder="Select date"
                      value="June 14 - 21"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-left mb-1 text-[#717171]">
                    Check Out
                  </p>
                  <div className="relative max-w-sm ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MdOutlineCalendarToday size={"20px"} color={"#717171"} />
                    </div>
                    <input
                      type="text"
                      className="bg-white h-12 text-sm rounded-lg text-black block w-full pl-10 py-3 px-4"
                      placeholder="Select date"
                      value="June 14 - 21"
                    />
                  </div>
                </div>
              </div>
              <div className=" pb-8  border-b border-grey">
                <p className="text-xs text-left mb-1 text-[#717171]">Guest</p>
                <div>
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="bg-white h-12 rounded-lg text-sm px-4 py-3 text-left text-black inline-flex items-center w-full justify-between"
                    type="button"
                  >
                    1 guests{" "}
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex justify-between text-sm mb-1">
                  <p className="font-medium">6 nights</p>
                  <p>$2,199</p>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <p className="font-medium">Cleaning service</p>
                  <p>$85</p>
                </div>
                <div className="flex justify-between text-sm pb-6  border-b border-grey">
                  <p className="font-medium">Airbnb service fee</p>
                  <p>$322</p>
                </div>

                <div className="flex justify-between text-sm text-left mt-6">
                  <p className="text-base font-semibold">
                    Total{" "}
                    <span className="font-normal block text-xs text-[#717171]">
                      Before taxes
                    </span>
                  </p>
                  <p>$2,606</p>
                </div>
              </div>

              <button className="h-12 text-sm w-full button-details py-2 px-6 text-white mt-6 rounded-xl">
                Reserve
              </button>
            </div>

            {/* <div className="flex">
              <p>This is a rare find</p>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HotelDetail;
