import React from 'react'
import { SideBarStore, } from '../stores/SideBarStore';
import { URL } from '../common/constants';
import AlbumsGridStore from '../stores/AlbumsGridStore';
import PhotosGridStore from '../stores/PhotosGridStore';

export const SideBarContext = React.createContext(new SideBarStore(URL));
export const AlbumsGridContext = React.createContext(new AlbumsGridStore(URL));
export const PhotosGridContext = React.createContext(new PhotosGridStore(URL));
