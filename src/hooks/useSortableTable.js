import {useMemo, useState} from "react";

export const useSortableTable = (initialColumns, initialRows) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'start' });

    const onHeaderClick = (columnKey) => {
        const direction = sortConfig.key === columnKey ? (sortConfig.direction === 'start' ? 'end' : 'start') : 'start';
        setSortConfig({ key: columnKey, direction });
    };

    const sortedRows = useMemo(() => {
        if (!sortConfig.key) {
            return initialRows;
        }

        return [...initialRows].sort((a, b) => {
            if (sortConfig.direction === 'start') {
                return a.columns[initialColumns.indexOf(sortConfig.key)] > b.columns[initialColumns.indexOf(sortConfig.key)] ? 1 : -1;
            } else {
                return a.columns[initialColumns.indexOf(sortConfig.key)] < b.columns[initialColumns.indexOf(sortConfig.key)] ? 1 : -1;
            }
        });
    }, [sortConfig, initialRows, initialColumns]);
    return {
        sortedRows,
        onHeaderClick,
        sortConfig,
    };
}