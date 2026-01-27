import img from "../../assets/images/533643aa8db82414f48d43a992d009dda3961386.png"
import Navbar from "../Navbar/Navbar"
export default function Herosection() {
  return (
    <>
    <Navbar/>
    <div className="relative h-full bg-cover bg-center -z-10" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
    </div>
    </>
  )
}