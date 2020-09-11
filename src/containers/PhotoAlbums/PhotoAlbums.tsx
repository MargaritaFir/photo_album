import React, { useContext, useEffect }  from 'react';
import { observer } from 'mobx-react';
import { SideBarContext } from '../../context/Context';
import { placeholder, notFoundElement } from '../../common/constants';
import Content from '../Content/Content';
import  SideBar from '../Sidebar/Sidebar';
import './styles.scss';

const PhotoAlbums:React.FC = () => {

    const { loadUsers } = useContext(SideBarContext);

    useEffect(() => { 
        loadUsers(); 
    }, [loadUsers]);

    return (
        <div className="photo_albums">
            <SideBar 
                notFoundElement={notFoundElement} 
                placeholder={placeholder}
            />
            <Content/>
        </div>
    )
}

export default observer(PhotoAlbums);