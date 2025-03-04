import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#4b3953] text-white py-2 px-6 flex justify-between items-center text-sm hidden md:flex">
      {/* Left Section - Contact Info */}
      <div className="flex gap-6 ">
        <span>Email: <a href="mailto:touchup@qodeinteractive.com" className="hover:underline">info@amaranaesthetic.lk</a></span>
        <span>Phone: <a href="tel:0112 662 277" className="hover:underline">+(94) 0112 662 277</a></span>
      </div>

      {/* Right Section - Social Media Links */}
      <div className="flex gap-4">
        <span>Follow us:</span>
        <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
        <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
      </div>
    </div>
  );
};

export default Header;
