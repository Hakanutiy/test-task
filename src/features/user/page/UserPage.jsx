import { User } from './User.jsx'

import { Header } from '../../../components/elements/Header/Header.jsx'
import { useGetUsers } from '../api/useGetUsers.js'
import { Pagination } from '../components/element/Pagibation/pagination.jsx'
import { usePaginate } from '@/hooks/usePaginate.js'
import { Loader } from '@/components/elements/Loader/Loader.jsx'

export const UserPage = () => {
	const { data, isLoading } = useGetUsers({ config: {} })
	const { nextPage, currentUserIndex, limit } = usePaginate(50, data)

	return (
		<div className={'userPage '}>
			<Header name={'Пользователи'} link={''} />
			{isLoading ? (
				<Loader />
			) : (
				<>
					<User data={currentUserIndex} />
					<Pagination totalUser={data} limit={limit} nextPage={nextPage} />
				</>
			)}
		</div>
	)
}
