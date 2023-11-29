import logo from './logo.svg';
import './App.css';
import Monkey from './components/Monkey';
import ManyButtons from './components/ManyButtons';
import monkeys from './Data/monkeys.json';
import Counter from './components/Counter';
import KingSolution from './components/KingSolution';



function App() {
  console.log(monkeys);

  const monkeyComponents = [];

  for (const monkey of monkeys) {

    console.log("monkey:", monkeys);
    monkeyComponents.push(
      <Monkey breed={monkey.breed} size={monkey.size} averageLifeSpan={monkey.averageLifeSpan}




      />
    )
  }




  return (
    <div className="App">
      <KingSolution/>

      {/* <h1>42 IS THE ANSWER TO EVERYTHING</h1>

      

      

        <Counter />
        <div>

     <h1>ALL ABOUT MONKIES</h1>


          <input placeholder='tell us what you like about monkeys'></input>

          {monkeyComponents}

          <Monkey breed=' Large Monkey' size=' Very Large' averagelifespan=' 200 years' />


          <img src="https://cdn.images.express.co.uk/img/dynamic/1/285x214/256851_1.jpg" width={550} ></img>

          <br></br>

        </div>

        <div>
          <h2>Little Piggies</h2>
          <ManyButtons />
        </div>
       */}


    </div>

  );
}

export default App;
