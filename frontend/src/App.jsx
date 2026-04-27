import { ToastContainer } from "react-toastify"
import { LoginForm } from "./pages/login"


export const App =()=>{
    return <>
    <ToastContainer/>
            <div>
                <LoginForm/>
            </div>
            </>    
}