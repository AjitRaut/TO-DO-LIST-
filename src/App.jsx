import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [search, setsearch] = useState("");
  const [items, setitems] = useState([]);

  useEffect(() => {
    let todostr = localStorage.getItem("items");
    if (todostr) {
      let item = JSON.parse(localStorage.getItem("items"));
      setitems(item);
    }
  }, []);
  const saveitem = () => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const AddItem = () => {
    // console.log('button clicked')
    if (search !== "") {
      let todos = [...items, search];
      setitems(todos);
      setsearch("");
    } else {
      alert(" Add task");
    }
  };

  const EditTodo = (index) => {
    let edtodo = items.filter((ele, ind) => ind === index);
    setsearch(edtodo[index]);
  };

  // Delete ToDo
  const DeleteTodo = (index) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this to-do?"
    );
    if (confirmed) {
      const DelTodos = items.filter((elem, todoIndex) => todoIndex !== index);
      setitems(DelTodos);
    }
  };

  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className=" h-auto w-auto bg-white shadow-md">
          <h2 className=" text-center">TO-DO-LIST</h2>
          <div className=" mx-8">
            <input
            placeholder="Enter Your Task"
              className=" outline-none border-none"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
            
              }}
            />
            <button
              className=" mx-3 w-18 px-4 bg-fuchsia-500 text-lg rounded-2xl"
              onClick={() => AddItem()}
            >
              Add
            </button>
          </div>
          <div className=" my-5">
            {items.map((item, index) => (
              <div key={index}>
                <div className=" flex justify-between py-3 px-8 text-2xl text-black">
                  <span className=" bg-green-400">{item}</span>
                  <div>
                    <button
                      className=" bg-sky-500 text-base font-extrabold text-white px-2 py-3"
                      onClick={() => EditTodo(index)}
                    >
                      Edit
                    </button>
                    <button
                      className=" bg-sky-500 text-base font-extrabold text-white px-2 py-3"
                      onClick={() => DeleteTodo(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
