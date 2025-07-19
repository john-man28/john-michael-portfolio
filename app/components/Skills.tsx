import React from 'react'
import { Code, Database, Cloud, Smartphone, Palette, Settings } from 'lucide-react'

const Skills = () => {
    const skillCategories = [
        {
            icon: Database,
            title: 'Backend Development',
            skills: [
                { name: 'PHP', level: 90 },
                { name: 'Laravel', level: 95 },
                { name: 'MySQL', level: 85 },
                { name: 'GraphQL', level: 80 }
            ]
        },
        {
            icon: Code,
            title: 'Frontend Development',
            skills: [
                { name: 'HTML/CSS', level: 95 },
                { name: 'JavaScript', level: 90 },
                { name: 'React.js', level: 88 },
                { name: 'UI/UX Design', level: 85 }
            ]
        },
        {
            icon: Settings,
            title: 'Automation & Integration',
            skills: [
                { name: 'Zoho Flow', level: 95 },
                { name: 'Make (Integromat)', level: 90 },
                { name: 'API Integrations', level: 88 },
                { name: 'Zoho Creator', level: 95 }
            ]
        },
        {
            icon: Cloud,
            title: 'E-commerce & Platforms',
            skills: [
                { name: 'BigCommerce', level: 98 },
                { name: 'QuickBooks', level: 85 },
                { name: 'Zoho CRM', level: 92 },
                { name: 'OpenAI/ChatGPT', level: 85 }
            ]
        },
        {
            icon: Palette,
            title: 'Development Tools',
            skills: [
                { name: 'Git/Version Control', level: 88 },
                { name: 'Postman/API Testing', level: 85 },
                { name: 'VS Code', level: 95 },
                { name: 'Composer', level: 90 }
            ]
        }
    ]

    const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
        <div className="space-y-2">
            <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </div>
    )

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Skills & <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary-600 rounded-lg">
                                    <category.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <SkillBar key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Familiar Technologies */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Familiar With</h3>
                        <p className="text-gray-600">Technologies I have experience with but don't use daily</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Vue.js', 'Express.js', 'Ruby', 'Docker', 'AWS',
                            'Socket.io', 'Redis', 'Bash', 'Node.js', 'Next.js'
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Core Competencies */}
                <div className="mt-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Focus Areas</h3>
                        <p className="text-gray-600">My primary areas of expertise and current focus</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Business Process Automation', 'E-commerce Integration', 'API Development',
                            'Data Synchronization', 'Workflow Optimization', 'System Integration',
                            'Performance Optimization', 'Process Analysis', 'Multi-platform Solutions',
                            'Automation Tools Development'
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 hover:border-primary-300 hover:bg-primary-100 transition-colors duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills 