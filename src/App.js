


import Navbar from './components/Ninja project/Navbar';
import Home from './components/Ninja project/Home';
import HomeAxios from './components/Ninja project/HomeAxios';



function App() {
  
 

return (
    <div className='App'>
      <Navbar/>
      <div className='content'>
{/* <Home/> */}
<HomeAxios/>

      </div>

    </div>

  );
}

export default App;
