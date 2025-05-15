import { useState } from "react";
import User from "./data/User.json";
import UserInfo from "./user-info/UserInfo";

export default function App() {
  const [userInfo, setUserInfo] = useState(User);

  return (
    <>
      {userInfo.map((x, i) => {
        return (
          <>
            <div>
              <UserInfo id={i} userInfo={x} />
            </div>
          </>
        );
      })}
    </>
  );
}
