import React from "react";
import Rectangle from "../images/Rectangle.png";
import Skills from '../images/Skills.png'
import newskill from '../images/newskill.png'
import Gallarysection from "./gallarysection";

function Card() {
  return (
    <div>
      <newcard>
        <div className="flex font-bold flex-wrap items-center justify-between pt-20  py-4 px-22 ">
            <div className="shadow-ms hover:shadow-2xl rounded-xl border-x-2">
          <img src={Rectangle} alt="" />
          <div className="">
            <div className="font-bold pt-3">Product Design</div>
            <div className="pt-5">
              This is a template Figma file, turned
              <br />
              into code using Anima. Learn more at
              <br />
              AnimaApp.com
            </div>
          </div>
          </div>
          <skill>
        <div className="shadow-ms hover:shadow-2xl rounded-xl border-x-2">
            <div>
                <img src={Skills} alt="" />
                <div className="font-bold pt-3">Visual Design</div>
                <div className="pt-5">This is a template Figma file, turned <br/>into code using Anima. Learn more at<br/> AnimaApp.com</div>
            </div>
        </div>
      </skill>
      <nwskill>
        <div className="   shadow-ms hover:shadow-2xl rounded-xl border-x-2">
            <div>
                <img src={newskill} alt="" />
                <div className="font-bold pt-3">Art Direction</div>
                <div className="pt-5">This is a template Figma file, turned <br/>into code using Anima. Learn more at<br/> AnimaApp.com</div>
            </div>
        </div>
      </nwskill>
        </div>
      </newcard>
     <Gallarysection/>
    </div>
  );
}

export default Card;
