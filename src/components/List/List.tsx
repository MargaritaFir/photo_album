import React from 'react';

interface IProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: IProps<T>) {

    return (
        <React.Fragment>
            {props.items.map( (item)=> props.renderItem(item))}
        </React.Fragment>
    )
}

export default List;