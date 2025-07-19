'use client'

import React from 'react'
import { Heart, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <footer className="bg-gray-900 text-white relative">
            {/* Back to top button */}
            <button
                onClick={scrollToTop}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 rounded-full p-3 shadow-lg transition-colors duration-200"
            >
                <ArrowUp size={20} />
            </button>

            <div className="section-container py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">John Michael Manlapaz</h3>
                            <p className="text-gray-400 text-lg">Full Stack Developer & Software Engineer</p>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                            Passionate about creating innovative digital solutions and building
                            exceptional user experiences. Always excited to take on new challenges
                            and collaborate on meaningful projects.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/in/john-michael-manlapaz-492665158"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:engrjmmanlapaz@gmail.com"
                                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="https://wa.me/639436124574"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                            >
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <div className="space-y-3 text-gray-400">
                            <div>
                                <p className="font-medium text-white">Email</p>
                                <a
                                    href="mailto:engrjmmanlapaz@gmail.com"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    engrjmmanlapaz@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="font-medium text-white">Location</p>
                                <p>Philippines</p>
                            </div>
                            <div>
                                <p className="font-medium text-white">Availability</p>
                                <p>Open to opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>© {currentYear} John Michael Manlapaz. Made with</span>
                            <Heart size={16} className="text-red-500" />
                            <span>and Next.js</span>
                        </div>
                        {/* <div className="flex items-center gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 