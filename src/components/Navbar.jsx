/* eslint-disable react/jsx-key */

import Button from "./Button"


function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto py-6 bg-zinc-900 flex items-center justify-between border-b-[1px] border-zinc-700">

            <div className=" flex items-center">
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />

                <div className="links flex gap-14 ml-20">

                    {["Home", "Work", "Culture", "", "News"].map((ele, index) => (

                        ele.length === 0 ? <span className="w-[2px] h-7 bg-zinc-600"></span> : (
                            <a href="#"
                                className="text-sm flex items-center gap-1 ">
                                {index === 1 && (<span
                                    style={{ boxShadow: "0 0 0.45em #00ff19 " }}
                                    className="inline-block w-1 h-1 bg-green-600 rounded-full"></span>)}
                                {ele}</a>
                        )
                    )



                    )}
                </div>

            </div>
            <Button />


        </div>
    )
}

export default Navbar