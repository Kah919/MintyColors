import React from 'react';

export default props => {
    return(
        <form>
            <label>
                How many skittles would you like to make?
                <input type="number" onChange={props.skittleCount} />
            </label>
        </form>
    )
}