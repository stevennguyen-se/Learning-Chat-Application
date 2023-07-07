import React from "react";
import onlineIcon from "../../images/onlineIcon.png";

import "./UserContainer.css";

const UserContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div className="user-container">
        <h3>Online Users</h3>
        <div className="activeContainer">
          <div>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ) : null}
  </div>
);

export default UserContainer;
