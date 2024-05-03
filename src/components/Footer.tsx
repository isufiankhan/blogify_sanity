import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
    const footernavigation = [
        {title: "About", href: "#"},
        {title: "Terms", href: "#"},
        {title: "Privacy", href: "#"},
        {title: "Help", href: "#"},
        {title: "Teams", href: "#"},
        {title: "Press", href: "#"},
    ]
    return (
        <div className='p-10 bg-darkgray text-gray-100 flex flex-col md:flex-row items-center justify-between text-'>
            <Logo title='Blogify' className='text-white ' />
            <div>
            {footernavigation.map((item)=>(
                <Link key={item?.title} href={item?.href} className='text-xs relative text-white px-1 underline'>
                {item?.title}
                </Link>
              ))}
            </div>
        </div>
    )
}

export default Footer