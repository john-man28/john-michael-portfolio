import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL('https://john-michael-portfolio.vercel.app'),
    title: 'John Michael T. Manlapaz - Full Stack Developer Portfolio',
    description: 'Full Stack Developer with backend focus. Career shifter from Mechanical Engineering to Software Development. Experienced in Laravel, PHP, React, and automation tools.',
    keywords: ['portfolio', 'full stack developer', 'backend developer', 'John Michael Manlapaz', 'Laravel', 'PHP', 'React', 'automation', 'mechanical engineer', 'career shifter'],
    authors: [{ name: 'John Michael T. Manlapaz' }],
    openGraph: {
        title: 'John Michael T. Manlapaz - Full Stack Developer Portfolio',
        description: 'Full Stack Developer with backend focus. Career shifter from Mechanical Engineering to Software Development. Experienced in Laravel, PHP, React, and automation tools.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'John Michael T. Manlapaz - Full Stack Developer Portfolio',
        description: 'Full Stack Developer with backend focus. Career shifter from Mechanical Engineering to Software Development. Experienced in Laravel, PHP, React, and automation tools.',
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
                <div className="relative">
                    {children}
                </div>
            </body>
        </html>
    )
} 