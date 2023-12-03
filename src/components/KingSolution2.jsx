// import kings from '../Data/kings.json';
import King from './King';
import { useState,useEffect } from 'react';
import axios from 'axios';




function KingSolution2() {
    const [kings, setKings] = useState([]);
    const [filter, setFilter] = useState ("");

    function getData() {

        axios.get("https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json").then((response) => setKings(response.data) )

    }

    useEffect(() => {getData()}

    )



const kingComponents = [];

for (let king of kings) {
    
    if (filter.length === 0 || king.nm.toLowerCase().startsWith(filter.toLowerCase())) 

        kingComponents.push(

            <King
                key={king.nm + " " + king.yrs}
                country={king.cty}
                house={king.hse}
                name={king.nm}
                years={king.yrs}
            />)

    }




    function handleChange(event) {

        console.log ("Event:", event);
        console.log ("Target:", event.target);
        console.log ("Value", event.target.value);
        setFilter(event.target.value);

    }



return (<div>
    <h2> Kings and Queens</h2>
  
    
    <button onClick={() => getData()}> Search</button>

    <input  value ={filter} onChange={handleChange}/>

    {kingComponents}

</div>
)
    }


export default KingSolution2;