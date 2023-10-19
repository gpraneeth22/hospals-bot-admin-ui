import React from "react";
import UserSubscription from "@/models/user";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { User } from "./columns";
import { getServerSession } from "next-auth";
import LogoutButton from "@/components/logout";

const getUsers = async () => {
  return await UserSubscription.find();
};

const Dashboard = async () => {
  const data = await getUsers();
  const admin = await getServerSession()

  var users: Array<User> = [];
  for (let i in data) {
    var user: User = {
      id: "",
      firstName: "",
      lastName: "",
      userName: "",
      city: "",
      country: "",
    };
    user.id = data[i].chat_id;
    user.firstName = data[i].firstname || "null";
    user.lastName = data[i].lastname || "null";
    user.userName = data[i].username;
    user.city = data[i].city || "null";
    user.country = data[i].country || "null";
    users.push(user);
  }

  return (
    <div className="h-screen mt-4">
      <h1 className="text-3xl text-center">Hospals</h1>
      <div className="container mx-auto py-10">
        <div className="flex justify-between py-4" >
          <h2 className="text-2xl">Users</h2>
          <h2 className="text-1xl">Admin: {admin?.user?.name}</h2>
          <LogoutButton/>
        </div>
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
};

export default Dashboard;
