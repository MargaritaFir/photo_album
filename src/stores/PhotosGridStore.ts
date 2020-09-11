import { observable, computed } from 'mobx';
import { actionAsync, task } from "mobx-utils"
import { IPhoto } from '../common/interfaces';
import Api from '../common/Api';

class PhotosGridStore {

    public api:Api;

    constructor(api:Api){
        this.api = api;
    }

    @observable photos: IPhoto[] = []
    @observable isLoading = false;

    @computed get isEmpty() {
        return !this.photos.length;
    }

    @actionAsync 
    loadPhotos = async(albumId:number|string) => {

        try {
            this.isLoading = true;
            const photos = await task(this.api.getPhotos(albumId));
            this.photos = photos;         
        } catch (error) {
            console.log('Error: ', error);
        } finally {
            this.isLoading = false;
        }
    }
}

export default PhotosGridStore;