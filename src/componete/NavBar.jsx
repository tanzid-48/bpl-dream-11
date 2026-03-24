import React from 'react'
import logo from "../../assets/logo.png"
import dollarImg from "../../assets/DoubleDollar.png";

const NavBar = () => {
    return (


        <div className="navbar container w-10/12 mx-auto  bg-base-100 mt-3  ">
            <div className="flex-1">
                <img src={logo} alt="logo" className="w-20" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='paragraph mr-4'><a>Home</a></li>
                    <li className='paragraph mr-4'><a>Fixture</a></li>
                    <li className='paragraph mr-4'><a>Teams</a></li>
                    <li className='paragraph mr-4'><a>Schedules</a></li>
                    <li>
                        <button className="btn btn-soft font-bold py-3 flex items-center gap-2">
                            0 Coin
                            <img src={dollarImg} alt="coin" className="w-5 h-5" />
                        </button>
                    </li>

                </ul>
            </div>
        </div>

    );
};

export default NavBar;