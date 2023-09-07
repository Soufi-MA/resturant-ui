import { BsChevronDown } from "react-icons/bs";
import searchIcon from "../assets/Search.svg";
import cartIcon from "../assets/Cart.svg";
import contactIcon from "../assets/Contact.svg";

const NavBar = () => {
  return (
    <div className="sticky flex justify-between items-center w-full h-40 px-4 py-2">
      <div className="flex gap-0.5 justify-center items-center cursor-pointer">
        <div className="flex justify-center items-center bg-primary text-white w-[34px] h-[41px] rounded-lg text-3xl font-bold ">
          <p>F</p>
        </div>
        <div className="font-display text-3xl font-bold">OODI</div>
      </div>
      <div>
        <ul className="flex gap-12 font-poppins text-xl font-[500]">
          <li className="text-primary cursor-pointer">Home</li>
          <div className="flex items-center gap-1 cursor-pointer">
            <li>Menu</li>
            <BsChevronDown className="text-primary" size={14} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <li>Services</li>
            <BsChevronDown className="text-primary" size={14} />
          </div>
          <li className=" cursor-pointer">Offers</li>
        </ul>
      </div>
      <div className="flex gap-12 items-center justify-center">
        <img className="w-6 h-6 cursor-pointer" src={searchIcon} alt="" />
        <div className="flex relative w-6 h-6 cursor-pointer">
          <img src={cartIcon} alt="" />
          <div className="flex absolute justify-center items-center h-[20px] w-[20px] rounded-[10px] bg-primary bottom-3 left-3">
            <p className="text-white text-sm font-bold">8</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center w-[180px] h-[60px] rounded-[40px] bg-primary cursor-pointer hover:bg-primary/90">
          <img src={contactIcon} alt="" />
          <p className="text-white font-poppins font-[500] text-xl">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
