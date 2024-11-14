import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black/45 text-white/85 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-2 text-red-500">Contact Us</h3>
                        <p>Phone: +92-3445-344</p>
                        <p>Email: <a href="mailto:kinzaniba@gmail.com" className="text-blue-400">kinzaniba@gmail.com</a></p>
                        <p>Address: Khan,s Restaurant, Karachi, Pakistan</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-4 md:mt-0">
                        <h3 className="text-lg font-bold mb-2 text-red-500">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Niba-khan" target="_blank" rel="noopener noreferrer" aria-label="Follow on GitHub">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/niba-farooq" target="_blank" rel="noopener noreferrer" aria-label="Follow on LinkedIn">
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="mt-4 md:mt-0">
                        <h3 className="text-lg font-bold mb-2">Links</h3>
                        <ul>
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/menuitem" className="text-gray-400 hover:text-white">Menu</a></li>
                            <li><a href="/reservation" className="text-gray-400 hover:text-white">Reservations</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="mt-10 text-center">
                    <p className="text-sm">@Khan,s Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
