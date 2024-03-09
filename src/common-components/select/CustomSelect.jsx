import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

const CustomSelect = ({
  label,
  data,
  value,
  name,
  onChange,
  error,
  setStationCode,
  defaultOptionLabel,
  searchPlaceholder,
  
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState(
    value !== "" ? data.indexOf(value) : null
  );
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState(data);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef();

  // Hide dropdown if clicked outside of dropdown
  const handleClickOutside = useCallback(
    (e) => {
      if (
        showDropdown &&
        e.target.closest(".dropdown") !== dropdownEl.current
      ) {
        setShowDropdown(false);
        setSearch("");
        setOptions(data);
      }
    },
    [showDropdown, setShowDropdown, dropdownEl, data]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const changeSelectedHandler = (item, name, index) => {
    setStationCode()
    setSelectedValue(item);
    setSelectedIndex(index);
    setShowDropdown(false);
    onChange(item, name);
  };

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    const filteredOptions = data.filter((opt) => {
      return opt.toLowerCase().includes(e.target.value.trim().toLowerCase());
    });
    setOptions(filteredOptions);
  };

  return (
    <div className="form__group">
      <label>{label}</label>
      <div
        className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ref={dropdownEl}
      >
        <input
          type="hidden"
          name={name}
          value={value}
          onChange={() => onChange(value, name)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div
          className="dropdown__selected"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedValue
            ? selectedValue
            : defaultOptionLabel
            ? defaultOptionLabel
            : "Please select one option"}
        </div>
        {showDropdown && (
          <Dropdown
            searchPlaceholder={searchPlaceholder}
            search={search}
            searchChangeHandler={searchChangeHandler}
            options={options}
            selectedValue={selectedValue}
            selectedIndex={selectedIndex}
            changeSelectedHandler={changeSelectedHandler}
            name={name}
            data={data}
          />
        )}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired, // Assuming data is an array of options
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Assuming value is a string or a number
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string, // Assuming error is an optional string
  defaultOptionLabel: PropTypes.string,
  searchPlaceholder: PropTypes.string,
};

export default CustomSelect;
