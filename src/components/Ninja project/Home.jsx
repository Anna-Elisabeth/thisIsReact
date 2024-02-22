
import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import axios from "axios"; 

const Home = () => {
 const [blogs, setBlogs] = useState (null);
 const [isLoading, setIsLoading] = useState (true);
 const [error, setError] =useState (null);

    
    

    useEffect(() => {
        setTimeout(() =>{
         fetch('http://localhost:8000/blogs')
        .then(res =>{
            if(!res.ok){
                throw Error('Apologies, we could not fetch the requested data')
            }
          return res.json();
        })
.then(data => {

    setBlogs(data);
    setIsLoading(false);
    setError(null);
})
.catch(err => {
    setError(err.message);
    setIsLoading(false);
   
})
    }, 1000);
    }, []// Empty dependency array -without this useEffect will run every time state changes -eg - when blog is deleted
//or you can set dependencies to state when useEffect hook will be used eg [handleDelete]
    );



    return(
        <div className="home">
            {error && <div>{error}</div>}
        {/* conditional templating in react- blogs evaluates to true and then bloglist WILL output.  */}
           {isLoading  && <div>Page is Loading...</div>}
       {blogs && <BlogList blogs={blogs} title={'All Blogs!'}/>}
    
        </div>
    );
}

export default Home;















// const Home = () => {
//     // let name = 'Frisky';
//     const [name, setName] = useState('Frisky');
//     const [age, setAge]= useState(25);

//     const handleClick = () => {
//       setName('Baggins');
//       setAge(30);
//     }

//     // const handleClickAgain = (name, e) => {
//     //     console.log('hello' + name, e.target);
//     // };
//     return(
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old</p>
//             <button onClick={handleClick}>Click me</button>
          
//         </div>