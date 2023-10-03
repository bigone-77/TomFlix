import React from 'react'

const Button = ({ label, Icon, onClick }) => {
    return (
        <button 
            className='relative w-[120px] px-2 py-3 transition-opacity rounded-md bg-sky-500 hover:opacity-80 cursor-pointer'
            onClick={onClick}
        >
                {Icon && 
                    <Icon 
                        size={24}
                        className='absolute left-2 '
                    />
                }
            {label}
        </button>
    )
}

export default Button