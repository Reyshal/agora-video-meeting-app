import React from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const [username, setUsername] = React.useState("");
  const [channel, setChannel] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/meet?channel=${channel}&username=${username}`);
  };

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Join a room
          </h5>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="John Doe"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="room"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your room name
            </label>
            <input
              type="text"
              name="room"
              id="room"
              placeholder="Daily Standup"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(event) => setChannel(event.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Join to your room
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinRoom;
