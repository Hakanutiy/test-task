
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Table} from "../../../components/elements/Table/Table.jsx";



export const User = ({ data }) => {
    const navigate = useNavigate();


    // данные таблицы
    const rowsWithEventHandlers = data?.map((user) => ({
        columns: [
            user?._id,
            user?.email,
            user?.firstName ?? 'Name',
            user?.lastName ?? 'Name',
            user?.phone ?? 'Не указано',


        ],
    }));



    return (
        <div>

            <div  className={'mt-12'}>
                <Table columns={[ 'id', 'Email', 'firstname', 'lastname', 'phone']} rows={rowsWithEventHandlers} />
            </div>

        </div>
    );
};
