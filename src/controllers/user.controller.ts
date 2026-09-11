import { Request,Response } from "express";
import { users } from "../data/users";

export const getuser=(req:Request,res:Response)=>{
    const { name, id, city, age, gender,limit,minAge,maxAge} = req.query
    let result=users
    if (id) {
        const user = users.find((u) => u.id === Number(id))
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        return res.status(200).json(user)
    }

    if (city) {
        result = result.filter((u) => u.city.toLowerCase() === String(city).toLowerCase())
    }

    if (name) {
        result = result.filter((u) => u.name.toLowerCase() === String(name).toLowerCase())
    }

    if (age) {
        result = result.filter((u) => u.age === Number(age))
        
    }
    if(gender){
        result=result.filter((u)=>u.gender.toLowerCase()===String(gender).toLowerCase())
    }
    if(minAge){
    result=result.filter((u)=>u.age>Number(minAge))
  }
    const totalMatches = result.length
    if (limit) {
    result = result.slice(0, Number(limit))
   }
   if (result.length === 0) {
    return res.status(404).json({ message: "user not found" })
  }
 
    res.status(200).json({
    total: totalMatches,
    count: result.length,
    data: result,
  })

}
