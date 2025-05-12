import React from "react";
import HeaderImage from "../images/HeaderImage.png";
import nike from "../images/nike.svg";
import samsung from "../images/samsung.svg";
import apple from "../images/apple.svg";
import adidas from "../images/adidas.svg";
import Card from "./card";

function Header() {
  return (
    <>
      <div>
        <navigator>
          <div className=" flex shadow-2xl border-0 fixed w-full z-[40] flex-wrap font-bold  justify-between  py-4 px-22 ">
            <div className="font-bold cursor-pointer text-white text-3xl  "> LOGO</div>
            <menuItem className="flex gap-3 items-center justify-end   ">
              <a className="hover:bg-sky-500 hover:text-white px-3 rounded-lg p-2 " href="#">
                About
              </a>
              <a className="hover:bg-sky-500 hover:text-white  rounded-lg px-4 p-2" href="#">
                word
              </a>
              <a className="hover:bg-sky-500 hover:text-white  rounded-lg p-2 " href="#3">
                contact
              </a>
            </menuItem>
          </div>
        </navigator>

        <section>
          <div className="flex  justify-between text-white px-20 pt-40 ">
            <div className=" ">
              <div className="  ">
                <div className="font-semibold hover:underline">Branding | Image making </div>
                <div className="text-6xl flex-wrap mt-3 font-bold  ">Visual Designer</div>
                <div className="mt-8  animate-bounce hover:underline ">
                  This is a template Figma file, turned into code using Anima.
                  <br /> Learn more at AnimaApp.com
                </div>
                <div>
                  <button className="bg-black  text-white px-12 py-4 mt-20 hover:scale-105 duration-200 hover:bg-sky-950">
                    content
                  </button>
                </div>
              </div>
            </div>
            
              <div className=" ">
                <img src={HeaderImage} alt="" />
             
            </div>
          </div>
        </section>
        <logovar>
          <div className=" ">
            <div className="flex   flex-wrap w-full items-center justify-between pt-10 px-20">
              <div className="font-bold  text-2xl">Google</div>
            
                <img src={nike} alt="" />
              <img src={samsung} alt="" />
              <img src={apple} alt="" />
              <img src={adidas} alt="" />
            </div>
          </div>
        </logovar>
       
        <Card/>
      </div>
    </>
  );
};
export default Header;
