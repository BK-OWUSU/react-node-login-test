// import { useState } from "react"
// import { FaTimes } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";

export const Square = ({value, onSquareClick}) => {
    // const [value , setValue] = useState(null);
    // const handlesClick = () => {
    //     setValue(<FaTimes/>);
    // }
  return (
    <button onClick={onSquareClick} className="p-2 w-16 h-16 border border-slate-800 flex justify-center items-center">{value}</button>
  )
}
