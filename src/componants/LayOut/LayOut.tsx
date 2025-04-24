import NavBar from "@/componants/LayOut/NavBar/NavBar"
import { Outlet } from "react-router-dom"

const LayOut = () => {
    return (
        <>
        <NavBar/>
        <Outlet/>        
        </>
    )
}
export default LayOut