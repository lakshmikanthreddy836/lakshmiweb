import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
const Dropdown = ({
  searchPlaceholder,
  search,
  searchChangeHandler,
  options,
  selectedValue,
  changeSelectedHandler,
  name,
  selectedIndex,
  data,
}) => {
  const searchInputEl = useRef();
  const itemsEl = useRef();

  useEffect(() => {
    searchInputEl.current.focus();
    if (selectedValue) {
      itemsEl.current.scrollTop =
        itemsEl.current.querySelector(`.item-${selectedIndex}`).offsetTop - 42;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="dropdown__menu">
      <input
        type="text"
        placeholder={searchPlaceholder ? searchPlaceholder : "Search..."}
        className="dropdown__menu_search bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={search}
        onChange={searchChangeHandler}
        ref={searchInputEl}
      />
      <div className="dropdown__menu_items" ref={itemsEl}>
        {options.map((item, index) => (
          <div
            className={
              selectedValue === item
                ? `dropdown__menu_item item-${data.indexOf(item)} selected`
                : `dropdown__menu_item item-${data.indexOf(item)}`
            }
            key={index}
            onClick={() =>
              changeSelectedHandler(item, name, data.indexOf(item))
            }
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
Dropdown.propTypes = {
  searchPlaceholder: PropTypes.string, // Optional
  search: PropTypes.string.isRequired,
  searchChangeHandler: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.string.isRequired, // Assuming selectedValue is a string
  changeSelectedHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number.isRequired, // Assuming selectedIndex is a number
  data: PropTypes.array.isRequired,
};

export default Dropdown;
