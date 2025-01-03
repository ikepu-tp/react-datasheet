import React from 'react';
import { DatasheetSheetComponent } from './types';
export type DatasheetSheetProps = {
    component?: DatasheetSheetComponent;
};
declare const DatasheetSheet: React.MemoExoticComponent<({ component }: DatasheetSheetProps) => React.ReactNode>;
export default DatasheetSheet;
