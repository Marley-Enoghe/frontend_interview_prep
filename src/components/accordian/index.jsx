import react, { useState } from 'react';
import data from './data';
import './styles.css'

const Accordion =()=>{
  const [selected, setSelected ] = useState(null);
  const handleSingleSelection =(selectionId)=>{
    setSelected(selectionId === selected ? null : selectionId
    );
  }
 console.log(selected);
  return (
    <div className="wrapper">
      <button >Enable Multi Selection </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
            
                {selected === dataItem.id ? (
                  <div className="content">{dataItem.content}</div>
                ) : null}
              
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
export default Accordion;