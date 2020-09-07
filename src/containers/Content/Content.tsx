import React from 'react';
import './content.scss';
import {IPhoto, IAlbum} from '../../common/interfaces';
import AlbumsGrid from '../AlbumsGrid/AlbumsGrid';

interface IProps {
    albums: IAlbum[];
    photos:IPhoto[];
    onSelect: (id:number) => void;
}

const Content:React.FC<IProps> = ({albums, photos, onSelect}) => {

    return(
    <div className="content">
        <AlbumsGrid albums={albums} onSelect={onSelect}/>
    </div>
    )
}

export default Content;