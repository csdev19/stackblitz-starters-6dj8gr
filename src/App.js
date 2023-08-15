import React from "react";
import "./style.css";

export default function App() {
  const [element, setElement] = React.useState(''); // Declare a state variable...
  const [elements, setElements] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newElements = [...elements, { content: element, id: Date.now()}]; 
    setElements(newElements);
    setElement('');
  };

  const eraseElement = (id) => {
    setElements([...elements.filter(e => e.id != id)]);
  }

  
  return (
    <>      
      <form method="post" onSubmit={handleSubmit}>
        <input
          value={element}
          onChange={e => setElement(e.target.value)}
        />
        <button type="submit">add new element</button>
      </form>

      <h3>Elements:</h3>
      <ul>
        {elements.map(e => (
          <li onClick={() => eraseElement(e.id)} key={e.id}>{e.content}</li>
        ))}
      </ul>
    </>
  );
}
