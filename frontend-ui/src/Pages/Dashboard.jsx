
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal  from 'sweetalert2'
import { Spinner } from "flowbite-react";
import { CustomSidebar } from "./Sidebar";
import { CustomNavbar } from "./Navbar";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to hold user data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        navigate('/login');
        return; // Early return if no token
      }

      try {
        const response = await axios.get("http://localhost:3000/auth/home", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        setUser(response.data.user); // Update state with user data
      } catch (err) {
        console.error("Error fetching user:", err); // Log the error
        setError(err.message); // Update state with error
      }
    };

    fetchUser();

  }, [navigate]);
  
  return (
    <main>
        <CustomNavbar/>
      <div className="bg-gray-100 h-screen m-5 flex flex-col gap-4 p-4">
      {error && <p className="text-red-500">Error: {error}</p>}
       {user ? (
        <CustomSidebar/>
      ):(
        <div>
          <Spinner heading="Waiting for data" text="Loading so wait" />
        </div>
       )} 
     </div>
    </main>
  );
}

export default Dashboard