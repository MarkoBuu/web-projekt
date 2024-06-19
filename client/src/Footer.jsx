import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="py-4 px-8 bg-gray-700 text-white">
            <footer className="flex justify-between">
                    <Link to="/" className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"/>
                        </svg>
                        <span className="font-bold text-xl">
                            BugStation
                        </span>
                        <span className="text-sm">
                            &copy; 2024 BugStation. All rights reserved.
                        </span>
                    </Link>
            <div className="flex items-center gap-2 py-2 px-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 2.01h-3a4 4 0 0 0-4 4V9H8v3.99h3V22h4.01v-8.99H19l.7-4H15V6a.999.999 0 0 1 1.02-1h1.98V2.01z"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.5 6.17a8.41 8.41 0 0 1-2.5.69 4.33 4.33 0 0 0 1.88-2.38 8.66 8.66 0 0 1-2.76 1.05A4.3 4.3 0 0 0 15.08 5c-2.37 0-4.3 1.95-4.3 4.35 0 .34.03.68.1 1A12.25 12.25 0 0 1 3 5.48a4.38 4.38 0 0 0-.58 2.18 4.35 4.35 0 0 0 1.92 3.6 4.21 4.21 0 0 1-1.95-.54v.06c0 2.08 1.47 3.8 3.41 4.2a4.32 4.32 0 0 1-1.94.07 4.34 4.34 0 0 0 4.05 3.02A8.67 8.67 0 0 1 2 19.79 12.23 12.23 0 0 0 8.29 21.5c7.46 0 11.55-6.25 11.55-11.68 0-.18-.01-.36-.02-.54a8.3 8.3 0 0 0 2.05-2.11z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zM16.5 3A4.5 4.5 0 0 1 21 7.5h0A4.5 4.5 0 0 1 16.5 12 4.5 4.5 0 0 1 12 7.5 4.5 4.5 0 0 1 16.5 3zM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    );
}
