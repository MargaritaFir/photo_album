import React, { useContext, useEffect } from 'react';
import Input from '../../components/Input/Input';
import UsersList from '../../components/UsersList/UsersList';
import './sidebar.scss';
import Preloader from '../../components/Preloader/Preloader';
import NotFoundItem from '../../components/NotFoundItem/NotFoundItem';
import { observer } from 'mobx-react';
import { SideBarContext } from '../../context/Context'

interface IProps {
    notFoundElement:string;
    placeholder: string;
};

const SideBar:React.FC<IProps> = ({ 
    notFoundElement,
    placeholder, 
}) => {

    const sideBarContext = useContext(SideBarContext);

    const { loadUsers, filterValue, setFilterValue, users, selectUser, selectedUserId, setClearValue, isLoading, isEmpty } = sideBarContext;

    useEffect(() => { 
        loadUsers(); 
    }, [loadUsers]);

    return(
        <nav className="sidebar">
            <Input
                onChange={setFilterValue} 
                value={filterValue}
                onClear={setClearValue}
                placeholder={placeholder}
            />
            <div className="sidebar_list_container">
                { isLoading ?  
                    <Preloader/> : 
                    (!isEmpty) ? 
                        <UsersList items={users} onSelect={selectUser} selectedItemId={selectedUserId} /> : 
                            <NotFoundItem notFoundElement={notFoundElement}/> 
                }   
            </div>
        </nav>       
    )
}

export default observer(SideBar);