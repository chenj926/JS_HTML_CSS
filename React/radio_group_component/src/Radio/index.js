import * as React from "react";
import "./style.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
        checked: child.props.value === selected,
        onChange,
    })
  })

  // Render the RadioOptions
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className="RadioOption">
        <input 
            id={value} 
            type="radio" 
            name={value} 
            value={value}
            checked={checked}
            onChange={handleChange}
        />
        <label htmlFor={value}>{children}</label>
        </div>
    );
};


