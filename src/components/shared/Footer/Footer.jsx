import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-accent/30">
      {/* Top Footer*/}
      <div className="cssContainer md:flex-row justify-between">
        {/* Logo and details*/}
        <div className="text-left">
          <h2 className="">Gorur Hatt</h2>
          <p className=""></p>
        </div>

        {/* Social and contact*/}
        <div className="">
          <div className="flex gap-4 items-center text-[32px] text-accent">
            <a href="" className=""></a>
            <FaFacebook></FaFacebook>
          </div>
        </div>
      </div>

      {/* Bottom Footer*/}
      <div className="py-2 bg-accent text-white text-center">
        ©️copyright {new Date().getFullYear()}
      </div>
    </footer>
  );
}
