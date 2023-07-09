import React, { useState } from 'react';
import { PiWarningCircleFill } from 'react-icons/pi';

const EmailValidation = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.match(emailRegex)) {
            setErrorMessage('Whoops, make sure it’s an email.');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <>
            <form onSubmit={validateEmail} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto">
                <div className='flex items-center flex-col mt-1 relative'>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className={`text-sm w-full py-2 px-4 outline-none border-2
                         ${errorMessage ? "border-red-500 rounded-t" : "border-transparent rounded"}`}
                    />
                    <p className="text-white bg-red-500 text-sm px-2 w-full rounded-b">
                        {errorMessage}
                    </p>

                    {errorMessage && (
                        <span className="absolute top-[0.65rem] right-2 transform translate-x-[-50%]">
                            <PiWarningCircleFill className="text-red-500 bg-white h-5 w-5" />
                        </span>
                    )}

                </div>

                <button type="submit" className={`btn-red px-4 py-2 rounded shadow-lg md:w-40 text-sm text-sm mt-2 md:mt-0 ${errorMessage ? "md:mb-4" : "md:mb-0"}`}>
                    Contact Us
                </button>
            </form>
        </>
    )
}

export default EmailValidation
