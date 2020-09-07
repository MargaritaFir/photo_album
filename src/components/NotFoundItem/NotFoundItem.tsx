import React from 'react';
import './notFoundItem.scss';

interface IProps {
    notFoundElement: React.ReactNode;
}

const NotFoundItem:React.FC<IProps> = ( { notFoundElement } ) => <div className="not_found"> <span>{notFoundElement}</span></div>;

export default NotFoundItem;