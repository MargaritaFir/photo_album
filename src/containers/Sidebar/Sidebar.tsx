import React from 'react';
import './sidebar.scss';
import Input from '../../components/Input/Input';


export const SideBar:React.FC<any> = ({users}) => {
    return(
        <>
            <div className="sidebar">
                <Input/>
                <div className="sidebar_items">
                    {users.length && users.map((user:any) => <a key={user.id} href={`#/${user.id}`}>{user.name}</a>)}
                </div>
            </div>
        </>       
    )
}