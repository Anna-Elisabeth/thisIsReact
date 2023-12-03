import { useState } from 'react';
import axios from 'axios';


function CatFacts(){

    const [fact, setFact] = useState("");

function getFact() {

axios.get("https://catfact.ninja/fact").then ((response) => setFact (response.data.fact))

    setFact("Some fact about cats")

}


return (

<div>
    <h1>Miawzers</h1>

   <p> {fact} </p>

    <button onClick={()=> getFact()} > Get Fact </button>
    </div>
)

}

export default CatFacts;

