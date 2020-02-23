import React from 'react';


export default props => {
    const Tag = props.type === 'body' ? 'td' : 'th';
    const tagProps = {};

    if(props.onClick !== undefined)
    {
        tagProps.onClick = props.onClick;
    }

    return (
        <Tag  {...tagProps}>
            {props.children}
        </Tag>
    )
}




