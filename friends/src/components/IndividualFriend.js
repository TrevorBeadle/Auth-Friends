import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function InidividualFriend() {
  const [friend, setFriend] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends/${id}`)
      .then(res => {
        setFriend(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="friend">
      <h3>Name: {friend.name}</h3>
      <h5>Age: {friend.age}</h5>
      <h6>Email: {friend.email}</h6>
    </div>
  );
}
