import React from 'react';
import './content.scss';
import {IPhotos, IAlbums} from '../../common/interfaces';
import AlbumsGrid from '../../components/AlbumsGrid/AlbumsGrid';

interface IProps {
    albums: IAlbums[];
    photos:IPhotos[];
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