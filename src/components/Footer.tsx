import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-800 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-700">Wellbee</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Pure, golden honey made by nature and perfected by Wellbee.
            Wellness begins with sweetness 🍯.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-600 transition">About</a></li>
            <li><a href="#products" className="hover:text-yellow-600 transition">Products</a></li>
            <li><a href="#contact" className="hover:text-yellow-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-yellow-700">
            <a href="#"><FaFacebook className="hover:text-yellow-600 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-yellow-600 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-yellow-600 transition" /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Wellbee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
