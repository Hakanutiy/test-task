import './styles.css'
export const Pagination = ({ limit, totalUser, nextPage, currentPage }) => {
	const pageNum = []
	for (let i = 1; i <= Math.ceil(totalUser?.length / limit); i++) {
		pageNum.push(i)
	}
	return (
		<div className={'paginate'}>
			{pageNum.map(num => (
				<button
					className={`paginate_button ${currentPage === num && 'active'}`}
					key={num}
					onClick={() => nextPage(num)}
				>
					{num}
				</button>
			))}
		</div>
	)
}
