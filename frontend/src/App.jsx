import {useState} from "react";

function App() {

  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleCreateRoom = () => (
      // Add your logic to create a room here
      console.log(`Creating room with user: ${userName}, room ID: ${roomId}`)
      );

  const handleJoinRoom = () => (
      // Add your logic to join a room here
      console.log(`Joining room with user: ${userName}, room ID: ${roomId}`)
      );

  return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">User Name:</label>
            <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 rounded border focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="roomId" className="block text-gray-700 font-bold mb-2">Room ID:</label>
            <input
                type="text"
                id="roomId"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full p-2 rounded border focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
                type="button"
                onClick={handleCreateRoom}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-700"
            >
              Create Room
            </button>
            <button
                type="button"
                onClick={handleJoinRoom}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:border-green-700"
            >
              Join Room
            </button>
          </div>
        </form>
      </div>
  )
}

export default App
