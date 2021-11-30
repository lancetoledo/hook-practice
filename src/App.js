import { useState, useEffect, createContext} from 'react'
import './App.css';
import State from './components/State';


const state = {
  excited: "Let's keep learning",
  tired: "Boo! Let's learn something else"
}

export const StateContext = createContext(state)


function App() {

 //Change the state of the h1 when I click a button
 //How do I intialize the state? V
 //How do I destructure it? V
 //How do I utilize those elements?
 //How do I make the buttons run a function when i click it?
 //What function do I want to run when clicked?

 //Using the useState()
  const [resourceType, setResourceType] = useState('todos')

  const [items,setItems] = useState([])

  const [total, setTotal] = useState(0)


  //What is state?
  // data that can change

  //What is destructuring?
  //breaking down an array into its elements

  //What is the component life cycle?

  //componentDidMount() {
    //intialized
  //}

  //componentDidUpdate(){
    //state changes
  //}

  //componentWillUnmount(){
    //Component is removed
  //}


  //useContext()
  

//What is an API?
// Application Programming Interface
// -Communicates with the use and the database

  useEffect(() => {
    console.log("rendered")
    //Is a request to the api that returns a promise
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => {
    setItems(json)
    setTotal(json.length)
  });
  }, [resourceType])





  return (


    
    <div className="App">

    <StateContext.Provider value = {state.tired}>
      < State />
    </StateContext.Provider>

      <div>
        <button onClick = {() => {setResourceType("todos")}}>Todos</button>
        <button onClick = {() => {setResourceType("comments")}}>Comments</button>
        <button onClick = {()=> {setResourceType("posts")}}>Posts</button>
      </div>
      <h1>{total}</h1>
      <h1>{resourceType}</h1>
      
      {/* Mapping out the items in the array */}
      {items.map(item => {
        return <p>{JSON.stringify(item)}</p>
      })}
    </div>
  );
}

export default App;
