import React from "react";

export default function Friend({ friend }) {
  return (
    <div className="friend">
      <h3>Name: {friend.name}</h3>
      <h5>Age: {friend.age}</h5>
      <h6>Email: {friend.email}</h6>
    </div>
  );
}
