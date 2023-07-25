import { useState } from "react";
import "./App.css";
import Form from "./component/form.jsx";
import Table from "./component/table";

export default function App() {
  let Users = [
    {
      id: 1,
      name: "Iwan",
      userName: "Iwan123",
    },
    {
      id: 2,
      name: "Asep",
      userName: "Asep123",
    },
    {
      id: 3,
      name: "Alhim",
      userName: "Alhim123",
    },
  ];
  const [users, setUsers] = useState(Users);
  const addUser = (user) => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  };

  return (
    <div className="max-w-xl container mx-auto ">
      <div className="w-full">
        <div className="mb-10">
          <h1 className="font-bold text-2xl pb-5">SIGN IN</h1>
          <Form addUser={addUser} />
        </div>
        <div>
          <h1 className="font-bold text-2xl pb-5">LIST</h1>
          <Table users={users} />
        </div>
      </div>
    </div>
  );
}
