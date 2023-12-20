import { useState } from 'react'

export const usePaginate = (maxLimit, data) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [limit, setLimit] = useState(maxLimit)
	const lastUserIndex = currentPage * limit
	const firstUserIndex = lastUserIndex - limit
	const currentUserIndex = data ? data.slice(firstUserIndex, lastUserIndex) : []
	const nextPage = pageNum => setCurrentPage(pageNum)
	return { nextPage, currentUserIndex, limit, currentPage }
}
