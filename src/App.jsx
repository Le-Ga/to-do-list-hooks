import './App.scss';
import image from './pic.svg';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

   useEffect(() => {
      btnClear();
   })

   const [userInput, setUserInput] = useState('');
   const [list, setList] = useState([]);

   const handleEvent = (e) => {
      setUserInput(e);
   };

   const addItem = (input) => {
      if (userInput === '') {
         alert('Please enter the item.')
      } else {
         let listArray = list;
         listArray.push(input);
         setList(listArray)
         setUserInput('');
      }
   };

   const submittedForm = (e) => {
      e.preventDefault();
   }

   const btnClear = () => {
      if (list.length === 0) {
         document.querySelector('.btn-clear').style.display = 'none';
      } else {
         document.querySelector('.btn-clear').style.display = 'block';
      }
   };

   const deleteList = () => {
      let listArray = list;
      listArray = [];
      setList(listArray);
   }

   const crossedWord = (e) => {
      const li = e.target;
      li.classList.toggle('crossed');
   }

   return (
      <div className="wrapper">

         <div className='container'>
            <img src={image} alt="list" width='400' />
            <h1 className='header'>To-Do List</h1>

            <div className="body-row">

               <div className="column column-head">
                  <form onSubmit={submittedForm}>
                     <input onChange={(e) => handleEvent(e.target.value)} type="text" placeholder='Enter...' value={userInput} />
                     <button onClick={() => addItem(userInput)} className="btn btn-add">Add</button>
                  </form>
               </div>

               <div className="column column-list">
                  <ul className="to-do-list">
                     {list.map((item, index) => (
                        <li onClick={crossedWord} key={index}>{index + 1}. {item}</li>
                     ))}
                  </ul>
                  <button className='btn btn-clear' onClick={deleteList}>Clear list</button>
               </div>

            </div>
         </div>

      </div >
   );
}

export default App;
