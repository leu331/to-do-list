import { Routes, Route } from "react-router-dom"; 
import History from "../pages/History/History";
import { NotFound } from "../pages/Not Found/NotFound";
import { Home } from "../pages/Home/Home";
import { Layout } from "../Components/Layout/Layout";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/history" element={<History/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<Home/>}/>
            </Route>      
        </Routes>
    )
}