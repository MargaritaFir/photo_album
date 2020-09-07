import React, { memo } from 'react';
import { IAlbums } from '../../common/interfaces';
import AlbumCard from './AlbumCard/AlbumCard';
import './albums.scss';

interface IProps {
    albums: IAlbums[];
    onSelect: (id:number) => void;
}

const AlbumsGrid:React.FC<IProps> = ({albums, onSelect}) => {
    return(
        <div className="albums_grid">
            {albums.map(album => <AlbumCard key={album.id} album={album} onSelect={onSelect}/>)}
        </div>
    )
}

export default memo(AlbumsGrid);