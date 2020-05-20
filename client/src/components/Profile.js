import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProfile } from "../components/service/Service";

const Profile = ({ match }) => {
  const [userID] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    getProfile(userID).then((data) => {
      console.log(data);
      setUser(data);
    });
  }, [userID]);

  return (
    <div className="profil">
      <label className="">Name: </label>
      <p className="">{user.name}</p>
      <label className="">Surname: </label>
      <p className="">{user.surname}</p>
      <label className="">Username: </label>
      <p className="">{user.username}</p>
      <label className="">Email: </label> <p className="">{user.email}</p>
    </div>
  );
};

export default Profile;
