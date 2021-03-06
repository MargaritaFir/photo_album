import React from 'react';
import './styles.scss';

const Preloader:React.FC = () => {
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

export default Preloader;