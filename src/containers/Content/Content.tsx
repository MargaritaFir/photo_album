import React from 'react';
import './content.scss';
import {IPhotos, IAlbums} from '../../common/interfaces';
import Albums from '../../components/Albums/Albums';

interface IProps {
    albums: IAlbums[];
    photos:IPhotos[];
    onSelect: (id:number) => void;
}

const Content:React.FC<IProps> = ({albums, photos, onSelect}) => {

    return(
    <div className="content">
        <Albums albums={albums} onSelect={onSelect}/>
    </div>
    )
}

export default Content;