import React, {useCallback} from 'react';

interface IProps<T>{
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}


function List<T>(props: IProps<T>): JSX.Element {

    const renderItemCallback = useCallback(item => props.renderItem(item), [props])

    return (
        <React.Fragment>
            {props.items.map(renderItemCallback)}
        </React.Fragment>
    )
}

export default List;