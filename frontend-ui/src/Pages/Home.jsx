//import { DarkThemeToggle } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Student from "../class/Student";
import Goal from "./Goal";

function Home() {
  const mark = new Student();
  mark.age = 23;
  mark.name = 'Bismark Kofi Owusu';

  //FUNCTION
  const shout = (text) => {
    alert("Oh no! Why did you that? " + text)
  }

  return (
    <main className="bg-gray-100 h-screen m-5 flex flex-col gap-4 p-4">
        <Link to="/register"><Button className="lift">Register Here</Button></Link>
        <Link to="/login"><Button  className="lift">Login</Button></Link>
        <Button onClick={()=> shout("Evans")} className="lift">Alert Call</Button>
        <p>{mark.talk()}</p>
        <Goal scored = {true}/>
    </main>
    );
}
export default Home