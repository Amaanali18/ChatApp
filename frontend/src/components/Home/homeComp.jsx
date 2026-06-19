import {useState} from 'react';
import toast from "react-hot-toast";

const HomeComp = () => {
    const [detail, setDetail] = useState({
        roomId:"",
        userName:""
    })
    function formSubmit(event) {
        setDetail({
            ...detail,
            [event.target.name]: event.target.value
        })
    }
    function validateUserName(){
        if(detail.userName === ""){
            toast.error("Please enter a valid user name")
            return false;
        }
        return true;
    }
    function validateRoomId(){
        if(detail.roomId === ""){
            toast.error("Please enter a valid room id")
            return false;
        }
        return true;
    }
    function createRoom(){

        if(validateUserName()){
            console.log(detail);
        }

    }
    function joinChat(){

        if(validateUserName() && validateRoomId()){
            console.log(detail);
        }

    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 focus:outline-none">
            <form className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto">
                <div className="mb-4">
                    <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">User Name:</label>
                    <input
                        type="text"
                        id="userName"
                        onChange={formSubmit}
                        value={detail.userName}
                        name="userName"
                        className="w-full p-2 rounded border focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="roomId" className="block text-gray-700 font-bold mb-2">Room ID:</label>
                    <input
                        type="text"
                        id="roomId"
                        onChange={formSubmit}
                        value={detail.roomId}
                        name="roomId"
                        className="w-full p-2 rounded border focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-700"
                        onClick={createRoom}>
                        Create Room
                    </button>
                    <button
                        type="button"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:border-green-700"
                        onClick={joinChat}>
                        Join Room
                    </button>
                </div>
            </form>
        </div>
    )
}

export default HomeComp;

