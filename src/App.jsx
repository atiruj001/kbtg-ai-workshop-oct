import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaymentForm from './PaymentForm'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logos */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
            <img src={reactLogo} className="h-16 w-16" alt="React logo" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4">PayFlow Demo</h1>
          <p className="text-lg text-green-50">
            Experience seamless payment processing with modern React components<br />
            and beautiful UI design
          </p>
        </div>
      </header>

      {/* Modern Payment Solutions Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Modern Payment Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Built with React and Vite for lightning-fast performance. Secure, responsive, and user-friendly payment forms that adapt to any device.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Secure Processing Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Processing</h3>
              <p className="text-gray-600 text-sm">
                End-to-end encryption ensures your payment data is always protected and secure.
              </p>
            </div>

            {/* Lightning Fast Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">
                Powered by Vite and React for instant load times and smooth interactions.
              </p>
            </div>

            {/* Mobile Ready Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile Ready</h3>
              <p className="text-gray-600 text-sm">
                Fully responsive design that works perfectly on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Interactive Demo</h2>
            
            <button 
              onClick={() => setCounter(counter + 1)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>✓</span>
              Click Counter: {counter}
            </button>
            
            <p className="text-gray-500 text-sm mt-6">
              Edit <code className="bg-gray-200 px-2 py-1 rounded text-xs">src/App.jsx</code> and see it live! Real-time HMR and Rerendered!
            </p>
          </div>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Try Our Payment Form</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience our beautifully designed payment form with real-time validation, secure input handling, and smooth animations.
          </p>
        </div>
        
        <PaymentForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* PayFlow Demo */}
            <div>
              <h3 className="text-white font-semibold mb-3">PayFlow Demo</h3>
              <p className="text-sm">
                A modern payment form app built with React, Vite, and Tailwind CSS. Showcasing best practices in UI/UX design.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-white font-semibold mb-3">Technologies</h3>
              <ul className="text-sm space-y-2">
                <li>⚡ React 18</li>
                <li>⚡ Vite</li>
                <li>⚡ Tailwind CSS</li>
                <li>⚡ Modern JavaScript</li>
              </ul>
            </div>

            {/* Learn More */}
            <div>
              <h3 className="text-white font-semibold mb-3">Learn More</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    React Docs
                  </a>
                </li>
                <li>
                  <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    Vite Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>✨ This is a demo form • For real payments • Use a real payment processor!</p>
            <p className="mt-2">
              🔒 <span className="text-green-400">Secured & Encrypted</span> • 
              ⚡ <span className="text-blue-400">Lightning Fast</span> • 
              📱 <span className="text-purple-400">Responsive Available</span>
            </p>
            <p className="mt-4">
              Built with ❤️ using modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
