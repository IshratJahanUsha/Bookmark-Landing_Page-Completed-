import React from 'react'

const BtnSecondery = ({ text }) => {
    return (
        <>
            <button className={`text-white bg-red-400 px-6 rounded-lg py-2 border-2 border-transparent 
            hover:text-red-400 hover:bg-white hover:border-red-400 transition-all`}>
                {text}
            </button>
        </>
    )
}

export default BtnSecondery