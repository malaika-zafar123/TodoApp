import {
  faCalendarDays,
  faList,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Popup({
  setShowPopup,
  taskName,
  setTaskName,
  taskStatus,
  setTaskStatus,
  addTask,
  editId,
}){
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

      {/* POPUP BOX */}

      <div className="w-[500px] bg-[#0B1020] border border-pink-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(236,72,153,0.4)] relative">

        {/* CLOSE BTN */}

        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-5 right-5 text-white text-2xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* TITLE */}

        <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">


          Add New Task
        </h1>

        {/* TASK INPUT */}

        <div className="mb-5">

          <label className="text-gray-300 block mb-2">
            Task Title
          </label>

          <div className="bg-[#141A2F] rounded-2xl flex items-center px-4 border border-gray-700">

            <FontAwesomeIcon
              icon={faList}
              className="text-pink-400"
            />

            <input
              type="text"
              placeholder="Enter task title..."
              value={taskName}
              onChange={(e) =>
                setTaskName(e.target.value)
              }
              className="w-full bg-transparent outline-none p-4 text-white"
            />
          </div>
        </div>


        {/* DATE + STATUS */}

        <div className="grid grid-cols-2 gap-4 mb-6">

          {/* DATE */}

          <div>

            <label className="text-gray-300 block mb-2">
              Due Date
            </label>

            <div className="bg-[#141A2F] border border-gray-700 rounded-2xl flex items-center px-4">

              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-purple-400"
              />

              <input
                type="datetime-local"
                className="w-full bg-transparent p-4 outline-none text-white"
              />
            </div>
          </div>

          {/* STATUS */}

          <div>

            <label className="text-gray-300 block mb-2">
              Status
            </label>

            <select
              value={taskStatus}
              onChange={(e) =>
                setTaskStatus(e.target.value)
              }
              className="w-full bg-[#141A2F] border border-gray-700 rounded-2xl p-4 outline-none text-white"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* BUTTONS */}

        <div className="flex gap-4">

          <button
            onClick={() => setShowPopup(false)}
            className="flex-1 border border-gray-600 py-4 rounded-2xl text-white hover:bg-gray-800 duration-300"
          >
            Cancel
          </button>

          <button
            onClick={addTask}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 py-4 rounded-2xl font-semibold text-white hover:scale-105 duration-300"
          >
            {editId ? "Update Task" : "Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;