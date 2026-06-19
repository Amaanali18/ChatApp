import {Routes,Route} from 'react-router-dom'
import {HomeComp,ChatComp} from "../components/store.js";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeComp/>}/>
            <Route path="/chat" element={<ChatComp/>}/>
        </Routes>
    )
}

export default AppRoutes;