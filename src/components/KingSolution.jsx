import kings from '../Data/kings.json';
import King from './King';
import { useState } from 'react';



function KingSolution() {
    const [filter, setFilter] = useState("");
    

    const kingComponents = [];

    for (const king of kings) {
        if (filter.length === 0 || king.nm.toLowerCase().startsWith(filter.toLowerCase())) 
        //if you want to see if it just includes something then use the .includes()
        
        {
            console.log(king);

            kingComponents.push(

                <King
                    key={king.nm + " " + king.yrs}
                    country={king.cty}
                    house={king.hse}
                    name={king.nm}
                    years={king.yrs}
                />
            )

        }

    }
        function handleChange(event) {

            console.log ("Event:", event);
            console.log ("Target:", event.target);
            console.log ("Value", event.target.value);
            setFilter(event.target.value);

        }
        return (<div>
            <h2> Kings and Queens</h2>
            <input type= "text" value ={filter} onChange={handleChange}/>






            
            {kingComponents}
        </div>
        )
    }


    export default KingSolution;