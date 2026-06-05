import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faList,
  faClock,
  faBars,
  faSpinner,
  faCheckCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ setFilter }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setToggleMenu(true)}
        className="md:hidden fixed top-5 left-5 z-50 text-white text-2xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Overlay */}

      {toggleMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setToggleMenu(false)}
        />
      )}

      {/* Sidebar */}

      <div
        className={`
          fixed md:static
          top-0 left-0 h-screen
          w-[260px]
          bg-[#0b1120]
          border-r border-gray-800
          text-gray-300
          z-50
          transition-transform duration-300

          ${
            toggleMenu
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Close Button Mobile */}

        <button
          onClick={() => setToggleMenu(false)}
          className="md:hidden absolute top-5 right-5 text-white text-xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Logo */}

        <div className="p-6">
          <h1 className="text-3xl font-bold text-purple-400">
            TodoFlow
          </h1>
        </div>

        {/* Menu */}

        <div className="mt-8 flex flex-col gap-3 px-3">

          <button
            onClick={() => setFilter("All")}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#2b285f]"
          >
            <FontAwesomeIcon icon={faList} />
            <span>All Tasks</span>
          </button>

          <button
            onClick={() => setFilter("Pending")}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#2b285f]"
          >
            <FontAwesomeIcon
              icon={faClock}
              className="text-yellow-400"
            />
            <span>Pending</span>
          </button>

          <button
            onClick={() => setFilter("In Progress")}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#2b285f]"
          >
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-blue-500"
            />
            <span>In Progress</span>
          </button>

          <button
            onClick={() => setFilter("Completed")}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#2b285f]"
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500"
            />
            <span>Completed</span>
          </button>

        </div>
      </div>
    </>
  );
}

export default Sidebar;