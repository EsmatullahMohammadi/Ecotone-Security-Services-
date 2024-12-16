import React from 'react'
import Button from "../Button";
import bg from "../../assets/images/bg.png";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='w-full flex items-center justify-center relative h-screen bg-cover bg-center'>
        <div className="flex flex-col gap-12 lg:items-start items-center lg:px-0 px-12">
				<div className="text-white font-semibold font-oswald lg:text-[100px] text-[45px] lg:leading-[140px] tracking-wide uppercase lg:max-w-[50vw] lg:text-left text-center">
					We are the best construction company
				</div>

				<Button variant="light">view out projects</Button>
			</div>
    </div>
  )
}

export default Home