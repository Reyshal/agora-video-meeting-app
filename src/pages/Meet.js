import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Meet = () => {
  const { channel, username } = useSelector((state) => {
    console.log(state);
    return {
      channel: state.room.channel,
      username: state.room.username,
    };
  });

  // useEffect(() => {
  //   if (!channel || !username) {
  //     window.location.href = `/`;
  //   }
  // }, [channel, username]);

  return (
    <div>
      {channel} - {username}
    </div>
  );
};

export default Meet;
