import React from "react";
import UserSubscription from "@/models/user"

const getUsers = async () => {
    return await UserSubscription.find()
  };
  
const Dashboard = async () => {
  const data = await getUsers();
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl">Hospals</h1>
      <h2 className="text-1xl">Users</h2>
      {data.map((user:any, i:any) => {
        return <p key={i} >{JSON.stringify(user)}</p>
      })}
    </div>
  )
};
  

export default Dashboard