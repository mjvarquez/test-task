import { useState } from "react";
import User from "./data/User.json";
import UserInfo from "./user-info/UserInfo";
import "./App.css";

export default function App() {
  const [userInfo, setUserInfo] = useState(User);
  const userRoles = [...new Set(User.map((x) => x.role))];
  userRoles.push("All");

  const onSelectedRole = (e) => {
    const selectedRole = e.target.value;
    const filteredUser =
      selectedRole === "All"
        ? User
        : User.filter((x) => x.role === selectedRole);

    console.log(filteredUser);
    setUserInfo(filteredUser);
  };

  return (
    <>
      <div>
        <label>Role Filter: </label>
        <select onChange={onSelectedRole} defaultValue={"All"}>
          {userRoles.map((x) => {
            return <option value={x}>{x}</option>;
          })}
        </select>
      </div>
      <div>
        {userInfo.map((x) => {
          return (
            <>
              <div className="main-container ">
                <UserInfo userInfo={x} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
