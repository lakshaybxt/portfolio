import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaTwitch, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';


const Contact = () => {
  return (
    <div id='Contact' className='bg-[#12171a] text-white py-16 px-4 md:px-20 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-b-lg '>
        <p className='text-sm text-[#52B2E5] tracking-widest uppercase mb-2 text-center'>
        Get In Touch
        </p>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-5 text-center'>
        Contact.
        </h2>
        <p className='text-gray-300 text-lg leading-relaxed text-center'>
        Have a project in mind or want to collaborate? Feel free to reach out. <br/> I'm always open to discussing new opportunities.
        </p>
        
        <section className="text-white min-h-screen px-6 py-10 flex flex-col md:flex-row justify-center items-center gap-12 relative">
            {/* Left Side - Contact Info */}
            <div className="flex-1 max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Contact Information</h2>
                <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="bg-[#52B2E5] p-3 rounded-full"><FaEnvelope /></div>
                    <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400 text-sm">lakshaybisht.dev@gmail.com</p>
                    </div>
                </div>
                {/* <div className="flex items-center gap-4">
                    <div className="bg-[#52B2E5] p-3 rounded-full"><FaPhone /></div>
                    <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400 text-sm">+254743789242</p>
                    </div>
                </div> */}
                <div className="flex items-center gap-4">
                    <div className="bg-[#52B2E5] p-3 rounded-full"><FaMapMarkerAlt /></div>
                    <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400 text-sm">Delhi, India</p>
                    </div>
                </div>
                </div>

                {/* Socials */}
                <div className="mt-10">
                <p className="text-center md:text-left font-medium mb-2">Connect With Me</p>
                <div className="flex justify-center md:justify-start gap-5 text-xl">
                    <a href="https://linkedin.com/in/lakshaybisht" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-[#52B2E5]" />
                    </a>
                    <a href="https://x.com/lakshaybxt" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="hover:text-[#52B2E5]" />
                    </a>
                    <a href="https://github.com/lakshaybxt" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-[#52B2E5]" />
                    </a>
                    <a href="https://leetcode.com/lakshaybxt" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leetcode.svg"
                            alt="LeetCode"
                            className="w-5 h-5 hover:opacity-80 invert"
                        />
                    </a>
                </div>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1 w-full max-w-xl bg-gradient-to-br from-[#1e2326] to-[#0A0C0D] p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-8">Send a Message</h2>
                <form className="space-y-6">
                <div>
                    <label className="block mb-2 text-sm">Your Name</label>
                    <input
                    type="text"
                    placeholder="write your name..."
                    className="w-full px-4 py-3 bg-[#0f1115] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#52B2E5]"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm">Your Email</label>
                    <input
                    type="email"
                    placeholder="write your email"
                    className="w-full px-4 py-3 bg-[#0f1115] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#52B2E5]"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm">Your Message</label>
                    <textarea
                    rows="5"
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full px-4 py-3 bg-[#0f1115] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#52B2E5]"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#52B2E5] hover:bg-[#3e9ccc] transition duration-200 text-white py-3 rounded-full text-lg font-semibold flex items-center justify-center gap-2"
                >
                    Send Message <span>📨</span>
                </button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact
