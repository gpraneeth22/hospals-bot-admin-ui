import axios from "axios";

const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users")
    console.log(response.data)
  };
  
  const Dashboard = () => {
    getUsers();
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl">Hospals</h1>
        <h2 className="text-1xl">Users</h2>
      </div>
    )
  };
  

export default Dashboard