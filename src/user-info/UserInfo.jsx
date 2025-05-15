import { useState, useEffect } from "react";

export default function UserInfo({ id, userInfo }) {
  const [showDetails, setShowDetails] = useState(false);
  console.log(showDetails);
  return (
    <>
      <div key={id}>
        <div>
          <span>Name: {userInfo.name}</span>
          <span>Email: {userInfo.email}</span>
          <span>Role: {userInfo.role}</span>
        </div>
        <button onClick={() => setShowDetails((prev) => !prev)}>
          <span>Show</span>
        </button>
        {showDetails ? <p>{userInfo.details}</p> : null}
      </div>
    </>
  );
}
