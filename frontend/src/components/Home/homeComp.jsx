import {useState} from 'react';
import toast from "react-hot-toast";
import {createRoomApi, joinRoomApi} from "../../services/RoomService.js";
import useChatContext from "../../context/ChatContext.jsx";
import {useNavigate} from "react-router-dom";
import {AxiosApi} from "../../config/AxiosHelper.js";

const HomeComp = () => {
    const [detail, setDetail] = useState({
        roomId:"",
        userName:""
    })
    const navigate = useNavigate();
    const {roomId, setRoomId,currentUser, setCurrentUser,connected,setConnected}=useChatContext()
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
    async function createRoom(){
        if(validateUserName() && validateRoomId()){
            try{
                await createRoomApi(detail.roomId);
                toast.success("Room created!");
                setRoomId(detail.roomId);
                setCurrentUser(detail.userName);
                setConnected(true);
                navigate("/chat")
            }catch(error){
                if(error.response?.status === 409) toast.error("Duplicate Room -> Creation failed!")
                else if(error.response?.status === 429) toast.error(error.response.data);
                else toast.error("Something went wrong!");
            }
        }

    }
    async function joinChat(){

        if(validateUserName() && validateRoomId()){
            try{
                const room = await joinRoomApi(detail.roomId);
                setRoomId(room.roomId);
                setCurrentUser(detail.userName);
                setConnected(true);
                navigate("/chat")
                toast.success("Room joined!");

            }catch(error){
                toast.error('Something went wrong!');
                console.log(error)
            }
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

