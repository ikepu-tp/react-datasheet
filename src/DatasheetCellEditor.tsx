import React from 'react';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellData } from './types';

export type DatasheetCellEditorProps = {
	row: number;
	column: number;
	cellData?: DatasheetCellData;
};
const DatasheetCellEditor = React.memo(({ row, column, cellData }: DatasheetCellEditorProps): React.ReactNode => {
	const { data, updateCellData, contentEditable } = React.useContext<DatasheetContextType>(DatasheetContext);

	let initData: DatasheetCellData;
	if (cellData) {
		initData = cellData;
	} else {
		if (!data[row] || (!data[row][column] && data[row][column] !== undefined && data[row][column] !== null))
			throw new Error(`No data at row: ${row}, column: ${column}`);
		initData = data[row][column];
	}

	const DataRef = React.useRef<DatasheetCellData>(initData);

	function handleInput(e: React.FormEvent<HTMLElement>): void {
		DataRef.current = e.currentTarget.textContent;
		updateCellData(row, column, DataRef.current);
	}
	return (
		<div onInput={handleInput} contentEditable={contentEditable} className="ikpeuTp-reactDatasheet__cellEditor">
			{DataRef.current}
		</div>
	);
});
export default DatasheetCellEditor;
