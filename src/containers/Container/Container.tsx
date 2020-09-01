import React, { useState, useEffect, useMemo, useCallback } from 'react';
import  SideBar from '../../containers/Sidebar/Sidebar';
import { URL, placeholder, notFoundElement } from '../../common/constants';
import UsersApi from '../../common/UsersApi';
import { IUserInfo } from '../../common/interfaces';
import { filterByName } from '../../common/utils/filters';

const usersApi = new UsersApi(URL);

const Container:React.FC = () => {

    const [ users, setUsers ] = useState<IUserInfo[]>([]);
    const [ value, setValue ] = useState<string>('');
    const listItems = useMemo(() => filterByName(users, value), [users, value]);
  
    useEffect(() => {
      const fetchData = async() => {        
          const usersFetch = await usersApi.getUsers();
          setUsers(usersFetch);  
      }
      fetchData();
  }, []);
  
    const handleSelect = useCallback((id:number) => {
      console.log('id', id)
    }, [])
  
  
    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
        console.log('value', value)
    }, []);
  
    const handleClearValue = useCallback( () => {
        setValue('');
    }, []);
    
    return (

        <SideBar 
            items={(value) ? listItems : users} 
            notFoundElement={notFoundElement} 
            onSelect={handleSelect} 
            placeholder={placeholder}
            onClear={handleClearValue}
            value={value}
            onChange={handleChange}
        />
    )
}

export default Container;