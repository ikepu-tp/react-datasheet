import React from 'react';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellComponent, DatasheetCellData } from './types';

export type DatasheetCellProps = {
	component?: DatasheetCellComponent;
	row: number;
	column: number;
	cellData?: DatasheetCellData;
};
const DatasheetCell = React.memo(({ component, row, column, cellData }: DatasheetCellProps): React.ReactNode => {
	const { data, theme, updateCellData } = React.useContext<DatasheetContextType>(DatasheetContext);

	const Component = component || theme.cellComponent || 'div';

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
		<Component onInput={handleInput} contentEditable>
			{DataRef.current}
		</Component>
	);
});

export default DatasheetCell;
