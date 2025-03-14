import React from 'react';
import '../styles/style.css';

export const Header = () => {
    return(
        <header className=" bg-gray-200" id="header">
            <div className='grid h-30 grid-cols-3 content-center gap-4 flex-auto justify-between'>
                <div>
                    <img src="src\assets\react.svg" alt="logo" className='ml-4'/>
                </div>
    
                <nav className="">
                    <ul className='inline-flex items-baseline gap-4'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Contatti</li>
                        <li>Info</li>
                    </ul>
                </nav>

                <div className='space-x-2'>
                    <button>
                        <a href="">Login</a>
                    </button>
                    <button>
                        <a href="">Register</a>
                    </button>
                </div>
                
            </div>            
        </header>
    )
}