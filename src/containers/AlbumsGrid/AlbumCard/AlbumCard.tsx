import React from 'react';
import { observer } from 'mobx-react';
import  { Link } from "react-router-dom";
import { IAlbum } from '../../../common/interfaces';
import './albumCard.scss';

interface IProps {
    album: IAlbum;
    userId: string | null; 
}

const AlbumCard:React.FC<IProps> = ({ album, userId }) => {

    return(
        <Link to={`/photos?albumId=${album.id}&userId=${userId}`}>
            <div className="album" id={`album_${album.id}`} >
                <span>{album.title}</span>
            </div>
        </Link>
    )
}

export default observer(AlbumCard);