
function App() {

  return (
   <div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-950">
     <div className="py-5 h-3/5 w-2/5 bg-gray-600 flex flex-col items-center justify-center rounded-3xl">
       <p className="text-4xl pb-5">Chat</p>
       <div className="h-2/5 w-2/3">
         <label className="h-1/3 w-full">Enter Name : </label>
         <input className="h-1/3 w-full bg-gray-500 rounded-2xl my-3 px-3" type={"text"} placeholder={"Enter Name"} />
       </div>
       <div className="h-2/5 w-2/3">
         <label className="h-1/3 w-full">Enter Room-Id : </label>
         <input className="h-1/3 w-full bg-gray-500 rounded-2xl my-3 px-3" type={"text"} placeholder={"Enter Room Id"} />
       </div>
       <div className="h-1/5 w-2/3 flex justify-between">
         <button className="h-1/2 w-1/3 rounded-3xl bg-green-600">Create Room</button>
         <button className="h-1/2 w-1/3 rounded-3xl bg-blue-600">Join Room</button>
       </div>
     </div>
   </div>
  )
}

export default App
