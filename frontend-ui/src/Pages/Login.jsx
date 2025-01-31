import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [values, setValue] = useState({
    email: "",
    password: "",
  });
  const handlesChanges = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  }
  //Submit of login data
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", values)
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <main className="flex justify-center items-center h-[100vh] w-[100vw]">
    <form onSubmit={handleSubmit} className="flex w-[20vw] flex-col gap-4 bg-slate-300 p-6 rounded-[0.7rem]">
        <div className="flex justify-center items-center text-xl">Login Here</div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" name="email" onChange={handlesChanges} type="email" placeholder="Enter email" required shadow />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" name="password" onChange={handlesChanges} type="password" placeholder="Type password" required shadow />
        </div>
        <Button type="submit">Log In</Button>
        <div className="flex gap-2">
            <p>Don&apos;t have an account?</p>
            <Link to="/register">Register</Link>
        </div>
</form>
</main>
  )
}

export default Login