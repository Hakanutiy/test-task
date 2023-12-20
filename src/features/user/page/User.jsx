
import {Table} from "@/components/elements/Table/Table.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useActions} from "@/hooks/useActions.js";
import {useNavigate} from "react-router-dom";



export const User = ({ data }) => {

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


    return (
        <div>
            {modal.currentModalId && modal.currentModalId.columns && (
                <div>
                    <Table columns={['id', 'Email', 'firstname', 'lastname', 'phone']} rows={newRowsWithEventHandlers} />
                </div>
            )}
            <div>
                <Table columns={[ 'id', 'Email', 'firstname', 'lastname', 'phone']} rows={rowsWithEventHandlers} />
            </div>





        </div>
    );
};
