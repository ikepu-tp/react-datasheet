import React from 'react';
import DatasheetContext from './DatasheetContext';
import useDatashet, { useDatashetProps } from './useDatasheet';

export type DatasheetProviderProps = {};
export default function DatasheetProvider({
	children,
}: DatasheetProviderProps & React.PropsWithChildren & useDatashetProps): React.ReactElement {
	const datasheet = useDatashet();
	return <DatasheetContext.Provider value={datasheet}>{children}</DatasheetContext.Provider>;
}
