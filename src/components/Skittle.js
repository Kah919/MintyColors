import React, {useState, useEffect} from 'react';
import ColorScheme from 'color-scheme';
const useInterval = (callback, delay) => {
    const savedCallback = React.useRef();
  
    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    React.useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

export default () => {
    const [colorArray, setColorArray] = useState([]);
    let [curr, setCurr] = useState(0);
    const [shouldChange, setShouldChange] = useState(true);

    useEffect(() => {
        let scheme = new ColorScheme;
        scheme.from_hue(21).scheme('triade').variation('soft');

        let color = scheme.colors();
        setColorArray(color);
        setShouldChange(false);

    }, shouldChange);
    
    useInterval(() => {
        const end = colorArray.length - 1;
        if(curr !== end) {
            setCurr(curr++);
        } else {
            setCurr(0);
        }
    }, 500)

    console.log(colorArray)

    return(
        <div className="skittle_container">
            <div className="skittle" style={{backgroundColor: `#${colorArray[curr]}`}}></div>
        </div>
    )
}