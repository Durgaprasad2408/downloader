import React from "react";

const files = [
  { name: "Movie App", path: "./MovieApp.zip" },
  { name: "React Todo", path: "./TodoApp.zip" },
  { name: "Angular Todo", path: "./angulartodo.zip" },
  { name: "React Components ", path: "../ReactComponents.zip " },
  { name: "React Router Single Page", path: "../ReactRouting.zip " },
  { name: "Forms ", path: "./Forms.zip " },
  { name: "Django Rest ", path: "./RestDjango.zip " },
  { name: "Django Students ", path: "./students.zip " },
  { name: "Angular Components ", path: "./AngularComponents.zip " },
  { name: "Angular Directives ", path: "./AngularDirectives.zip " },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Download Files Here</h1>
        <ul className="space-y-4  grid grid-cols-2">
          {files.map((file, index) => (
            <li key={index} className="flex justify-between items-center p-3 bg-gray-200 rounded-md hover:bg-gray-300">
              <span className="text-lg text-gray-800">{file.name}</span>
              <a
                href={file.path}
                download
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;