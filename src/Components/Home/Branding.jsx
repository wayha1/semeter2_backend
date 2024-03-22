import React from "react";
import { Link } from "react-router-dom";
import ThreeCE from "../../asset/3CE.png";
import Axisy from "../../asset/Axis-y.png";
import Cosrx from "../../asset/COSRX.png";
import Joseon from "../../asset/Joseon.png";
import MaryandMay from "../../asset/Mary&May.png";
import NatureRepublic from "../../asset/Nature republic.png";
import Innisfree from "../../asset/innisfree.png";
import Klairs from "../../asset/klairs.png";

function Branding() {
  return (
    <>
      <div>
        <div className="bg-white pt-10">
          <div className="text-center pb-10">
            <h1 className="font-bold text-4xl pb-4">Favorites Brand</h1>
          </div>
          {/* animate-loop-scroll */}
          <div className="flex space-x-4 md:space-x-20 overflow-hidden group pt-10 lg:pt-0 lg:m-16">
            <div className="flex space-x-10 md:space-x-20 animate-loop-scroll  group-hover:paused">
              <div className="flex justify-center items-center ">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className=" w-full h-full hover:scale-110 ">
                      <img src={NatureRepublic} alt="Natural Republic"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-14">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Axisy} alt="Axis-y"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-14">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={MaryandMay} alt="Mary&May"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/about">
                  <div className=" w-20 h-15 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Joseon} className=" " alt="Joseon"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center ">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={ThreeCE} className=" " alt="3CE"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-10">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Klairs} className=" " alt="Klairs"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-12">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110 ">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Cosrx} className=" " alt="Cosrx"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110 ">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Innisfree} className=" " alt="Innisfree"></img>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Second scroll */}
            <div className="flex space-x-10 md:space-x-20 animate-loop-scroll  group-hover:paused">
              <div className="flex justify-center items-center ">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className=" w-full h-full hover:scale-110 ">
                      <img src={NatureRepublic} alt="Natural Republic"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-14">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Axisy} alt="Axis-y"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-14">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={MaryandMay} alt="Mary&May"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/about">
                  <div className=" w-20 h-15 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Joseon} className=" " alt="Joseon"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center ">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={ThreeCE} className=" " alt="3CE"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-10">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Klairs} className=" " alt="Klairs"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-12">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110 ">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Cosrx} className=" " alt="Cosrx"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110 ">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Innisfree} className=" " alt="Innisfree"></img>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Third Scroll */}
            <div className="flex space-x-10 md:space-x-20 animate-loop-scroll  group-hover:paused">
              <div className="flex justify-center items-center ">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className=" w-full h-full hover:scale-110 ">
                      <img src={NatureRepublic} alt="Natural Republic"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-14">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Axisy} alt="Axis-y"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-14">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={MaryandMay} alt="Mary&May"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/about">
                  <div className=" w-20 h-15 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Joseon} className=" " alt="Joseon"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center ">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={ThreeCE} className=" " alt="3CE"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-10">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Klairs} className=" " alt="Klairs"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center pt-12">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110 ">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Cosrx} className=" " alt="Cosrx"></img>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/about">
                  <div className=" w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110 ">
                    <div className="w-full h-full hover:scale-110">
                      <img src={Innisfree} className=" " alt="Innisfree"></img>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding;
