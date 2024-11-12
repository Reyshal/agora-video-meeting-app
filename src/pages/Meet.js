import {
  LocalUser,
  RemoteUser,
  useIsConnected,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteUsers,
} from "agora-rtc-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Meet = () => {
  const { appId, channel, username } = useSelector((state) => {
    return {
      appId: state.room.appId,
      channel: state.room.channel,
      username: state.room.username,
    };
  });

  useEffect(() => {
    if (!channel || !username) {
      window.location.href = `/`;
    }
  }, [channel, username]);

  const isConnected = useIsConnected();
  useJoin({ appid: appId, channel, token: null }, true);

  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  usePublish([localMicrophoneTrack, localCameraTrack]);

  const remoteUsers = useRemoteUsers();

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl font-bold mb-5">{channel}</h1>
      <div className="room flex justify-between">
        {isConnected ? (
          <div className="user-list w-2/3">
            <div className="user w-[900px] h-[500px] mb-5">
              <LocalUser
                audioTrack={localMicrophoneTrack}
                cameraOn={cameraOn}
                micOn={micOn}
                videoTrack={localCameraTrack}
                cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
              ></LocalUser>
            </div>
            {remoteUsers.map((user) => (
              <div className="user w-[500px] h-64" key={user.uid}>
                <RemoteUser
                  cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                  user={user}
                >
                  <samp className="user-name">{user.uid}</samp>
                </RemoteUser>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      {isConnected && (
        <div className="control">
          <div className="left-control">
            <button className="btn" onClick={() => setMic((a) => !a)}>
              <i className={`i-microphone ${!micOn ? "off" : ""}`} />
            </button>
            <button className="btn" onClick={() => setCamera((a) => !a)}>
              <i className={`i-camera ${!cameraOn ? "off" : ""}`} />
            </button>
          </div>
          <button className="btn btn-phone btn-phone-active" onClick={() => {}}>
            <i className="i-phone-hangup" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Meet;
