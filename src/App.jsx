// import logo from './logo.svg';
// import './App.css';
// // import { useState } from 'react';
// import { useState } from 'react';
// import  { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home';
// import Layout from './pages/layout';
// import Blog from './pages/blog';
// // function Car(props){
// //   return(
// //     <h1>Garage</h1>
// //   )
// // }
// // // function Garage(){
// // //   const carInfo = {
// // //     model:"Maruti",
// // //     name:"swift"
// // //   }
// // // return (
  
// // //   <><h1>Who lives in my garage?
// // // </h1>
// // // <Car brand = {carInfo}/>
// // //   </>
// // // )
// // // }
// // function Garage(props){
// // return(
// // <li>Car in garage {props.car}</li>
// // )
// // }
// // function MyForm() {
// //   const [name,setName] = useState("")
// //   console.log(name)
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     alert(`The name you entered was: ${name}`)
// //   }

// //   return (
// //     <form onSubmit={handleSubmit}> 
// //       <label>Enter your name:
// //         <input type="text"value={name} onChange={(e)=>setName(e.target.value)} />
        
// //       </label>
// //       <input type='submit'></input>
// //     </form>
// //   )
// // }
// // function App(props
// // ) {
// //   let cars = ["maruti","honda","hyundai"];
// //   return (
  
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Hello Welcome to the react tutorial {props.name} and  {props.children}
// //         </p>
// //         {/* <Garage/> */}
// //        <ul>{cars.map((car)=><Garage car={car}/>)}</ul>
// //        <MyForm/>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="
// // noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// function Car(props){
//   return(<li>My Car Name is {props.name}</li>)
// }
// const [name,setName] = useState["orange"]
// setName("okay it is nodejs")
// function App(){
//   const [name,setName]= useState("")
//   console.log(name)
//   const handleSubmit = (event) => {
//         event.preventDefault();
       
//         if(name.length==0) alert(`please write your name`)
//        else alert(`The name you entered was: ${name}`)
//       }
    
//   let cars = ["maruti","tata","creata","honda"]
//   const [color,setColor] = useState('blue')
//   return(
//   //   <div className='App'>
//   //       <header className="App-header">
//   //  <img src={logo} className="App-logo"></img>
//   //  <h5>Learning React JS</h5>
//   //  <ul>{
//   //    cars.map((carName)=> <Car name={carName}/>)
     
//   //   }</ul>
//   //   <form onSubmit={handleSubmit}>
//   //     <label>Name</label>
//   //     <input type='text' onChange={(e)=>setName(e.target.value)}></input>
//   //     <input type='submit'></input>
//   //   </form>
//   //  </header>
//   //   </div>
//   // <BrowserRouter>
//   //     <Routes>
//   //       <Route path="/" element={<Layout />}>
//   //         <Route index element={<Home />} />
//   //         <Route path="blogs" element={<Blog />} />
//   //         {/* <Route path="contact" element={<Contact />} />
//   //         <Route path="*" element={<NoPage />} /> */}
//   //       </Route>
//   //     </Routes>
//   //   </BrowserRouter>
//  <>
//   <h1>My fav color is {color}</h1>
//   <button onClick={()=>setColor("blue")}>Blue</button>
//   <button onClick={()=>setColor("red")}>Red</button>
//   <button onClick={()=>setColor("orange")}>Orangr</button>
//   <button onClick={()=>setColor("yellow")}>Yellow</button>

//  </>
//   )
// }

// export default App;

import { useState } from 'react'
import { Tabbutton } from './component/tabbutton'
import { example } from './data';
let content="please select on the button";

function App() {
  const [count, setCount] = useState(0)
  const [selectedTopic,setNewTopic] = useState()
  function handleSelect(selected){
  setNewTopic(selected)
  }
if(count<0){
  alert("Count must be positive")
  setCount(0)
}
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <h1>count is: {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count+
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count-
        </button> */}
          {/* <h1>count is: {count}</h1> */}
       <Tabbutton isSelected={selectedTopic==="Component"} onSelect={()=>handleSelect("Component")}>Component</Tabbutton>
       <Tabbutton isSelected={selectedTopic==="JSX"} onSelect={()=>handleSelect("JSX")}>JSX</Tabbutton>
       <Tabbutton isSelected={selectedTopic==="Props"} onSelect={()=>handleSelect("Props")}>Props</Tabbutton>
       <Tabbutton isSelected={selectedTopic==="State"} onSelect={()=>handleSelect("State")}>State</Tabbutton>

  {selectedTopic&&<div><h1>{example[selectedTopic]?.title}</h1>
  <h4>{example[selectedTopic]?.description}</h4></div>}
  {!selectedTopic&&<p>please Select Any Topic</p>}


  
     
        {/* <p>

          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

