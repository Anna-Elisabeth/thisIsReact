/* <h1>42 IS THE ANSWER TO EVERYTHING</h1>


////section goes above return for monkey component ---


console.log(monkeys);

  const monkeyComponents = [];

  for (const monkey of monkeys) {

    console.log("monkey:", monkeys);
    monkeyComponents.push(
      <Monkey breed={monkey.breed} size={monkey.size} averageLifeSpan={monkey.averageLifeSpan}/>
    )
  } ////

  <button onClick={() => alert ("Not all can teach")}>

clickyclicky

</button>


////
  <input type="text" />

  <h1>{text}</h1>

  <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>////

  goes with written above return:const x = 20;
  let text = "Goodbye";
  if (x < 10) {
    text = "Hello";
  }







      <h1>React is {5 * 5} times better with JSX</h1>

<h1 className="myclass">Hello World</h1>
      <KingSolution/>

      

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
       */

        function App() {
  
          const title = 'Welcome to the fabulous new bloggyblog';
          const likes = 50;
          const link = "http://www.google.com";
        
        
        
        return (
            <div className='App'>
              <Navbar/>
              <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{Math.random() * 10}</p>
        
        <a href={link} target="_blank" rel="noreferrer noopener">Google site</a>
              </div>
        
            </div>
        
          );
        }
        
        export default App;