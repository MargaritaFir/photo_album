import React from 'react';
import './styles.scss';

interface IProps {
    message: React.ReactNode;
}

const EmptyContainer:React.FC<IProps> = ({ message }) => {
    return (
        <div className='empty_container'>
            <span> {message}</span>
        </div>
    )
}

export default EmptyContainer;