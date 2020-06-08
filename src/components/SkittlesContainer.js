import React, {useState, useEffect} from 'react';
import Skittle from './Skittle';

export default ({count}) => {
    const [skittleCount, setSkittleCount] = useState(0)
    useEffect(() => {
        setSkittleCount(count)
    },[count])

    const createSkittles = () => {
        const skittles = [];
        for(let i = 0; i < skittleCount; i++) {
            skittles.push(<Skittle />)
        }
        return skittles;
    }

    return(
        <div className="skittles_container">
            {createSkittles()}
        </div>
    )
}

