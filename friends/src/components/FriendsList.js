import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

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

  onSubmit = data => {
    axiosWithAuth()
      .post("/api/friends", data)
      .then(res => {
        this.setState({
          ...this.state,
          friends: res.data,
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axiosWithAuth().delete(`/api/friends/${id}`);
    this.setState({
      friends: this.state.friends.filter(friend => friend.id !== id),
    });
  };

  componentDidMount() {
    this.getFriends();
  }

  render() {
    return (
      <div className="friends">
        {this.state.friends.map(friend => {
          return (
            <Friend
              key={friend.id}
              friend={friend}
              deleteFriend={this.deleteFriend}
            />
          );
        })}
        <FriendForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default FriendsList;
