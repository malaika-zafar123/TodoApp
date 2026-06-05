import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import TaskCard from "./components/TaskCard";
import Popup from "./components/Popup";

function App() {
  const defaultTasks = [
  {
    id: 1,
    title: "Complete React Assignment",
    status: "Pending",
    date: "5 28, 2026 - 10:00 AM",
  },
  {
    id: 2,
    title: "Design Todo UI",
    status: "In Progress",
    date: "5 28, 2026 - 12:30 PM",
  },
  {
    id: 3,
    title: "Practice Tailwind CSS",
    status: "Completed",
    date: "5 27, 2026 - 08:15 PM",
  },
];
  const [tasks, setTasks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);
  // LOCAL STORAGE

useEffect(() => {
  const savedTasks = JSON.parse(
    localStorage.getItem("tasks")
  );

  if (savedTasks && savedTasks.length > 0) {
    setTasks(savedTasks);
  } else {
    setTasks(defaultTasks);
  }
}, []);

  useEffect(() => {
  if (tasks.length > 0) {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }
}, [tasks]);

  // ADD TASK

  const addTask = () => {

    if (!taskName) return;

    if (editId) {

      const updatedTasks = tasks.map((task) =>
        task.id === editId
          ? {
            ...task,
            title: taskName,
            status: taskStatus,
          }
          : task
      );

      setTasks(updatedTasks);

      setEditId(null);

    } else {

      const newTask = {
        id: Date.now(),
        title: taskName,
        status: taskStatus,
        date: new Date().toLocaleString(),
      };

      setTasks([...tasks, newTask]);
    }

    setTaskName("");
    setTaskStatus("Pending");
    setShowPopup(false);
  };
  //Edit
  const editTask = (task) => {

    setTaskName(task.title);

    setTaskStatus(task.status);

    setEditId(task.id);

    setShowPopup(true);
  };

  // DELETE

  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  // STATUS UPDATE

  const updateStatus = (id, value) => {
    const updated = tasks.map((task) =>
      task.id === id
        ? { ...task, status: value }
        : task
    );

    setTasks(updated);
  };

  // FILTER

  const filteredTasks = tasks.filter((task) => {
    const searchMatch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const statusMatch =
      filter === "All" || task.status === filter;

    return searchMatch && statusMatch;
  });

  return (
    <div className="flex min-h-screen  bg-[#050816] text-white">

      <Sidebar setFilter={setFilter} />

      <div className="flex-1 p-4 sm:p-6 md:p-10 w-full">

        <Topbar setShowPopup={setShowPopup} />

        {/* SEARCH */}

        <div className="flex gap-4 flex-col lg:flex-row mt-8">

          <input
            type="text"
            placeholder="Search tasks..."
            className="flex-1 p-4 rounded-xl bg-[#111827] outline-none"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            className="p-4 rounded-xl w-full sm:w-auto bg-[#111827]"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >
            <option>All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        {/* TASKS */}

        <div className="mt-8 space-y-5">

          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              updateStatus={updateStatus}
            />
          ))}

        </div>
      </div>

      {/* POPUP */}

      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          taskName={taskName}
          setTaskName={setTaskName}
          taskStatus={taskStatus}
          setTaskStatus={setTaskStatus}
          addTask={addTask}
          editId={editId}
        />
      )}
    </div>
  );
}

export default App;