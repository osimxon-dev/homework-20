import { useEffect, useState } from "react";
import StudentForm from "./components/studentForm/StudentForm";
import StudentList from "./components/studentList/StudentList";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (name, age) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      age: age,
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id),
    );
  };

  return (
    <div
      className={`min-h-screen px-5 py-8 ${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
    >
      <header className="mx-auto mb-8 flex w-full max-w-2xl items-center justify-between">
        <h1 className="text-3xl font-bold">Employee Count</h1>
        <ThemeButton />
      </header>

      <main className="mx-auto w-full max-w-2xl">
        <StudentForm addStudent={addStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
