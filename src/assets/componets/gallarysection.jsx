import React, { Component } from "react";
import book from "../images/book.png";
import blackpoder from '../images/blackpoder.png'
import writer from '../images/writer.png'
import Component4  from "../images/Component4.png";
import Component5  from "../images/Component5.png";
import Component6  from "../images/Component6.png";
import Testimonal from "./testimonal";
function Gallarysection() {
  return (
    <div>
      <section1>
        <div className="font-bold text-center pt-20 text-3xl  ">lastest work</div>
        <div className="flex items-center justify-between flex-wrap px-8  ">
          <div className="pt-20 ">
            <div className="shadow-ms hover:shadow-2xl rounded-xl delay-150 duration-300  hover:scale-105 ">
              <img className="rounded-2xl w-90 " src={book} alt="" />
              <div className="font-semibold pt-2  ">Project title</div>
              <div className="pt-3">UI, Art drection</div>
            </div>
          </div>
        
        <div className="flex">
          <div className="pt-20">
            <div className=" shadow-ms hover:shadow-2xl rounded-xl delay-150 duration-300  hover:scale-105">
              <img className="rounded-2xl w-90 " src={blackpoder} alt="" />
              <div className="font-semibold pt-2 ">Project title</div>
              <div className="pt-3">UI, Art drection</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="pt-20">
            <div className="shadow-ms hover:shadow-2xl rounded-xl delay-150 duration-300  hover:scale-105">
              <img  className="rounded-2xl w-90 " src={writer} alt="" />
              <div className="font-semibold pt-2 ">Project title</div>
              <div className="pt-3">UI, Art drection</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="pt-20">
            <div className=" shadow-ms hover:shadow-2xl rounded-xl delay-150 duration-300  hover:scale-105">
              <img className="rounded-2xl w-90 "  src={Component4} alt="" />
              <div className="font-semibold pt-2 ">Project title</div>
              <div className="pt-3">UI, Art drection</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="pt-20">
            <div className="shadow-ms hover:shadow-2xl rounded-xl delay-150 duration-300  hover:scale-105">
              <img  className="rounded-2xl w-90 " src={Component5} alt="" />
              <div className="font-semibold pt-2 ">Project title</div>
              <div className="pt-3">UI, Art drection</div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="pt-20 ">
            <div className="shadow-ms hover:shadow-2xl rounded-xl delay-150 duration-300  hover:scale-105 ">
              <img className="rounded-2xl w-90 " src={Component6} alt="" />
              <div className="font-semibold pt-2 ">Project title</div>
              <div className="pt-3">UI, Art drection</div>
            </div>
          </div>
        </div>
        </div>
      </section1>
      <Testimonal/>
    </div>
  );
}

export default Gallarysection;
