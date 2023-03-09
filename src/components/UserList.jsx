import React from "react";
import User from "./User";
import users from "../user";

const UserList = () => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <User key={user.username} user={user} />
      ))}
    </div>
  );
};
// Using map to conveniently iterate over the entire list in user.js and assign properties
// This can be done via a for loop or mannual indexing too

export default UserList;