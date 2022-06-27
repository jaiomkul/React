import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const UserData = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUser(data.data);
    });
  }, []);
  return (
    <div>
      <img src={user.avatar} alt="" />
      <h3>First Name: {user.first_name}</h3>
      <h3>First Name: {user.last_name}</h3>
    </div>
  );
};
