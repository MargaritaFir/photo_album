import React from 'react';
import { observer } from 'mobx-react';
import  { Link } from "react-router-dom";
import { IAlbum } from '../../../common/interfaces';
import './styles.scss';

interface IProps {
    album: IAlbum;
    userId: string; 
}

const AlbumCard:React.FC<IProps> = ({ album, userId }) => {

    return(
        <Link to={`/photos?userId=${userId}&albumId=${album.id}`}>
            <div className="album" id={`album_${album.id}`} >
                <span>{album.title}</span>
            </div>
        </Link>
    )
}

export default observer(AlbumCard);