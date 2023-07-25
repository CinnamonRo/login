import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function DefaultForm(props) {
  // console.log(props.addUser);
  const formState = { id: null, name: "", userName: "" };
  const [users, setUsers] = useState(formState);
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value });
    console.log(value, "ini value");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!users.name || users.userName) return;
    props.addUser(users);
    setUsers(formState);
    // console.log("clicked");
  };

  return (
    <form
      className="flex w-full justify-center flex-col gap-4 "
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your Name" />
        </div>
        <TextInput
          id="name"
          placeholder="Masukan nama anda"
          required
          type="text"
          onChange={handleInput}
          value={users.name}
          name="name"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userName" value="Your username" />
        </div>
        <TextInput
          id="userName"
          required
          type="text"
          onChange={handleInput}
          value={users.Username}
          name="userName"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
