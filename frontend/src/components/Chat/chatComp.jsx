import {useRef, useState} from "react";

const chatComp = () => {
    
    const [messages, setMessages] = useState([
        {
            content: "Hi!",
            sender: 'Amaan'
        },
        {
            content: "Hello, World!",
            sender: 'Ali'
        },
        {
            content: "lorem ipsum dolor sit amet hvy jbvbkf bdivbkjbk kbdviubwkbi kbdvbrkbiurw kdbvbwkjbgrw hdbkvwr kvuiwrb",
            sender: 'Amaan'
        }

    ])

    const [user, setUser] = useState('Amaan');
    const [roomid, setRoomid] = useState("")
    const [input, setInput] = useState("")
    const [stompClient, setStompClient] = useState(null)

    const inputRef = useRef(null)
    const chatRef = useRef(null)



    return (
        <div className="min-h-screen min-w-screen flex flex-col bg-gray-800 text-white focus:outline-0">
            <header className="fixed h-[10%] w-full bg-gray-700 flex justify-around items-center ">
                <div>
                    <h1>Room : <span>RoomID</span></h1>
                </div>
                <div>
                    <h1>User : <span>UserName</span></h1>
                </div>
                <div>
                    <button className="h-1/2 w-max px-2 py-2 bg-red-500 hover:bg-red-800 rounded-2xl">Leave Room</button>
                </div>
            </header>
            <main className="mt-3 fixed top-[10%] h-[78.5%] w-full flex flex-col items-center justify-center mx-auto">
                <div className="h-full w-3/4 px-3 py-2 rounded-2xl bg-gray-500 overflow-y-auto scrollbar-none">
                    <div className="flex flex-col justify-end min-h-full">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex mt-3 ${
                                    user === message.sender
                                        ? "justify-end"
                                        : "justify-start"
                                }`}>
                                <div
                                    className="w-fit max-w-[75%] min-h-14 bg-white text-black px-4 py-3 rounded-2xl flex items-start gap-3">
                                    <div className="w-10 h-10 shrink-0">
                                        <img
                                            src="https://imgs.search.brave.com/L3aVk2Ws9bJTfmLYFXyJPNsv__LTW4dYsRuhGDFzX40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kZWZh/dWx0LWF2YXRhci1w/cm9maWxlLWljb24t/dmVjdG9yLXNvY2lh/bC1tZWRpYS11c2Vy/LWltYWdlLTE4MjE0/NTc3Ny5qcGc"
                                            alt="Avatar"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold">
                                            {message.sender}
                                        </p>
                                        <p className="wrap-break-words whitespace-pre-wrap">
                                            {message.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <div className="mt-3 fixed bottom-[-2%] w-full h-[12.5%]">
                <div className="h-3/4 w-3/4 mx-auto flex items-center justify-center gap-2">
                    <input type={'text'} placeholder={'Write Your Message ... '}
                           className="px-3 rounded-2xl h-2/3 w-3/4 bg-blue-400"/>
                    <button type={'submit'}
                            className="rounded-2xl h-2/3 w-1/4 bg-blue-600 cursor-pointer hover:bg-blue-900">Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default chatComp;