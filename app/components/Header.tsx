'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => scrollToSection('#')}
                            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
                        >
                            JM Manlapaz
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="btn-primary"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="py-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="btn-primary w-full mt-4"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 