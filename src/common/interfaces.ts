export interface IItem {
    id: number,
    name: string,
};

export interface IUserAddress {
    street: string,
    suite: string,
    city: string 
};

export interface ICompany {
    bs: string,
    catchPhrase: string,
    name: string 
};

export interface IUserInfo {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddress,
    phone: string,
    website: string,
    company: ICompany
};

export interface IAlbum {
    id: number;
    userId: number;
    title: string;
}

export interface IPhoto {
    id: number;
    albumId: number;
    title: string;
    thumbnailUrl: string;
}

