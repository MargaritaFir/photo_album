import React, { memo, useCallback } from 'react';
import { IAlbum } from '../../common/interfaces';
import AlbumCard from './AlbumCard/AlbumCard';
import './albums.scss';
import List from '../../components/List/List';

interface IProps {
    albums: IAlbum[];
    onSelect: (id:number) => void;
}

const AlbumsGrid:React.FC<IProps> = ({albums, onSelect}) => {

    const handleRenderItem = useCallback(album => <AlbumCard key={album.id} album={album} onSelect={onSelect}/>, [onSelect]);

    return(
        <div className="albums_grid">
            <List<IAlbum> items={albums} renderItem={handleRenderItem}/>
        </div>
    )
}

export default memo(AlbumsGrid);