import React from 'react'
import {SideBarStore, } from '../stores/SideBarStore';
import {URL} from '../common/constants';


export const StoreContext = React.createContext(new SideBarStore(URL));
