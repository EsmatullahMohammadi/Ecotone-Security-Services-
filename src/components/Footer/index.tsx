import logo from "../../assets/images/logoBlack.svg";
import {
	Call,
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	LogoTwitter,
	LogoWhatsapp,
	LogoYoutube,
} from "react-ionicons";

const Footer = () => {
	return (
		<div className="w-full lg:mt-40 mt-20 flex flex-col">
			<div className="w-full flex lg:flex-row flex-col items-start justify-between pb-[100px] lg:px-[310px] px-5 lg:gap-0 gap-16">
				<div className="flex flex-col gap-5">
					<img
						src={logo}
						alt="logo"
						className="w-[150px]"
					/>
					<span className="font-sans max-w-[280px] text-gray">
						It is some text in here about your company 
					</span>
				</div>
				<div className="flex flex-col gap-5">
					<span className="text-primary font-sans">About</span>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Terms & Conditions
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Privacy Policy
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Career
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Contact
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Help
					</a>
				</div>
				<div className="flex flex-col gap-5">
					<span className="text-gray font-sans">Quick Links</span>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Newsletter
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Articles
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Location
					</a>
				</div>
				<div className="flex flex-col gap-5">
					<span className="text-gray font-sans max-w-[240px]">
						163 Elm Drive, New York City United States
					</span>
					<a href="tel:+1234567890" className="text-gray font-sans flex">
						<Call color={"#666666"}  cssClasses={"!text-secondary  cursor-pointer"}/>
							+1 (234) 567-890						
					</a>
					<a
						href="https://wa.me/93777187806" // Replace with your actual phone number
						target="_blank"
						className="text-gray font-sans flex"
						>
						<LogoWhatsapp color={"#666666"}  cssClasses={"!text-secondary cursor-pointer"}/>
						Contact Us on WhatsApp
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						info@yourinfo.com
					</a>
				</div>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center justify-between border-t lg:h-[80px] lg:gap-0 gap-10 lg:py-0 py-5 border-[#DADADA] lg:px-[310px] px-5">
				<span className="font-sans text-gray lg:text-left text-center">
					Copyright at ©2024 Lecoton Security Service
					
				</span>
				<div className="flex items-center gap-6">
					<LogoFacebook color={"#3b5998"}  cssClasses={" !text-secondary cursor-pointer"}/>
					<LogoInstagram color={"#E4405F"}  cssClasses={"!text-secondary cursor-pointer"}/>
					<LogoLinkedin color={"#0077B5"}  cssClasses={"!text-secondary cursor-pointer"}/>
					<LogoTwitter color={"#1DA1F2"}  cssClasses={"!text-secondary cursor-pointer"}/>
					<LogoYoutube color={"#FF0000"}  cssClasses={"!text-secondary cursor-pointer"}/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
