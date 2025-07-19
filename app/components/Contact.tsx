'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Globe, MessageCircle, CheckCircle, AlertCircle, Loader } from 'lucide-react'
// import emailjs from '@emailjs/browser' // Switched to Formspree for better security

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [statusMessage, setStatusMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Formspree integration (safer alternative to EmailJS)
            const formspreeUrl = 'https://formspree.io/f/xnnznkrw'

            const response = await fetch(formspreeUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            setSubmitStatus('success')
            setStatusMessage('Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.')

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        } catch (error) {
            console.error('EmailJS Error:', error)
            setSubmitStatus('error')
            setStatusMessage('Sorry, there was an error sending your message. Please try again or contact me directly.')
        } finally {
            setIsSubmitting(false)

            // Auto-hide status message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle')
                setStatusMessage('')
            }, 5000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let&apos;s Connect</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                I&apos;m always interested in hearing about new opportunities for automation projects,
                                software development roles, or collaborations. Let&apos;s discuss how I can help
                                streamline your business operations through innovative technology solutions.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary-600 rounded-lg">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Email</h4>
                                    <p className="text-gray-600">engrjmmanlapaz@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary-600 rounded-lg">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Phone</h4>
                                    <p className="text-gray-600">+639436124574</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary-600 rounded-lg">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Location</h4>
                                    <p className="text-gray-600">Tarlac, Philippines (Remote Ready)</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://linkedin.com/in/john-michael-manlapaz-492665158"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                                >
                                    <Linkedin size={24} className="text-primary-600" />
                                </a>
                                <a
                                    href="mailto:engrjmmanlapaz@gmail.com"
                                    className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                                >
                                    <Mail size={24} className="text-gray-700" />
                                </a>
                                <a
                                    href="https://wa.me/639436124574"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                                >
                                    <MessageCircle size={24} className="text-green-600" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Status Message */}
                            {submitStatus !== 'idle' && (
                                <div className={`p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                    ? 'bg-green-50 text-green-800 border border-green-200'
                                    : 'bg-red-50 text-red-800 border border-red-200'
                                    }`}>
                                    {submitStatus === 'success' ? (
                                        <CheckCircle size={20} className="text-green-600" />
                                    ) : (
                                        <AlertCircle size={20} className="text-red-600" />
                                    )}
                                    <p className="text-sm">{statusMessage}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center gap-2 group px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isSubmitting
                                    ? 'bg-gray-400 text-white cursor-not-allowed'
                                    : 'bg-primary-600 text-white hover:bg-primary-700'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact 