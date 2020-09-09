import React from 'react';
import  SideBar from '../Sidebar/Sidebar';
import { placeholder, notFoundElement } from '../../common/constants';
import Content from '../Content/Content';
import './photoAlbums.scss';


const PhotoAlbums:React.FC = () => {

    return (
        <div className="photo_albums">
            <SideBar 
                notFoundElement={notFoundElement} 
                placeholder={placeholder}
            />
            <Content/>
        </div>
    )
}

export default PhotoAlbums;