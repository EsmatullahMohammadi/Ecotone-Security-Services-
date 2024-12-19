
import { useState } from "react";
import logo from "../../assets/images/logo.svg";

import { navItems } from "../../data";
import { Call } from "react-ionicons";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div
			className="w-full fixed top-0 left-0 flex items-center justify-center h-20 bg-white z-50 shadow-md"
		>
			<div className="absolute top-7 px-12 w-full flex items-center justify-between">
				<img src={logo} alt="logo" />
				<div className="hidden lg:flex items-center gap-10">
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className={`font-sans uppercase font-bold border-b pb-2  hover:text-blue-700 hover:border-b-blue-700 tracking-widest ${
								item.active ? "border-blue-700 text-blue-700" : "border-transparent text-black"
							}`}
						>
							{item.title}
						</a>
					))}
				</div>
				<div className="hidden lg:flex items-center gap-6">
					<a href="tel:+1234567890" className="text-[#2cbdfc] hover:text-[#2a96c5]font-bold hidden xl:flex">
					<Call color={"#34b7f1"} cssClasses={"!text-secondary cursor-pointer"}/>
						+1 (234) 567-890						
					</a>

				<a
					href={"/contact"}
					key={"contact"}
					className={`font-sans uppercase font-semibold text-white bg-blue-600 
						hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out 
						py-2 px-6 rounded-lg tracking-wide text-center`}
					>
					Contact Us
				</a>


				</div>
			
				{/* for mobile device */}
				<button
					className="lg:hidden text-black text-2xl"
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
							className={`font-sans uppercase font-medium border-b pb-2 hover:text-blue-700 hover:border-blue-700 first:tracking-widest ${
								item.active ? "border-blue-700 text-blue-700" : "border-transparent text-black"
							}`}
						>
							{item.title}
						</a>
					))}
					<a href="/contact" className="font-sans uppercase font-medium border-b pb-2 hover:text-blue-700 hover:border-blue-700 first:tracking-widest border-transparent text-black">contact us</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
