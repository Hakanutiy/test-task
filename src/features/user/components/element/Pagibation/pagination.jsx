import './styles.css'
export const Pagination = ({limit, totalUser, nextPage}) => {
    const pageNum = []
    for (let i = 1; i<=Math.ceil(totalUser?.length/limit); i++) {
        pageNum.push(i)
    }
    return(
        <div className={'paginate'}>
            {pageNum.map(num => (
                <button className={'paginate_button'} key={num} onClick={() => nextPage(num)}>
                    {num}
                </button>
            ))}
        </div>
    )

}