//import { DarkThemeToggle } from "flowbite-react";
import { CustomSidebar } from "./Sidebar";
import { CustomNavbar } from "./Navbar";

function Home() {
  

  return (
    <main>
        <CustomNavbar/>
      <main className="bg-gray-100 h-screen m-5 flex flex-col gap-4 p-4">
        <CustomSidebar/>
    </main>
    </main>
    );
}
export default Home