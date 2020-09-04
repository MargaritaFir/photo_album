import React, { memo } from 'react';
import './preloader.scss';

export const Preloader:React.FC = () => {

    return (
        <div className='preloader_container'>
            <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        
    )
}