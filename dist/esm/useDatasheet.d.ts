import { DatasheetContextType } from './DatasheetContext';
import { DatasheetData, DatasheetHeaders, DatasheetTheme, DatasheetUpdateDataHandler, DatasheetWrapperComponent } from './types';
export type useDatasheetProps = {
    data: DatasheetData;
    theme?: DatasheetTheme;
    headers?: DatasheetHeaders;
    style?: string;
    wrapperComponent?: DatasheetWrapperComponent;
    updateData?: DatasheetUpdateDataHandler;
};
export default function useDatasheet({ data, theme, headers, style, updateData, }: useDatasheetProps): DatasheetContextType;
