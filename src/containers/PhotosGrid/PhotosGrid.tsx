import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react';
import List from '../../components/List/List';
import { PhotosGridContext } from '../../context/Context';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import Preloader from '../../components/Preloader/Preloader';
import Button from '../../components/Button/Button';
import './styles.scss';
import { Link } from 'react-router-dom';


interface IProps {
    userId: string;
}

const PhotosGrid:React.FC<IProps> = ({ 
    userId,  
}) => {

    const { isEmpty, isLoading, photos } = useContext(PhotosGridContext);

    const renderItemCallBack = useCallback(photo => <div className="photo" key={photo.id} id={`photoItem_${photo.id}`}><span>{photo.title}</span></div> , []);

    
    return(
        <>
            <div className="button_container">  
                <Link to={`/albums?userId=${userId}`}>
                    <Button id={userId} text={'Go back to user\'s albums'}/>
                </Link> 
            </div>

            { isLoading && <Preloader/> }
            { !isLoading && isEmpty && <EmptyContainer message={'This album don\'t have photos!'}/> } 
            {
                !isLoading && 
                !isEmpty && (
                    <div className="photos">
                        <List items={photos} renderItem={renderItemCallBack} />    
                    </div>
            )}
        </>
        
    )
}

export default observer(PhotosGrid);