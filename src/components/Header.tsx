import { FiGrid, FiMap, FiFilter } from "react-icons/fi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  return (
    <div className="relative">
      <div className="flex justify-between border py-4 px-8 h-18 items-center">
        <img src="/images/logo.png" className="w-[102px] h-[32px]" />
        <div className="flex capitalize gap-x-10 text-sm relative items-center">
          <p className="black font-semibold menu-stays">Stays</p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </div>

        <img
          src="https://framerusercontent.com/images/RkV86hKSZ17yNsuZKWylbt86ZiI.png"
          className="rounded-full w-[40px] h-[40px]"
        />
      </div>

      <div className="flex justify-between border py-4 px-8 h-18 sticky top-0 items-center">
        <div className="flex h-12 rounded-r-lg bg-[#f3f3f2]">
          <div className="h-12 w-12 border border-solid rounded-lg bg-black justify-center flex items-center">
            <FiGrid size={"20px"} color={"white"} />
          </div>
          <div className="h-12 w-12 justify-center flex items-center border-l-0">
            <FiMap size={"20px"} color={"#717171"} />
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="bg-[#f3f3f2] h-12 rounded-lg text-sm px-4 py-3 text-left text-black inline-flex items-center w-60 justify-between"
              type="button"
            >
              Anywhere{" "}
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
          <div>
            <div className="relative max-w-sm w-36">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdOutlineCalendarToday size={"20px"} color={"#717171"} />
              </div>
              <input
                type="text"
                className="bg-[#f3f3f2] h-12 text-sm rounded-lg text-black block w-full pl-10 py-3 px-4"
                placeholder="Select date"
                value="June 14 - 21"
              />
            </div>
          </div>

          <div className="flex items-center text-sm bg-[#f3f3f2] py-3 px-2 rounded-lg h-12 gap-4">
            <div className="bg-white text-red h-8 w-8 flex items-center justify-center text-base rounded-lg">
              <AiOutlineMinus size={16} color={"#ff385c"} />
            </div>
            <p className="text-sm">4 guests</p>
            <div className="bg-white text-red h-8 w-8 flex items-center justify-center text-base rounded-lg">
              <AiOutlinePlus size={16} color={"#ff385c"} />
            </div>
          </div>
        </div>
        <div
          className="flex h-12 w-12 rounded-lg justify-center flex items-center"
          style={{
            backgroundColor: "#f3f3f2",
          }}
        >
          <FiFilter size={"20px"} color={"#717171"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
