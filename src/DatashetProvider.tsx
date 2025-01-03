import React from 'react';
import DatasheetContext from './DatasheetContext';

export type DatasheetProviderProps = {};
export default function DatasheetProvider(props: DatasheetProviderProps & React.PropsWithChildren) {
	return <DatasheetContext.Provider value={{}}>{props.children}</DatasheetContext.Provider>;
}
