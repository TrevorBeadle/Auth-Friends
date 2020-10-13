import React from "react";
import { Link } from "react-router-dom";

export default function Friend({ friend }) {
  return (
    <div className="friend">
      <Link to={`/friends/${friend.id}`}>
        <h3>Name: {friend.name}</h3>
      </Link>
      <h5>Age: {friend.age}</h5>
      <h6>Email: {friend.email}</h6>
    </div>
  );
}
