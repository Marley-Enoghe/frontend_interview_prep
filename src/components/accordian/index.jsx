import react, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  //To switch on and off multiple selection , we us the usestate hook
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  //To store and keep track of the selected items in an array ,by using a useState of an empty array
  const [multiple, setMultiple] = useState([]);

  //This is a function that handles single selection
  const handleSingleSelection = (selectionId) => {
    setSelected(selectionId === selected ? null : selectionId);
  };

  //This is a function that handles multiple selection
  const handleMultipleSelection = (selectionId) => {
    //create a copy of the muliple array
    let cpyMultiple = [...multiple];
    //check if the index of the item is in the array already
    const findIndexOfCurrentId = cpyMultiple.indexOf(selectionId);
    console.log(findIndexOfCurrentId);

    //if it is not there, push it in, if it is in remove it
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(selectionId);
    } else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };
  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.content}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.content}</div>
                  )}

              {/* selected === dataItem.id || 
              multiple.indexOf(dataItem) !== -1 ? (
                <div className="content">{dataItem.content}</div>
              ) : null*/}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
