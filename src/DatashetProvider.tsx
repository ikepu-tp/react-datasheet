import React from 'react';
import DatasheetContext from './DatasheetContext';
import { DatasheetData } from './types';
import useDatashet, { useDatasheetProps } from './useDatasheet';

export type DatasheetOnlyProviderProps = {
	data: DatasheetData;
};
export type DatasheetProviderProps = DatasheetOnlyProviderProps & React.PropsWithChildren & useDatasheetProps;
export default function DatasheetProvider({
	children,
	...useDatasheetProps
}: DatasheetProviderProps): React.ReactElement {
	const datasheet = useDatashet(useDatasheetProps);
	return <DatasheetContext.Provider value={datasheet}>{children}</DatasheetContext.Provider>;
}
