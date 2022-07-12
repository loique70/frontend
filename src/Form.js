import  { useState } from 'react'

const Form = () => {
  const [consoles,setConsole] = useState('PS2');
  const [category, setCategory] = useState('Action');
  const [rating, setRating] = useState('T') ;
  const [userPoint, setUserPoint] = useState(0.1);
  const [year, SetYear] = useState(2000);
  const [critic, setCritic] = useState(1);
  const [publisher, setPublisher] = useState('Nintendo');
  const [isPending,setIspending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {consoles,category,rating,userPoint,year,critic,publisher};
       //console.log(blog);
    setIspending(true);

    fetch('http://127.0.0.1:5000/get_prediction',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify( blog)
    }).then(() =>{
        console.log('New file added')
    })
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Select console:</label>
            <select value={consoles} onChange={(e) => setConsole(e.target.value)}>
                <option value="PS2">PS2</option>
                <option value="X360">X360</option>
                <option value="PS3">PS3</option>
                <option value="PC">PC</option>
            </select>

            <label>Select category:</label>
            <select value={category} onChange = {(e) => setCategory(e.target.value)}>
                <option value="Action">Action</option>
                <option value="Sport">Sport</option>
                <option value="Shooter">Shooter</option>
                <option value="Role-palying">Role-playing</option>
            </select>

            <label>Select rating:</label>
            <select value={rating} onChange = {(e) => setRating(e.target.value)}>
                <option value="T">T</option>
                <option value="E">E</option>
                <option value="M">M</option>
                <option value="E10+">E10+</option>
            </select>

            <label>Select User point:</label>
            <select value={userPoint}  onChange = {(e) => setUserPoint(e.target.value)}>
                <option value="0.1">0.1</option>
                <option value="0.5">0.5</option>
                <option value="1.0">1.0</option>
                <option value="1.5">1.5</option>
            </select>

            <label>Select year:</label>
            <select value={year} onChange = {(e) => SetYear(parseInt(e.target.value))}>
                <option value="2000">2000</option>
                <option value="2005">2005</option>
                <option value="2010">2010</option>
                <option value="2020">2020</option>
            </select>

            <label>Select publisher</label>
            <select value={publisher} onChange = {(e) => setPublisher(e.target.value)}>
                <option value="Electronic Art">Electronic Arts</option>
                <option value="Activision">Activision</option>
                <option value="Ubisoft">Ubisoft</option>
                <option value="Nintendo">Nintendo</option>
            </select>

            <label>Select critic points:</label>
            <select value={critic} onChange = {(e) => setCritic(parseInt(parseInt(e.target.value)))}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            { !isPending && <button>Submit</button>}
            { isPending && <button>Submiting...</button>}
        </form>
    </div>
  )
}

export default Form;