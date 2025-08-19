import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Phone, Mail, MapPin, Instagram } from "lucide-react"; // ✅ Keep imports only at the top

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">BehindTheProfit</h2>
            <p className="mt-4 text-sm text-gray-400">
              Your trusted source for market updates, analysis, and smart
              investing tips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to='' className="hover:text-red-500">Home</Link></li>
              <li><Link to='' className="hover:text-red-500">About Us</Link></li>
              <li><Link to='' className="hover:text-red-500">Services</Link></li>
              <li><Link to='' className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>

          {/* Market Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Market Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to='' className="hover:text-red-500">Market News</Link></li>
              <li><Link to='' className="hover:text-red-500">Stock Analysis</Link></li>
              <li><Link to='' className="hover:text-red-500">Investment Tips</Link></li>
              <li><Link to='' className="hover:text-red-500">Glossary</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                behindtheprofit991@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                +91-8126816165
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                New Delhi, India
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-500" />
                @Behind_The_Profit
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BehindTheProfit. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link to='' className="hover:text-red-500"><FaFacebookF /></Link>
            <Link to='' className="hover:text-red-500"><FaTwitter /></Link>
            <Link to='' className="hover:text-red-500"><FaLinkedinIn /></Link>
            <Link to='' className="hover:text-red-500"><FaInstagram /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
