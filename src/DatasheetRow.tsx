import React from 'react';
import DatasheetCell from './DatasheetCell';
import DatasheetContext, { DatasheetCellData, DatasheetContextType } from './DatasheetContext';

export type DatasheetRowProps = {
	component?: () => React.ReactNode;
	row: number;
};
export default function DatasheetRow({ component, row }: DatasheetRowProps): React.ReactNode {
	const Component = component || React.Fragment;

	const { data } = React.useContext<DatasheetContextType>(DatasheetContext);

	if (!data) throw new Error(`No data at row: ${row}`);

	return (
		<Component>
			{data[row].map((cellData: DatasheetCellData, index) => (
				<DatasheetCell key={`row-${row}-cell-${index}`} row={row} column={index} cellData={cellData} />
			))}
		</Component>
	);
}
