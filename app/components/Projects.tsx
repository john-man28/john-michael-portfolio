'use client'

import React, { useState } from 'react'
import { ExternalLink, Github, Folder, ChevronLeft, ChevronRight, X } from 'lucide-react'

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
    const [modalOpen, setModalOpen] = useState(false)
    const [modalProject, setModalProject] = useState<number | null>(null)
    const [modalImageIndex, setModalImageIndex] = useState(0)

    const nextImage = (projectIndex: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
        }))
    }

    const prevImage = (projectIndex: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
        }))
    }

    const setImageIndex = (projectIndex: number, imageIndex: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectIndex]: imageIndex
        }))
    }

    const openModal = (projectIndex: number, imageIndex: number) => {
        setModalProject(projectIndex)
        setModalImageIndex(imageIndex)
        setModalOpen(true)
        document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    const closeModal = () => {
        setModalOpen(false)
        setModalProject(null)
        document.body.style.overflow = 'unset' // Restore scrolling
    }

    const nextModalImage = () => {
        if (modalProject !== null) {
            const totalImages = projects[modalProject].images.length
            setModalImageIndex((modalImageIndex + 1) % totalImages)
        }
    }

    const prevModalImage = () => {
        if (modalProject !== null) {
            const totalImages = projects[modalProject].images.length
            setModalImageIndex((modalImageIndex - 1 + totalImages) % totalImages)
        }
    }
    const projects = [
        {
            title: 'Price Update Tool',
            description: 'Automates pricing updates by matching BigCommerce SKUs with vendor CSVs, highlights new/discontinued items. Increased pricing efficiency by 100X through intelligent SKU matching and automated price synchronization.',
            images: [
                { src: '/screenshots/priceupdate_tool_main.jpg', title: 'Main Dashboard' },
                { src: '/screenshots/priceupdate_tool_upload.jpg', title: 'CSV Upload Interface' },
                { src: '/screenshots/priceupdate_tool_matches.jpg', title: 'Price Comparison View' },
                { src: '/screenshots/priceupdate_tool_discontinued.jpg', title: 'Discontinued Items' },
                { src: '/screenshots/priceupdate_tool_new.jpg', title: 'New Items' }
            ],
            technologies: ['Laravel', 'React', 'BigCommerce API', 'CSV Processing'],
            github: '', // Proprietary business tool - code not shareable
            highlights: ['100X efficiency increase', 'Automated SKU matching', 'Real-time price updates']
        },
        {
            title: 'Inventory Management Automation',
            description: 'Routes vendor inventory emails into a flow that updates SKU levels in BigCommerce automatically. Streamlines inventory management processes through intelligent email parsing and automated stock updates.',
            images: [
                { src: '/screenshots/zoho_flow_inventory.jpg', title: 'Inventory Management Automation Results' },
                { src: '/screenshots/zoho_flow_setup.jpg', title: 'Inventory Management Automation Setup' },
            ],
            technologies: ['Zoho Flow', 'Zoho WorkDrive', 'BigCommerce API', 'Email Parsing'],
            github: '', // Zoho Flow configurations - proprietary
            highlights: ['Email-based automation', 'Real-time inventory sync', 'Multi-vendor support']
        },
        {
            title: 'Order Management System',
            description: 'Centralizes Zoho CRM, QuickBooks, and BigCommerce operations in a single custom application. Complete business workflow automation that connects all major business systems into one unified interface.',
            images: [
                { src: '/screenshots/oms_main_dashboard.jpg', title: 'Main Dashboard' },
                { src: '/screenshots/oms_so_dashboard.jpg', title: 'Sales Order Lists' },
                { src: '/screenshots/oms_so_detail.jpg', title: 'Sales Order Details' },
                { src: '/screenshots/oms_commisions.jpg', title: 'Sales Commission' }
            ],
            technologies: ['Zoho Creator', 'Zoho CRM', 'QuickBooks API', 'BigCommerce'],
            github: '', // Contains proprietary business logic and API keys
            highlights: ['Multi-system integration', 'Unified dashboard', 'Workflow automation']
        }
    ]

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Automation tools and web applications I've built to streamline business operations
                    </p>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                        >
                            {/* Project Screenshots Carousel */}
                            <div className="lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                    <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        {/* Main Image Display */}
                                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative cursor-pointer group">
                                            {project.images.length > 0 ? (
                                                <>
                                                    <img
                                                        src={project.images[currentImageIndex[index] || 0]?.src}
                                                        alt={project.images[currentImageIndex[index] || 0]?.title || 'Project Screenshot'}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        onClick={() => openModal(index, currentImageIndex[index] || 0)}
                                                        onError={(e) => {
                                                            // Fallback to placeholder if image fails to load
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = 'none';
                                                            target.nextElementSibling?.classList.remove('hidden');
                                                        }}
                                                    />
                                                    <div className="text-center hidden">
                                                        <Folder size={48} className="text-gray-500 mx-auto mb-2" />
                                                        <p className="text-gray-600 text-sm font-medium">
                                                            {project.images[currentImageIndex[index] || 0]?.title || 'Screenshot'}
                                                        </p>
                                                        <p className="text-gray-500 text-xs mt-1">
                                                            Image not found
                                                        </p>
                                                    </div>

                                                    {/* Click to zoom overlay */}
                                                    <div
                                                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                                                        onClick={() => openModal(index, currentImageIndex[index] || 0)}
                                                    >
                                                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110 transition-transform duration-200">
                                                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    {/* Navigation Arrows */}
                                                    {project.images.length > 1 && (
                                                        <>
                                                            <button
                                                                onClick={() => prevImage(index, project.images.length)}
                                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                                                            >
                                                                <ChevronLeft size={20} />
                                                            </button>
                                                            <button
                                                                onClick={() => nextImage(index, project.images.length)}
                                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                                                            >
                                                                <ChevronRight size={20} />
                                                            </button>
                                                        </>
                                                    )}
                                                </>
                                            ) : (
                                                <div className="text-center">
                                                    <Folder size={48} className="text-gray-500 mx-auto mb-2" />
                                                    <p className="text-gray-600 text-sm">No screenshots available</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Thumbnail Navigation */}
                                        {project.images.length > 1 && (
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {project.images.map((_, imgIndex) => (
                                                    <button
                                                        key={imgIndex}
                                                        onClick={() => setImageIndex(index, imgIndex)}
                                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${(currentImageIndex[index] || 0) === imgIndex
                                                            ? 'bg-white'
                                                            : 'bg-white/50 hover:bg-white/75'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {/* Image Counter */}
                                        {project.images.length > 1 && (
                                            <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                                                {((currentImageIndex[index] || 0) + 1)} / {project.images.length}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="lg:w-1/2 space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                                </div>

                                {/* Key Highlights */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* GitHub Link - Only show if available */}
                                <div className="pt-4 flex gap-4">
                                    {project.github && project.github.trim() !== '' ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 group"
                                        >
                                            <Github size={20} />
                                            <span>View on GitHub</span>
                                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                                        </a>
                                    ) : (
                                        <div className="inline-flex items-center gap-3 bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                                            <Github size={20} />
                                            <span>Proprietary Code</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                {/* <div className="text-center mt-16">
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in More?</h3>
                        <p className="text-gray-600 mb-6">Check out my GitHub profile for additional projects and contributions</p>
                        <a
                            href="https://github.com/johnmichaelmanlapaz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            <Github size={20} />
                            Visit GitHub Profile
                        </a>
                    </div>
                </div> */}
            </div>

            {/* Image Modal */}
            {modalOpen && modalProject !== null && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{projects[modalProject].title}</h3>
                                <p className="text-gray-600">{projects[modalProject].images[modalImageIndex]?.title}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            >
                                <X size={24} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Modal Image */}
                        <div className="relative flex-1 flex items-center justify-center p-6">
                            <img
                                src={projects[modalProject].images[modalImageIndex]?.src}
                                alt={projects[modalProject].images[modalImageIndex]?.title || 'Project Screenshot'}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                            />

                            {/* Modal Navigation Arrows */}
                            {projects[modalProject].images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevModalImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg p-3 rounded-full transition-all duration-200 hover:scale-110"
                                    >
                                        <ChevronLeft size={24} className="text-gray-700" />
                                    </button>
                                    <button
                                        onClick={nextModalImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg p-3 rounded-full transition-all duration-200 hover:scale-110"
                                    >
                                        <ChevronRight size={24} className="text-gray-700" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Modal Footer */}
                        {projects[modalProject].images.length > 1 && (
                            <div className="p-6 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {projects[modalProject].images.map((_, imgIndex) => (
                                            <button
                                                key={imgIndex}
                                                onClick={() => setModalImageIndex(imgIndex)}
                                                className={`w-3 h-3 rounded-full transition-all duration-200 ${modalImageIndex === imgIndex
                                                    ? 'bg-primary-600'
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-600 text-sm">
                                        {modalImageIndex + 1} / {projects[modalProject].images.length}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects 