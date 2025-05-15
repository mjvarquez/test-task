import { useState, useEffect } from "react";
import "./UserInfo.css";

export default function UserInfo({ userInfo }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div key={userInfo.id}>
        <div className="info">
          <span>Name: {userInfo.name}</span>
          <span>Email: {userInfo.email}</span>
          <span>Role: {userInfo.role}</span>
        </div>
        <button onClick={() => setShowDetails((prev) => !prev)}>
          <span>Show</span>
        </button>
        {showDetails ? <p>Details: {userInfo.details}</p> : null}
      </div>
    </>
  );
}
