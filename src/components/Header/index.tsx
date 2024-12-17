
import { useState } from "react";
import logo from "../../assets/images/logo.svg";

import { navItems } from "../../data";
// import {
// 	LogoBehance,
// 	LogoFacebook,
// 	LogoInstagram,
// 	LogoLinkedin,
// 	LogoTwitter,
// } from "react-ionicons";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div
			className="w-full fixed top-0 left-0 flex items-center justify-center h-24 bg-white z-50 shadow-md"
		>
			<div className="absolute top-9 px-12 w-full flex items-center justify-between">
				<img src={logo} alt="logo" />

				<div className="hidden lg:flex items-center gap-10">
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							target="_blank"
							className={`font-sans uppercase font-bold border-b pb-2  hover:text-blue-700 tracking-widest ${
								item.active ? "border-blue-700 text-blue-700" : "border-transparent text-black"
							}`}
						>
							{item.title}
						</a>
					))}
				</div>
				<div className="hidden lg:flex items-center ">
						<a
							href={""}
							key={""}
							target="_blank"
							className={`font-sans uppercase font-medium border-b pb-2 tracking-widest border-transparent text-black
							`}
						>
							Contact Us
						</a>
				</div>

				{/* <div className="hidden lg:flex items-center gap-6">
					<LogoFacebook cssClasses="!text-white !fill-white cursor-pointer" />
					<LogoInstagram cssClasses="!text-white !fill-white cursor-pointer" />
					<LogoLinkedin cssClasses="!text-white !fill-white cursor-pointer" />
					<LogoTwitter cssClasses="!text-white !fill-white cursor-pointer" />
					<LogoBehance cssClasses="!text-white !fill-white cursor-pointer" />
				</div> */}
				

				{/* for mobile device */}
				<button
					className="lg:hidden text-black text-xl"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					☰
				</button>

				<div
					className={`${
						menuOpen ? "flex" : "hidden"
					} lg:hidden flex-col items-center absolute top-10 left-0 w-full bg-white p-4 gap-4 z-40`}
				>
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className={`font-sans uppercase font-medium border-b pb-2 hover:text-primary first:tracking-widest ${
								item.active ? "border-primary text-primary" : "border-transparent text-black"
							}`}
						>
							{item.title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
