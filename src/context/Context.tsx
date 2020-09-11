import React, {useContext} from 'react'
import { SideBarStore, } from '../stores/SideBarStore';
import { URL } from '../common/constants';
import AlbumsGridStore from '../stores/AlbumsGridStore';
import PhotosGridStore from '../stores/PhotosGridStore';

import Api from '../common/Api';

const api = new Api(URL);

export const SideBarContext = React.createContext(new SideBarStore(api));
export const AlbumsGridContext = React.createContext(new AlbumsGridStore(api));
export const PhotosGridContext = React.createContext(new PhotosGridStore(api));


export const useSideBarContext = () => useContext(SideBarContext);
export const useAlbumsGridContext = () => useContext(AlbumsGridContext);
export const usePhotosGridContext = () => useContext(PhotosGridContext);
