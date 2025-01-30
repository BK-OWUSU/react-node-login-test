import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Board from "../components/Board";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to hold user data
  const [error, setError] = useState(null); // State to handle errors
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }

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
    <main className="bg-gray-100 h-screen m-5 flex flex-col gap-4 p-4">
      <h1>Welcome to Dashboard</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      {user ? (
        <div>
          <h2>Hello, {user.username}!</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleCount}>Click me</button>
          <p className="text-xl">{count}</p>
          <h4>Play a game</h4>
           <Board />
          {/* Add more user details as needed */}
        </div>
      ) : (
        <div>
          <Spinner heading="Waiting for data" text="Loading so wait">
            <p>Hello</p>
          </Spinner>
        </div>
      )}
    </main>
  );
}

export default Dashboard;
