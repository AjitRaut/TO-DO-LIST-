import { useState } from "react";
import "./App.css";

function App() {
  const [search, setsearch] = useState("");
  const [items, setitems] = useState([]);

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

// Delete ToDo
const DeleteTodo=(index)=>{
     
}

  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className=" h-auto w-auto bg-red-200">
          <h2 className=" text-center">TO-DO-LIST</h2>
          <div className=" mx-8">
            <input
              className=" outline-none border-none"
              type="text"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
                // console.log(search);
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
                  <button className=" mr-6" onClick={()=>DeleteTodo(index)}>Delete</button>
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
