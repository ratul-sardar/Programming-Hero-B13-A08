import {
  FaFacebook,
  FaMapPin,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-accent/10">
      {/* Top Footer*/}
      <div className="cssContainer md:flex-row max-md:items-start justify-between">
        {/* Logo and details*/}
        <div className="text-left max-w-140 text-accent">
          <h2 className="">Gorur Hatt</h2>
          <p className="text-xs opacity-80">
            QurbaniHaat is a trusted online marketplace connecting buyers with
            verified sellers across Bangladesh. We make it easy to find healthy,
            farm-raised animals for Qurbani with transparency, reliability, and
            convenience.
          </p>
        </div>

        {/* Social and contact*/}
        <div className="space-y-4 text-accent/80">
          {/* Social*/}
          <div className="flex gap-4 items-center text-[32px] text-accent">
            <a href="https://www.facebook.com" target="_blank" className="">
              <FaFacebook></FaFacebook>
            </a>
            <a href="https://www.youtube.com" target="_blank" className="">
              <FaYoutube></FaYoutube>
            </a>
            <a href="https://www.tiktok.com" target="_blank" className="">
              <FaTiktok></FaTiktok>
            </a>
          </div>

          {/* Contact*/}
          <div className="space-y-2">
            <p className="text-xs">Mirpur-1, Dhaka, Bangladesh</p>
            <p className="text-xs">+8801212121212</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer*/}
      <div className="py-2 bg-accent text-sm text-gray-200 text-center">
        ©️ copyright {new Date().getFullYear()}
      </div>
    </footer>
  );
}
