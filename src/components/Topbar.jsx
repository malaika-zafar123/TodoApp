function Topbar({ setShowPopup }) {
  return (
    <div className="flex justify-between lg:flex-row flex-col gap-3 items-center">

      <div>
        <h1 className="text-4xl font-bold">
          My Tasks
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your tasks efficiently
        </p>
      </div>

      <button
        onClick={() => setShowPopup(true)}
        className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-4 rounded-2xl"
      >
        + Add Task
      </button>
    </div>
  );
}

export default Topbar;