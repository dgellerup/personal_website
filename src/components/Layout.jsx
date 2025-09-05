import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen">
        <Navbar />
            <main className="max-w-5xl mx-auto w-full px-4 pt-4 pb-10"> {/* pt-16 clears fixed nav */}
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}