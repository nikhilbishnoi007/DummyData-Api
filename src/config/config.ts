import dotenv from "dotenv"
dotenv.config()

if(!process.env.PORT){
    throw new Error("Provide valid port number")
}
const config={
    PORT:process.env.PORT
}
