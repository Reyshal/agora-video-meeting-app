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
import { BsCameraVideoFill, BsCameraVideoOffFill, BsMicFill, BsMicMuteFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Meet = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("username");
  const channel = queryParams.get("channel");

  useEffect(() => {
    if (!username && !channel) {
      navigate("/");
    }
  }, [channel, navigate, username]);

  useJoin(
    {
      appid: process.env.REACT_APP_AGORA_APP_ID,
      channel,
      token: null,
      uid: `${username}_${Date.now()}`,
    },
    true
  );

  const isConnected = useIsConnected();
  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  usePublish([localMicrophoneTrack, localCameraTrack]);

  const remoteUsers = useRemoteUsers();

  return (
    <>
      <div className="room">
        {isConnected ? (
          <div className="user-list">
            <div className="user">
              <LocalUser
                audioTrack={localMicrophoneTrack}
                cameraOn={cameraOn}
                micOn={micOn}
                videoTrack={localCameraTrack}
                playAudio={false}
              >
                <samp className="user-name">You</samp>
              </LocalUser>
            </div>
            {remoteUsers.map((user) => (
              <div className="user" key={user.uid}>
                <RemoteUser user={user}>
                  <samp className="user-name">{user.uid.split("_")[0]}</samp>
                </RemoteUser>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <h1 className="pb-2 text-2xl font-bold text-center text-gray-800 border-b border-gray-200">
              Loading...
            </h1>
          </div>
        )}
      </div>
      {isConnected && (
        <div className="control">
          <div className="left-control">
            <button className="px-3 py-2 border border-gray-600 rounded" onClick={() => setMic((a) => !a)}>
              { micOn ? <BsMicFill /> : <BsMicMuteFill />}
            </button>
            <button className="px-3 py-2 border border-gray-600 rounded" onClick={() => setCamera((a) => !a)}>
              { cameraOn ? <BsCameraVideoFill /> : <BsCameraVideoOffFill />}
            </button>
          </div>
          <Link to="/" className="btn btn-phone btn-phone-active">
            <i className="i-phone-hangup" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Meet;
