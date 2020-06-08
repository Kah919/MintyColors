import React, { useState } from 'react';
import Message from './Message/Message';

export default () => {
    const [count, setCount] = useState(0)

    return(
        <Message />
    )
}