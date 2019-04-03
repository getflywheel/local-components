import * as React from 'react';
import {
	IVirtualTableProps,
	VirtualTableCellRenderer,
	VirtualTableHeaderObjectType,
	VirtualTableRowRenderer
} from './VirtualTable';
import { VirtualTableHelperCalculations } from './VirtualTableHelper';

export interface IVirtualTableContext {
	cellClassName: string;
	cellRenderer: VirtualTableCellRenderer;
	cellRendererChangeFn: IVirtualTableProps['cellRendererChangeFn'];
	columnClassNames: VirtualTableHeaderObjectType['className'][];
	columnFlexWidths: VirtualTableHelperCalculations['columnFlexWidths'];
	data: IVirtualTableProps['data'];
	dataKeysOrderedColumns: VirtualTableHelperCalculations['dataKeysOrderedColumns'];
	rowRenderer: VirtualTableRowRenderer;
}

const context: Partial<IVirtualTableContext> = {

};

export const VirtualTableContext = React.createContext(context as any);
