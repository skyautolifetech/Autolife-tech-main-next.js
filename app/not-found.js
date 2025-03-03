import React from 'react'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
    <a 
      href="/" 
      className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
    >
      Go Home
    </a>
  </div>
  )
}

export default NotFoundPage
