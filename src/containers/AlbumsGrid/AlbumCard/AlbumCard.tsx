import React from 'react';
import { observer } from 'mobx-react';
import  { Link } from "react-router-dom";
import { IAlbum } from '../../../common/interfaces';
import './albumCard.scss';

interface IProps {
    album: IAlbum;
}

const AlbumCard:React.FC<IProps> = ({ album }) => {

    return(
        <Link to={`/photos?albumId=${album.id}`}>
            <div className="album" id={`album_${album.id}`} >
                <span>{album.title}</span>
            </div>
        </Link>
    )
}

export default observer(AlbumCard);