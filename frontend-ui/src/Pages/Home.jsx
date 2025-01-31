import { CustomNavbar } from "./Navbar";

function Home() {
  

  return (
    <main>
        <CustomNavbar/>
      <div className="bg-gray-100 h-screen m-5 flex flex-col gap-4 p-4">
        <p>Welcome home</p>
     </div>
    </main>
    );
}
export default Home