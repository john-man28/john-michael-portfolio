import React from 'react'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Science in Mechanical Engineering',
            institution: 'Holy Angel University',
            location: 'Angeles City, Philippines',
            period: 'June 2013 - April 2018',
            grade: 'Best Thesis Award',
            description: 'Awarded Best Thesis for "Design and Fabrication of Mechanically Operated Corn Seed Planter Machine: Combined Furrower, Seeder, and Roller"'
        },
        {
            degree: 'Web Development Immersive',
            institution: 'Village88',
            location: 'Remote',
            period: 'April 2023 - July 2023',
            grade: 'Certificate',
            description: 'Hands-on experience with CodeIgniter, Laravel, PHP, HTML, CSS, JavaScript, React.js, Node.js, Vue.js, Ruby, and modern testing tools.'
        },
        {
            degree: 'Application Development Bootcamp 2.0',
            institution: 'Zoho',
            location: 'Remote',
            period: 'July 2025',
            grade: 'Participant',
            description: 'Demonstration on developing applications using Zoho Creator, with a particular focus on integrating AI features branded as Co-Creator.'
        }
    ]

    const certifications = [
        {
            name: 'Web Fundamentals Track Completion',
            issuer: 'Village88',
            date: 'January 2023',
            id: 'V88B4WF23-0026'
        },
        {
            name: 'Advanced PHP Track Completion',
            issuer: 'Village88',
            date: 'February 2023',
            id: 'V88B4PHP23-0026'
        },
        {
            name: 'Advanced JavaScript Track Completion',
            issuer: 'Village88',
            date: 'March 2023',
            id: 'V88B4JS23-0026'
        },
        {
            name: 'Ruby on Rails Track Completion',
            issuer: 'Village88',
            date: 'April 2023',
            id: 'V88B4BE23-0026'
        }
    ]

    return (
        <section id="education" className="py-20 bg-white">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Education & <span className="text-gradient">Certifications</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Continuous learning and professional development journey
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                            <GraduationCap className="text-primary-600" size={28} />
                            Education
                        </h3>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline line */}
                                    {index !== education.length - 1 && (
                                        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary-200"></div>
                                    )}

                                    <div className="flex gap-6">
                                        {/* Timeline dot */}
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                                            <GraduationCap size={20} className="text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bg-gray-50 rounded-2xl p-6">
                                            <div className="mb-4">
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-primary-600 font-semibold">
                                                        <span>{edu.institution}</span>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <MapPin size={14} />
                                                            <span>{edu.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Calendar size={14} />
                                                            <span>{edu.period}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {edu.grade}
                                                </span>
                                            </div>

                                            <p className="text-gray-600">{edu.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                            <Award className="text-primary-600" size={28} />
                            Certifications
                        </h3>

                        <div className="grid gap-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-6 card-hover">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                                            <Award size={20} className="text-white" />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                                            <p className="text-primary-600 font-semibold mb-2">{cert.issuer}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500">Issued: {cert.date}</span>
                                                <span className="text-xs text-gray-400 font-mono">{cert.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Learning */}
                        <div className="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Continuous Learning</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="font-medium text-gray-700">Platforms:</span>
                                    <p className="text-gray-600">Zoho Trainer Central, Udemy, Coursera</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Focus Areas:</span>
                                    <p className="text-gray-600">System Integration, Business Process Automation, AI/ML, Performance Optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education 