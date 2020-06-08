import React, { useState } from 'react';
import Message from './Message';
import SkittlesContainer from './SkittlesContainer';

export default () => {
    const [count, setCount] = useState(0);

    const skittleCount = event => {
        console.log(`We making ${event.target.value} skittles!`);
        setCount(event.target.value);
    }


    return(
        <div>
            <Message skittleCount={skittleCount} />
            <SkittlesContainer count={count}/>
        </div>
    )
}