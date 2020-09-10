import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react';
import List from '../../components/List/List';
import { PhotosGridContext } from '../../context/Context';
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer';
import Preloader from '../../components/Preloader/Preloader';
import Button from '../../components/Button/Button';
import './styles.scss';


interface IProps {
    userId: string | null;
    onClickReturn: (userId: string) => void
}

const PhotosGrid:React.FC<IProps> = ({ 
    userId, 
    onClickReturn 
}) => {

    const { isEmpty, isLoading, photos } = useContext(PhotosGridContext);

    const renderItemCallBack = useCallback(photo => <div className="photo" key={photo.id} id={`photoItem_${photo.id}`}><span>{photo.title}</span></div> , []);

    const onClickButtonCallback = useCallback(() => {
        if(userId) onClickReturn(userId)
    }, [userId, onClickReturn] )
    
    return(
        <div className="photos">
            { userId && <Button id={userId} onClick={onClickButtonCallback}> Return by albums</Button> }
            { 
                (isLoading) ? 
                    <Preloader/> : 
                        (!isEmpty) ? 
                            <List items={photos} renderItem={renderItemCallBack} />: 
                                <EmptyContainer message={'This album don\'t have photos'}/> 
            }
        </div>
    )
}

export default observer(PhotosGrid);