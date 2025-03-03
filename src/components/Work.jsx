/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

/* eslint-disable react/jsx-key */

function Work() {
  const [images, setimages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50% ",
      left: "50%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "44%",
      left: "56%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "59%",
      isactive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "40%",
      left: "40%",
      isactive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageshow(arr) {
      setimages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isactive: false }
            : { ...item, isactive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 1:
        imageshow([]);
        break;
      case 2:
        imageshow([0]);
        break;
      case 3:
        imageshow([0, 1]);
        break;
      case 4:
        imageshow([0, 1, 2]);
        break;
      case 5:
        imageshow([0, 1, 2, 3]);
        break;

      default:
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center ">
        <h1 className="text-[28vw] leading-none font-medium tracking-tight select-none  ">
          work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (ele, index) =>
              ele.isactive && (
                <img
                  className="absolute w-60 rounded-md -translate-x-[50%] -translate-y-[50%]"
                  src={ele.url}
                  style={{ top: ele.top, left: ele.top }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
