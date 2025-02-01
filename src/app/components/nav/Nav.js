import React from "react";
import './style.css'
import Link from "next/link";

function Nav(props){
    return(<>
        <div className="nav col-span-12  rows-span-1">
            <div className="nav-i-1 grid grid-cols-12 gap-14">
                <Link href='/' className="nav-b-home">
                    Home
                </Link >
                <span>
                </span>

                <span className="nav-pro-i col-start-12 p-2 rounded-full">
                    profile
                </span>
            </div>
        </div>
    </>)
}
export default Nav