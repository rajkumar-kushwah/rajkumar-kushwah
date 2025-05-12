import React from "react";

function Footer() {
  return (
    <div >
      <footer>
        <div className="font-semibold text-2xl pt-10 pl-10 ">
          Lets work together
        </div>
        <div className="flex-wrap flex items-center justify-between px-22 bg-black text-white pb-20 pt-20 mt-20 ">
          <div>
            This is a template Figma file, turned into code using Anima. Learn{" "}
            <br /> more at AnimaApp.com This is a template Figma file, turned
            into <br /> code using Anima. Learn more at AnimaApp.com
            <div className="flex gap-5 pt-20 text-2xl   ">
              <i class="fa fa-simplybuilt hover:text-gray-400  " aria-hidden="true"></i>
              <i class="fa fa-facebook-official hover:text-gray-400" aria-hidden="true"></i>
              <i class="fa fa-dribbble hover:text-gray-400" aria-hidden="true"></i>
              <i class="fa fa-instagram hover:text-gray-400" aria-hidden="true"></i>
              <i class="fa fa-behance  hover:text-gray-400" aria-hidden="true"></i>
            </div>
          </div>
          <form>
            <input
              className="bg-gray-100 p-3 rounded-sm text-black px-7 mt-4 hover:bg-gray-200"
              type="text"
              placeholder="Name"
            />
            <br/><br/>
            <input
              className=" bg-gray-100 p-3 rounded-sm px-7 text-black mt-4   hover:bg-gray-200"
              type="text"
              placeholder="Email"
            />
            <button className="flex  pt-3 hover:bg-blue-700  rounded-xl  bg-blue-600 text-white px-10 py-3 pl-10 mt-10  ">
              contect
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
