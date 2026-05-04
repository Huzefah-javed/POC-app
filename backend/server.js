import cookieParser from "cookie-parser";
import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import { mainRouter } from "./routers/main.router.js";
import { error } from "./middlewares/error.js";

const app = express();

app.use(cors({
  origin: [process.env.FRONTEND_URL, "https://poc-app-juo8.vercel.app"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use(cookieParser())


app.use(mainRouter)
app.use(error)
try {
    await mongoose.connect(process.env.MONGODB_URL)
    app.listen(process.env.PORT || 5000, ()=>{
        console.log("server runs....", process.env.PORT)    
    })
} catch (error) {
    console.log("Error happens in server or database connection")
}

export default app; 