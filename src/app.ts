import express, { Request, Response } from "express"
import cors from "cors"
import userRouter from "./routes/user.routes"

const app = express()
app.use(cors())
app.get("/",(req:Request,res:Response)=>{
    res.send("Api for dummy data")
})

app.use("/api",userRouter)

export default app