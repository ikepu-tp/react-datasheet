import React from 'react';
import { DatasheetData, DatasheetWrapperComponent } from './types';
import { useDatasheetProps } from './useDatasheet';
export type DatasheetOnlyProviderProps = {
    data: DatasheetData;
    wrapperComponent?: DatasheetWrapperComponent;
};
export type DatasheetProviderProps = DatasheetOnlyProviderProps & React.PropsWithChildren & useDatasheetProps;
export declare const defaultWrapperComponent: DatasheetWrapperComponent;
export default function DatasheetProvider({ children, wrapperComponent, ...useDatasheetProps }: DatasheetProviderProps): React.ReactElement;
