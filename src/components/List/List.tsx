import React, { memo } from 'react';

interface IProps<T>{
    items: T[];
    renderItem: (item: T) => void;
}

function List<T>(props: IProps<T>): JSX.Element {

    return (
        <React.Fragment>
            {props.items.map(item => props.renderItem(item))}
        </React.Fragment>
    )
}

export default memo(List);