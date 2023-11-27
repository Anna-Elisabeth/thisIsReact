import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>What am I doing?</h1>
      <h2>I wish this were easier</h2>
      <h3>I hate Mondays</h3>

      <body>

        <div>
          <h1>My Lovely Components</h1>






          <h2>Subheading 1</h2>
          <h3>Subheading 2</h3>
          <h4>Section 1</h4>
          <h5>Section 2</h5>
          <h6>Section 3</h6>
        </div>
        <section>
          <h3>Unordered list</h3>
          <ul>
            <li>time</li>
            <li>fame</li>
            <li>money</li>
          </ul>


        </section>
        <button>DO NOT CLICK ME</button>
        <div>

          <p>Blahblah</p>
        </div>
        <div>
          <table>
            <thead>
              <caption>A sample of our lovely courses</caption>

              <tr>
                <th>Course Title</th>
                <th>Course Subject</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AWS Technical Essentials</td>
                <td>Technical IT</td>
                <td>1 day</td>
                <td>£495</td>
              </tr>
              <tr>
                <td>Configuring and Deploying a Private Cloud</td>
                <td>Technical IT</td>
                <td>5 days</td>
                <td>£2066</td>
              </tr>
              <tr>
                <td>PRINCE2 Foundation</td>
                <td>Project Management</td>
                <td>2 days</td>
                <td>£898</td>
              </tr>
              <tr>
                <td>Brilliant Virtual Delivery</td>
                <td>Leadership & Management</td>
                <td>2 days</td>
                <td>£1362</td>
              </tr>

            </tbody>

          </table>

          <div>

            <h1>I'm talking to you!</h1>
            <p>It's time to confess.</p>

            <input placeholder = 'tell us what you like about monkeys'></input>
            <br></br>

            <img src="https://cdn.images.express.co.uk/img/dynamic/1/285x214/256851_1.jpg"></img>

            <br></br>

            <a href="./courses.txt">working very hard or something random to click on </a>

          </div>

        </div>
        <div>

          <p>Blahblah</p>


        </div>


        <section>

          <button>bootorain</button>



        </section>
      </body>









      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

export default App;
