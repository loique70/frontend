import './App.css';
import React,{useEffect,useState} from "react"
function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=>{
    fetch("http://localhost:5000/")
    .then(response => response.json())
    .then(data =>{
      setBackendData(data)
    })
  },   [])
  return (
    <div className="App">
      {(typeof backendData.result === 'undefined') ?
       ( <p>Loading...</p>)
      :(
        backendData.result.map((data, i) =>(
          <p key={i}>
            {data._id}
            {data.title}
            {data.price}
            </p>
        ))
      ) 
      }
    </div>
  );
}

export default App;
