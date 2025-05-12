import { useState } from 'react'
import natur from '../src/assets/images/natur.jpg'
import './App.css'
import Header from './assets/componets/header'

function App() {
  const [count, setCount] = useState(0)
  const bgStyle = {
    backgroundImage: `url(${natur})`,
    backgroundSize: '500%',
    backgroundPosition: '-1600px -400px',
    fontfamily: 'Tahoma',
    backgroundAttachment: 'fixed',
    height: '100%',
    
  };



  return (
    <>
      <div style={bgStyle}>
      <Header/>
      </div>
    </>
  )
}

export default App



// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0); // count is state, setCount is function to update it

//   return (
//     <div>
      
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount((0))}>reset</button>
//     </div>
//   );
// }

// export default App



// import React, { useState } from 'react';

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Object:', formData);
//     alert('Form submitted! Check console for the object.');
//   };

//   return (
//     <div>
//       <h2>Student Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label><br /><br />
        
//         <label>
//           Age: <input type="number" name="age" value={formData.age} onChange={handleChange} required />
//         </label><br /><br />
        
//         <label>
//           Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label><br /><br />
        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;
