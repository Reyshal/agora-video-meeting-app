import React from "react";

const JoinRoom = () => {
  const [roomName, setRoomName] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto flex items-center h-screen">
        <div className="shadow-lg w-2/6 py-4 mx-auto bg-white rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 text-center border-b border-gray-200 pb-2">
            Join Room
          </h1>
          <form className="mt-4 mx-5" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Room ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
