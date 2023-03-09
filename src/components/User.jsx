import React from "react";

const User = ({ user }) => {
  return (
    <div className="user">
      <img src={user.profilePicture} alt={user.username} className="user-img" />
      <div className="user-info">
        <ul>
          {/* Adding user properties in bullet form */}
          <li><strong>Full Name:</strong> {user.firstName} {user.lastName}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>School:</strong> {user.school}</li>
          <li><strong>Class Level: </strong> 
            {/* Conidtion for color of classlevel property */}
            <span style={{ color: user.classLevel === "Freshmen" ? "green" : "black" }}>{user.classLevel}</span>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};


export default User;