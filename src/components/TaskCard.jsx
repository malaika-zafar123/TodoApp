function TaskCard({
  task,
  deleteTask,
  editTask,
  updateStatus,
}) {

  return (

    <div className="bg-[#0f172a] border border-gray-800 p-6 rounded-2xl flex justify-between lg:flex-row flex-col  items-center">

      <div>

        <h2 className="text-2xl font-semibold">
          {task.title}
        </h2>

        <p className="text-gray-400 mt-2">
          {task.date}
        </p>

      </div>

      <div className="flex items-center gap-4">

        <select
          value={task.status}
          onChange={(e) =>
            updateStatus(task.id, e.target.value)
          }
          className="bg-[#111827] p-3 rounded-xl"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          onClick={() => editTask(task)}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 px-5 py-3 rounded-xl"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;