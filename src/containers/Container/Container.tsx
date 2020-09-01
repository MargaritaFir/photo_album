import React, { useState, useEffect, useMemo, useCallback } from 'react';
import  SideBar from '../../containers/Sidebar/Sidebar';
import { URL, placeholder, notFoundElement } from '../../common/constants';
import UsersApi from '../../common/UsersApi';
import { IUserInfo, IPhotos, IAlbums } from '../../common/interfaces';
import { filterByName } from '../../common/utils/filters';
import Content from '../Content/Content';
import './container.scss';

const usersApi = new UsersApi(URL);

const Container:React.FC = () => {

    const [ users, setUsers ] = useState<IUserInfo[]>([]);
    const [ value, setValue ] = useState<string>('');
    const [ albums, setAlbums ] = useState<IAlbums[]>([]);
    const [ photos, setPhotos ] = useState<IPhotos[]>([]);

    const listItems = useMemo(() => filterByName(users, value), [users, value]);

    useEffect(() => {
        const fetchData = async() => {        
        const usersFetch = await usersApi.getUsers();
        setUsers(usersFetch);  
        }
        fetchData();
    }, []);

    const handleSelectAlbums = useCallback(async (id:number) => {
        const albums = await getAlbums(id);
        setAlbums(albums);
    }, [])


    const handleSelectPhotos = useCallback(async (id:number) => {
        const photos = await getPhotos(id);
        setPhotos(photos);
        console.log('id album', id)
    }, [])
  
  
    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
        console.log('value', value)
    }, []);
  
    const handleClearValue = useCallback( () => {
        setValue('');
    }, []);

    const getAlbums =(userId:number) => usersApi.getAlbums(userId);

    const getPhotos =(albumId:number) => usersApi.getPhotos(albumId);
    
    return (
        <div className="container">
            <SideBar 
                items={(value) ? listItems : users} 
                notFoundElement={notFoundElement} 
                onSelect={handleSelectAlbums} 
                placeholder={placeholder}
                onClear={handleClearValue}
                value={value}
                onChange={handleChange}
            />
            <Content albums={albums} onSelect={handleSelectPhotos} photos={photos} />
        </div>
    )
}

export default Container;