import React, {useState} from 'react';
import './styles.css';
import {useSortableTable} from "../../../hooks/useSortableTable.js";


export const Table = ({ columns, rows }) => {
    const { sortedRows, onHeaderClick } = useSortableTable(columns, rows);


    return (
        <table className={'table'}>
            <thead>
            <tr className={'table_column'}>
                {columns?.map((column, index) => (
                    <th
                        className={'table_column_index'}
                        key={index}
                        onClick={() => onHeaderClick(column)}
                    >
                        {column}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {sortedRows?.map((row, rowIndex) => (
                <tr className={'text-white'} key={rowIndex}>
                    {row.columns.map((data, columnIndex) => (
                        <td
                            onClick={row.onRowClick}
                            className={'px-4 py-3 text-lg'}
                            key={columnIndex}
                        >
                            {data}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};
