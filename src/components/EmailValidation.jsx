import React, { useState } from 'react';

const EmailValidation = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.match(emailRegex)) {
            setErrorMessage('Invalid email format');
        } else {
            setErrorMessage('');
        }
    };

    // const inputClasses = errorMessage ? 'input-class input-error' : 'input-class';

    return (
        <div>
            <form action="" className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto">
                <div className='flex flex-col mt-2'>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                        placeholder="Enter your email"
                        className={errorMessage ? "input-class input-error" : "input-class"}
                        // className="w-full py-2 px-4 rounded shadow-lg text-sm border border-red-500 invalid"
                    />
                    <p className='h-2'>
                        <span className='text-red-400 text-sm'>{errorMessage}</span>
                    </p>
                </div>

                <button className="btn-red px-4 rounded py-2 shadow-lg md:w-40 text-sm">
                    Contact Us
                </button>

            </form>
        </div>
    )
}

export default EmailValidation