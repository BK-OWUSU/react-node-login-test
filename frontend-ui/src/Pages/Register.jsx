import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [values , setValue] = useState({
        username : '',
        email: '',
        password: ''
    });
    //
    const handlesChanges = (e) => {
        setValue({...values,[e.target.name]:e.target.value})
    }
    //Handling submit
    const navigate = useNavigate();
    const handlesSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/register', values);
            if (response.status === 201){
                navigate('/login');
                return;
            }
            console.log(`${response.data.message}`)
        } catch (error) {
            console.log(error.message)
        }
    }
 
  return (
    <main className="flex justify-center items-center h-[100vh] w-[100vw]">
    <form onSubmit={handlesSubmit} className="flex w-[20vw] flex-col gap-4 bg-slate-300 p-6 rounded-[0.7rem]">
        <div className="flex justify-center items-center text-xl">Register Here</div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="username" value="Your Username" />
            </div>
            <TextInput id="username" name="username" onChange={handlesChanges} type="text" placeholder="Enter username" required shadow />
        </div>
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
        <Button type="submit">Register new account</Button>
        <div className="flex gap-2">
            <p>Already have Account?</p>
            <Link to="/login">Login</Link>
        </div>
</form>
</main>
  )
}

export default Register