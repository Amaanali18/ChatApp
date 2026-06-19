import {Routes,Route} from 'react-router-dom'
import {HomeFile,ChatFile} from "../components/store.js";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeFile/>}/>
            <Route path="/chat" element={<ChatFile/>} />
        </Routes>
    )
}

export default AppRoutes;