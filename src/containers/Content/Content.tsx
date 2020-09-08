import React from 'react';
import {IPhoto, IAlbum} from '../../common/interfaces';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import ContentRouter from '../ContentRouter/ContentRouter';
import './content.scss';

interface IProps {
    albums: IAlbum[];
    photos:IPhoto[];
    onSelect: (id:number) => void;
}


const Content:React.FC<IProps> = ({
    albums,
    photos,
    onSelect
}) => {

    return(
        <div className="content">
            {(albums.length || photos.length) ? <ContentRouter albums={albums} onSelect={onSelect} photos={photos} /> : <EmptyContainer message={'Select a user from the list'} /> }
        </div>
    )
}

export default Content;