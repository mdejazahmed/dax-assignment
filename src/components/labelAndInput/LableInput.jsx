import "./labelInput.css";
import Multiselect from "multiselect-react-dropdown";
import { BiCurrentLocation } from "react-icons/bi";

export const LableInput = ({ options, placeholder, isMultiSelect }) => {
  return (
    <div className="inputContainer">
      {isMultiSelect ? (
        <Multiselect
          singleSelect
          placeholder={placeholder}
          options={options}
          displayValue="name"
          className="select"
        />
      ) : (
        <Multiselect
          placeholder={placeholder}
          options={options}
          displayValue="name"
          className="select"
        />
      )}
    </div>
  );
};
