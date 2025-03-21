import React, { useState } from 'react';
import '../styles/style.css';
import { Login } from './Login';
import { Register } from './Register';
export const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>
            <header className="bg-gray-100 " id="header">
                <div className='grid h-30 grid-cols-3 content-center gap-4 flex-auto justify-between'>
                    <div>
                        <img src="src/assets/react.svg" alt="logo" className='ml-4'/>
                    </div>

                    <nav>
                        <ul className='inline-flex items-baseline gap-4'>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Contatti</li>
                            <li>Info</li>
                        </ul>
                    </nav>

                    <div className='space-x-2'>
                        <button type="button" onClick={() => setShowLogin(true)}>
                            Login
                        </button>
                        <button type="button" onClick={() => setShowRegister(true)}>
                            Register
                        </button>
                    </div>
                </div>
            </header>

            {/* Mostra il form login se showLogin è true */}
            {showLogin && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div>
                        <Login />
                        <div className="text-center mt-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowLogin(false)}>
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mostra il form Register se showLogin è true */}
            {showRegister && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div>
                        <Register />
                        <div className="text-center mt-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowRegister(false)}>
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
