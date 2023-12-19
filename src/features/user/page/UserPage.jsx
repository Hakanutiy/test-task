import {User} from "./User.jsx";

import {Header} from "../../../components/elements/Header/Header.jsx";
import {useGetUsers} from "../api/useGetUsers.js";

export const UserPage = () => {
const { data } = useGetUsers({config: {}})

    return (
        <div className={'userPage '}>
            <Header name={'Пользователи'} link={''}/>
            <User data={data}/>
        </div>
    )
}