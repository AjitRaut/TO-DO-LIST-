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
        <div className=" h-auto w[400px] bg-white shadow-md">
         
          <div className="mx-8">
            <input
              placeholder="Enter Your Task.."
              className=" outline-none border-solid border-2 border-sky-500 px-1 py-1 w-60"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <button
              className=" mx-20 w-18 px-4 bg-red-400 text-lg rounded-md font-medium"
              onClick={() => AddItem()}
            >
              Add
            </button>
          </div>
          <div className="my-5">
            {items.map((item, index) => (
              <div className="m-2" key={index}>
                <div className=" flex justify-between items-center mx-5 border-b-2">
                  <p className=" font-semibold px-2 py-2">{item}</p>
                  <div>
                    <button
                      className=" bg-sky-500 text-base font-semibold text-black px-2 py-1 rounded-md"
                      onClick={() => EditTodo(index)}
                    >
                      Edit
                    </button>
                    <button
                      className=" bg-sky-500 text-base font-semibold text-black mx-5 px-2 py-1 rounded-md"
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
