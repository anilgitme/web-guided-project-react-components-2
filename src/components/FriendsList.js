import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from "./Friend"
export default function FriendsList(props) {
  const { friendsArray, changeStatusProp } = props;

  return (
    <div className="list-friends container">
      {friendsArray.map((friend) => {
        return (
          <Friend
            friendData={friend}
            key={friend.id}
            changeStatus={changeStatusProp}
          />
        );
      })}
    </div>
  );
}

