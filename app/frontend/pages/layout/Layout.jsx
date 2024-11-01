import { Link } from '@inertiajs/react';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo and main navigation */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="text-xl font-bold text-indigo-600">
                                    Logo
                                </Link>
                            </div>
                            <div className="hidden md:block ml-10">
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href="/"
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Auth buttons */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-700"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}