import React from "react";
import './style.css'
import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon


function Nav(props){
    return(<>
        <div className="nav col-span-12  rows-span-1 ">
            <div className="nav-i-1 grid grid-cols-12 grid-rows-1 gap-14">
                <Link href='/' className="nav-b-home text-center">
                    Home
                </Link >
                <span>
                </span>
                <FontAwesomeIcon icon={faUser} className="col-start-12 float-end text-fuchsia-50"/>
            </div>
        </div>
    </>)
}
export default Nav