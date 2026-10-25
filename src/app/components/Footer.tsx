import React from 'react';
import Image from "next/image";
import logo from "@/app/assets/logo.png";
const Footer = () => {
    return (

        <footer className="flex flex-col items-center gap-8 bg-base-200 text-base-content p-6 sm:p-8 md:flex-row md:justify-between md:items-start md:p-10">
            <div className="flex gap-2">
                <Image src={logo} alt="fitlog logo" width={30} height={5}/>
                <h2 className="text-xl font-bold">FitLog</h2>
            </div>
            <div className="text-sm">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </div>

        </footer>


    );
};

export default Footer;