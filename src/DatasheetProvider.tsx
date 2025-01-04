import React, { useRef } from 'react';
import { copySelectedRange } from '.';
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
			<DatasheetWrapper>
				<Wrapper>{children}</Wrapper>
			</DatasheetWrapper>
		</DatasheetContext.Provider>
	);
}

function DatasheetWrapper({ children }: React.PropsWithChildren): React.ReactNode {
	const { dataCurrent, selectedRange, contentEditable } = React.useContext(DatasheetContext);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const CopyHandler = React.useRef<EventListenerOrEventListenerObject>((): any => {
		copySelectedRange(selectedRange, dataCurrent);
		return;
	});

	React.useEffect(() => {
		if (!wrapperRef.current) return;
		wrapperRef.current.addEventListener('copy', CopyHandler.current);
	}, []);

	function handleCopy(e: React.MouseEvent<HTMLButtonElement>): void {
		if (contentEditable) return;
		e.preventDefault();
		copySelectedRange(selectedRange, dataCurrent);
	}
	return (
		<div className="ikpeuTp-reactDatasheet__datasheetWrapper" ref={wrapperRef}>
			{!contentEditable && (
				<button type="button" onClick={handleCopy}>
					選択範囲のコピー
				</button>
			)}
			{children}
		</div>
	);
}
