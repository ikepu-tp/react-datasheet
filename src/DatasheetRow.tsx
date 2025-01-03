import React from 'react';
import DatasheetCell from './DatasheetCell';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellData } from './types';

export type DatasheetRowProps = {
	component?: (props: { style?: React.CSSProperties }) => React.ReactNode;
	style?: React.CSSProperties;
	row: number;
	rowData?: DatasheetCellData[];
};
export default function DatasheetRow({ component, style, row, rowData }: DatasheetRowProps): React.ReactNode {
	const Component = component || 'div';

	const { data } = React.useContext<DatasheetContextType>(DatasheetContext);

	let initData: DatasheetCellData[];
	if (rowData) {
		initData = rowData;
	} else {
		if (!data[row]) throw new Error(`No data at row: ${row}`);
		initData = data[row];
	}

	return (
		<Component style={style || { display: 'flex' }}>
			{initData.map((cellData: DatasheetCellData, index) => (
				<DatasheetCell key={`row-${row}-cell-${index}`} row={row} column={index} cellData={cellData} />
			))}
		</Component>
	);
}
