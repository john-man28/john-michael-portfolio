'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.querySelector('#about')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const downloadResume = () => {
        const link = document.createElement('a')
        link.href = '/John_Michael_Manlapaz_CV.pdf'
        link.download = 'John_Michael_Manlapaz_CV.pdf'
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const scrollToContact = () => {
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="section-container relative z-10">
                <div className="text-center space-y-8 animate-fade-in">
                    {/* Profile Image */}
                    <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 p-1 animate-slide-up">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                                src="/profile.jpg"
                                alt="John Michael Manlapaz"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback to initials if image fails to load
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                                <span className="text-2xl font-bold text-gray-600">JMM</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6">
                        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                                John Michael
                                <br />
                                <span className="text-gradient">Manlapaz</span>
                            </h1>
                        </div>

                        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Full Stack Developer (Backend Focused)
                            </p>
                            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
                                Career shifter from Mechanical Engineering to Software Development. Specializing in backend systems, automation tools, and full stack web applications that streamline business operations.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
                            <button
                                onClick={scrollToContact}
                                className="btn-primary flex items-center gap-2 group"
                            >
                                <Mail size={20} />
                                Get In Touch
                                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                            </button>
                            <button
                                onClick={downloadResume}
                                className="btn-secondary flex items-center gap-2 group"
                            >
                                <Download size={20} />
                                Download Resume
                                <span className="group-hover:translate-y-1 transition-transform duration-200">↓</span>
                            </button>
                        </div>

                        {/* Social Links - Hidden for now */}
                        {/* <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                            <a
                                href="https://github.com/johnmichaelmanlapaz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                            >
                                <Github size={24} className="text-gray-700" />
                            </a>
                            <a
                                href="https://linkedin.com/in/johnmichaelmanlapaz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                            >
                                <Linkedin size={24} className="text-primary-600" />
                            </a>
                            <a
                                href="mailto:engrjmmanlapaz@gmail.com"
                                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                            >
                                <Mail size={24} className="text-gray-700" />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <button
                    onClick={scrollToAbout}
                    className="animate-bounce hover:animate-none transition-all duration-200"
                >
                    <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                        <span className="text-sm font-medium">Scroll Down</span>
                        <ArrowDown size={20} />
                    </div>
                </button>
            </div>
        </section>
    )
}

export default Hero 