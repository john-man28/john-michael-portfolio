import React from 'react'
import { User, MapPin, Calendar, Gamepad2 } from 'lucide-react'

const About = () => {
    const stats = [
        { icon: Calendar, label: 'Years in Tech', value: '2+' },
        { icon: Gamepad2, label: 'Automation Projects', value: '10+' },
        { icon: User, label: 'Efficiency Increase', value: '100X' },
        { icon: MapPin, label: 'Based in', value: 'Philippines' },
    ]

    return (
        <section id="about" className="py-20 bg-white">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                About <span className="text-gradient">Me</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    I'm a career shifter who transitioned from Mechanical Engineering to Software Development.
                                    With a BS in Mechanical Engineering from Holy Angel University and experience as an
                                    Equipment Engineer at Texas Instruments, I bring a unique analytical mindset to software development.
                                </p>
                                <p>
                                    I specialize in building robust server-side applications, automation tools, and catalog management systems
                                    using Laravel, PHP, and integration platforms like Zoho Flow and Make (Integromat). My full stack capabilities
                                    allow me to create complete solutions that have increased operational efficiency by up to 100X.
                                </p>
                                <p>
                                    My engineering background gives me a strong foundation in process optimization and
                                    analytical problem-solving, which I leverage to create robust, scalable software solutions
                                    that streamline business operations.
                                </p>
                            </div>
                        </div>

                        {/* Skills Summary */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What I Do</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Backend Development</h4>
                                        <p className="text-gray-600">PHP, Laravel, CodeIgniter, Ruby</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Frontend Development</h4>
                                        <p className="text-gray-600">HTML, CSS, JavaScript, React.js, Vue.js</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Automation & Integration</h4>
                                        <p className="text-gray-600">Zoho Flow, Make (Integromat), Zoho CRM, Git</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Process Optimization</h4>
                                        <p className="text-gray-600">Workflow streamlining, Analytical Problem-Solving</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center card-hover"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="p-3 bg-primary-600 rounded-lg">
                                            <stat.icon size={24} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Personal Info */}
                        <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin size={20} className="text-primary-600" />
                                    <span className="text-gray-700">Based in Philippines</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <User size={20} className="text-primary-600" />
                                    <span className="text-gray-700">Available for Freelance</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Gamepad2 size={20} className="text-primary-600" />
                                    <span className="text-gray-700">Gamer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About 