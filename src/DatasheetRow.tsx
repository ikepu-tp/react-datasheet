import React from 'react';
import DatasheetCell from './DatasheetCell';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellData, DatasheetRowComponent } from './types';

export type DatasheetRowProps = {
	component?: DatasheetRowComponent;
	row: number;
	rowData?: DatasheetCellData[];
};
export default function DatasheetRow({ component, row, rowData }: DatasheetRowProps): React.ReactNode {
	const { data, theme } = React.useContext<DatasheetContextType>(DatasheetContext);

	const Component = component || theme.rowComponent || 'div';

	let initData: DatasheetCellData[];
	if (rowData) {
		initData = rowData;
	} else {
		if (!data[row]) throw new Error(`No data at row: ${row}`);
		initData = data[row];
	}

	return (
		<Component>
			{initData.map((cellData: DatasheetCellData, index) => (
				<DatasheetCell key={`row-${row}-cell-${index}`} row={row} column={index} cellData={cellData} />
			))}
		</Component>
	);
}
