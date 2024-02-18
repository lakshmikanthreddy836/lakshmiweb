import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useCallback, useRef } from "react";

const DataTable = ({ colDefs, rowData }) => {
  const gridRef = useRef();

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);
  return (
    <div>
      <div className="example-header text-black flex justify-end items-center p-2">
        <span>Search :</span>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1.5"
          onInput={onFilterTextBoxChanged}
        />
      </div>
      <div
        className="ag-theme-quartz overflow-y-hidden overflow-x-scroll"
        style={{ height: 440 }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default DataTable;
