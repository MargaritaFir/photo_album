import React from 'react';
import './content.scss';
import {IPhoto, IAlbum} from '../../common/interfaces';
import AlbumsGrid from '../AlbumsGrid/AlbumsGrid';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';

interface IProps {
    albums: IAlbum[];
    photos:IPhoto[];
    onSelect: (id:number) => void;
}

const Content:React.FC<IProps> = ({albums, photos, onSelect}) => {

    return(
        <div className="content">
            {(albums.length) ? <AlbumsGrid albums={albums} onSelect={onSelect}/> : <EmptyContainer message={'Select a user from the list'}/>}
            
        </div>
    )
}

export default Content;