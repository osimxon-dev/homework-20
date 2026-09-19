import { useTheme } from "../../context/ThemeContext";

const StudentList = ({ students, deleteStudent }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`mb-5 rounded-md border p-5 ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}
    >
      <h2 className="mb-4 text-2xl font-semibold">
        Employees: {students.length}
      </h2>

      {students.map((student) => (
        <div
          className={`flex items-center gap-3 border-t py-3 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          key={student.id}
        >
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold ${darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700"}`}
          >
            {student.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <strong>{student.name}</strong>
            <span
              className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {student.age} years old
            </span>
          </div>

          <button
            className="border-0 bg-transparent text-red-600 hover:text-red-800"
            onClick={() => deleteStudent(student.id)}
            aria-label={`Delete ${student.name}`}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
