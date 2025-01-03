import React from 'react';
import DatasheetContext, { DatasheetData } from './DatasheetContext';
import useDatashet, { useDatashetProps } from './useDatasheet';

export type DatasheetProviderProps = {
	data: DatasheetData;
};
export default function DatasheetProvider({
	children,
	data,
}: DatasheetProviderProps & React.PropsWithChildren & useDatashetProps): React.ReactElement {
	const datasheet = useDatashet({ data });
	return <DatasheetContext.Provider value={datasheet}>{children}</DatasheetContext.Provider>;
}
