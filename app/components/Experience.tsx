import React from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            title: 'Software Developer',
            company: 'RelightDepot.com',
            period: 'July 2023 – July 2025',
            location: 'Remote',
            description: [
                'Developed catalog management tools using Laravel and React for BigCommerce that increased efficiency up to 100X',
                'Automated creation and updating of deals, contacts, accounts, and leads in Zoho CRM via Make and Zoho Flow',
                'Customized BigCommerce theme to improve user experience and streamline updates',
                'Built AI-powered product enrichment tools using OpenAI for automated descriptions and specifications'
            ],
            technologies: ['Laravel', 'React', 'PHP', 'BigCommerce', 'Zoho CRM', 'Make (Integromat)', 'OpenAI']
        },
        {
            title: 'Equipment Engineer',
            company: 'Texas Instruments',
            period: 'November 2018 – January 2023',
            location: 'Clark, Philippines',
            description: [
                'Onboarded and trained new hires on precision equipment operations and safety protocols',
                'Led a study to determine optimal collet touchdown on dies, reducing collet-related failures',
                'Proposed and piloted an automatic pressure-compensation system to ensure consistent epoxy dispensing',
                'Optimized manufacturing processes and collaborated with cross-functional teams'
            ],
            technologies: ['Process Optimization', 'Equipment Maintenance', 'Safety Protocols', 'Data Analysis']
        }
    ]

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Building innovative solutions and contributing to meaningful projects throughout my career
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline line */}
                                {index !== experiences.length - 1 && (
                                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-primary-200"></div>
                                )}

                                <div className="flex gap-6">
                                    {/* Timeline dot */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                                        <Briefcase size={20} className="text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-white rounded-2xl p-8 card-hover">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                                                <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                                                    <span>{exp.company}</span>
                                                    <span className="text-gray-400">•</span>
                                                    <span className="text-gray-600">{exp.location}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <Calendar size={16} />
                                                <span className="font-medium">{exp.period}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="pt-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-full font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience 