"use client";

export default function CreditFooter() {
    return (
        <footer className="bg-black text-gray-400 py-6 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left - Brand */}
                <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-base">
                    <span className="text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Trusty
                    </span>
                    <span className="text-lg text-secondary ml-1">Vision</span>
                </div>

                {/* Right - Links */}
                <div className="flex gap-6 text-sm">
                    <a
                        href="/privacy-policy"
                        className="hover:text-indigo-500 transition duration-300"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms-of-service"
                        className="hover:text-indigo-500 transition duration-300"
                    >
                        Terms of Service
                    </a>
                    {/* <a
                        href=""
                        className="hover:text-indigo-500 transition duration-300"
                    >
                        Contact
                    </a> */}
                    <a
                        href="#consultation"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default jump
                            const element = document.getElementById('consulationForm');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="hover:text-indigo-500 transition duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Copyright + Developer Credit */}
            <div className="mt-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Trusty Vision. All Rights Reserved.
                <br />
                Developed with ❤️ by{" "}
                <a
                    href="https://www.jeeshanportfolio.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-white font-medium transition duration-300"
                >
                    Jeeshan
                </a>
            </div>


        </footer>
    );
}
