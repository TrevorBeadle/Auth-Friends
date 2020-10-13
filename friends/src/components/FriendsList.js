import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  getFriends = () => {
    axiosWithAuth()
      .get("/api/friends/")
      .then(res => {
        this.setState({
          ...this.state,
          friends: res.data,
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getFriends();
  }

  render() {
    return (
      <div className="friends">
        {this.state.friends.map(friend => {
          return <Friend friend={friend} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
