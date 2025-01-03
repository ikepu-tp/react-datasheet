import React from 'react';
import DatasheetContext from './DatasheetContext';
import { DatasheetData, DatasheetWrapperComponent } from './types';
import useDatashet, { useDatasheetProps } from './useDatasheet';

export type DatasheetOnlyProviderProps = {
	data: DatasheetData;
	wrapperComponent?: DatasheetWrapperComponent;
};
export type DatasheetProviderProps = DatasheetOnlyProviderProps & React.PropsWithChildren & useDatasheetProps;
export const defaultWrapperComponent: DatasheetWrapperComponent = ({ children }) => (
	<div className="ikpeuTp-reactDatasheet__wrapper">{children}</div>
);
export default function DatasheetProvider({
	children,
	wrapperComponent = defaultWrapperComponent,
	...useDatasheetProps
}: DatasheetProviderProps): React.ReactElement {
	const datasheet = useDatashet(useDatasheetProps);

	const Wrapper = wrapperComponent;

	return (
		<DatasheetContext.Provider value={datasheet}>
			{datasheet.style && <style>{datasheet.style}</style>}
			<Wrapper>{children}</Wrapper>
		</DatasheetContext.Provider>
	);
}
