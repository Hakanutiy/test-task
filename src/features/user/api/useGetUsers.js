import { fetcher } from '../../../lib/api.js'
import { useQuery } from 'react-query'

//  случился форс мажор, не получается переписать на RTQ Redux.
const getUsers = () => {
	return fetcher('/table', { method: 'get' })
}
export const getUsersQueryKey = 'users'

export const useGetUsers = ({ config }) => {
	return useQuery({
		...config,
		queryKey: [getUsersQueryKey],
		queryFn: () => getUsers()
	})
}
