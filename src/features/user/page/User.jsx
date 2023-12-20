
import {Table} from "@/components/elements/Table/Table.jsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useActions} from "@/hooks/useActions.js";



export const User = ({ data }) => {
    const [filterValue, setFilterValue] = useState('');
    const [filteredRows, setFilteredRows] = useState([]);

    const modal = useSelector(state => state.modalReducer)
    const {clearCurrentModal} = useActions()
    // это логика на удаление той таблицы
    useEffect(() => {
        return () => {
            clearCurrentModal();
        };
    }, []);
    // данные для таблицы
    const rowsWithEventHandlers = data?.map((user) => ({
        columns: [
            user?._id,
            user?.email,
            user?.firstName ?? 'Name',
            user?.lastName ?? 'Name',
            user?.phone ?? 'Не указано',


        ],
    }));
    //  даннные для нового отображения блока
    const newRowsWithEventHandlers = [
        {
            columns: [
               modal?.currentModalId?.columns[0],
                modal?.currentModalId?.columns[1],
               modal?.currentModalId?.columns[2],
                modal?.currentModalId?.columns[3],
               modal?.currentModalId?.columns[4],
            ]
        }
    ];


    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const handleFilterClick = () => {
        const filteredData = data.filter((user) =>
            Object.values(user).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(filterValue.toLowerCase())
            )
        );

        setFilteredRows(
            filteredData.map((user) => ({
                columns: [
                    user?._id,
                    user?.email,
                    user?.firstName ?? 'Name',
                    user?.lastName ?? 'Name',
                    user?.phone ?? 'Не указано',
                ],
            }))
        );
    };

    return (
        <div>

            <input type="text" value={filterValue} onChange={handleFilterChange} />

            <button onClick={handleFilterClick}>Найти</button>

            {modal.currentModalId && modal.currentModalId.columns && (
                <div>
                    <Table columns={['id', 'Email', 'firstname', 'lastname', 'phone']} rows={newRowsWithEventHandlers} />
                </div>
            )}
            <div>
                <Table columns={[ 'id', 'Email', 'firstname', 'lastname', 'phone']} rows={filteredRows.length > 0 ? filteredRows : rowsWithEventHandlers} />
            </div>





        </div>
    );
};
