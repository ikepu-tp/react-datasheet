import React from 'react';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import DatasheetRow from './DatasheetRow';

export type DatasheetSheetProps = {
	component?: () => React.ReactNode;
};
export default function DatasheetSheet({ component }: DatasheetSheetProps): React.ReactNode {
	const Component = component || 'div';

	const { data } = React.useContext<DatasheetContextType>(DatasheetContext);

	return (
		<Component>
			{data.map((rowData, rowIndex) => (
				<DatasheetRow key={`row-${rowIndex}`} row={rowIndex} rowData={rowData} />
			))}
		</Component>
	);
}
