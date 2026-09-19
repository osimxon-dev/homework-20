import { useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const StudentForm = ({ addStudent }) => {
  const { darkMode } = useTheme();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || age === "") {
      return;
    }

    addStudent(name, age);

    setName("");
    setAge("");

    nameInput.current.focus();
  };

  return (
    <form
      className={`mb-5 rounded-md border p-5 ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4 text-2xl font-semibold">Add Employee</h2>

      <div className="flex flex-col gap-3">
        <label className="flex-1">
          <input
            className={`w-full rounded border-0 p-2.5 outline-none ring-0 focus:outline-none focus:ring-0 ${darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"}`}
            ref={nameInput}
            type="text"
            placeholder="Employee name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="flex-1">
          <input
            className={`w-full rounded border-0 p-2.5 outline-none ring-0 focus:outline-none focus:ring-0 ${darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"}`}
            type="number"
            placeholder="Employee age"
            min="1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>

      <button
        className="mt-3 rounded bg-blue-600 px-4 py-2.5 text-white hover:bg-blue-700"
        type="submit"
      >
        Add Employee
      </button>
    </form>
  );
};

export default StudentForm;
