import React, { useState } from 'react';

const EmailValidation = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.match(emailRegex)) {
            setErrorMessage('Whoops, make sure its an email.');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <div>
            <form onSubmit={validateEmail} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto">
                <div className='flex flex-col mt-2 relative'>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className={`text-sm w-full py-2 px-4 outline-none border-2 rounded-t
                         ${errorMessage ? "border-red-500" : "border-transparent"}`}
                    />
                    <p className="text-white bg-red-500 text-sm px-2 w-full rounded-b">
                        {errorMessage}
                    </p>
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-400">

                    </span>
                </div>

                <button type="submit" className="btn-red px-4 py-2 rounded mt-2 md:mt-0 shadow-lg md:w-40 text-sm">
                    Contact Us
                </button>

            </form>
        </div>
    )
}

export default EmailValidation
