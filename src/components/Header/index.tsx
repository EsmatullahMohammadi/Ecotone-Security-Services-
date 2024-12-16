/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from "../../assets/images/logo.svg";

import { navItems } from "../../data";
import {
	LogoBehance,
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	LogoTwitter,
} from "react-ionicons";


const Header = () => {
	return (
		<div
			className="w-full fixed top-0 left-0 flex items-center justify-center h-20 bg-black z-50 shadow-md"
		>
			<div className="absolute top-9 px-12 w-full flex items-center justify-between">
				<img
					src={logo}
					alt="logo"
				/>
				<div className="hidden lg:flex items-center gap-10">
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							target="_blank"
							className={`font-oswald uppercase font-medium border-b pb-2 tracking-widest ${
								item.active
									? "border-primary text-primary"
									: "border-transparent text-white"
							}`}
						>
							{item.title}
						</a>
					))}
				</div>
				<div className="hidden lg:flex items-center gap-6">
					<LogoFacebook cssClasses={"!text-white !fill-white cursor-pointer"} />
					<LogoInstagram cssClasses={"!text-white !fill-white cursor-pointer"} />
					<LogoLinkedin cssClasses={"!text-white !fill-white cursor-pointer"} />
					<LogoTwitter cssClasses={"!text-white !fill-white cursor-pointer"} />
					<LogoBehance cssClasses={"!text-white !fill-white cursor-pointer"} />
				</div>
			</div>
		</div>
	);
};

export default Header;

