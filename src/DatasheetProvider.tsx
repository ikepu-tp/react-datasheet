import React from 'react';
import DatasheetContext from './DatasheetContext';
import './styles/style.scss';
import { DatasheetData, DatasheetWrapperComponent } from './types';
import useDatasheet, { useDatasheetProps } from './useDatasheet';

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
	const datasheet = useDatasheet(useDatasheetProps);

	const Wrapper = wrapperComponent;

	return (
		<DatasheetContext.Provider value={{ ...useDatasheetProps, ...datasheet }}>
			{datasheet.style && <style>{datasheet.style}</style>}
			<Wrapper>{children}</Wrapper>
		</DatasheetContext.Provider>
	);
}
