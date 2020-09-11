import React, { memo } from 'react';
import  { Link } from "react-router-dom";
import { IAlbum } from '../../../common/interfaces';
import './styles.scss';

interface IProps {
    albumId: IAlbum;
    userId: string; 
    title: string;
}

const AlbumCard:React.FC<IProps> = ({ albumId, userId, title }) => {

    return(
        <Link to={`/photos?userId=${userId}&albumId=${albumId}`}>
            <div className="album" id={`album_${albumId}`} >
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default memo(AlbumCard);