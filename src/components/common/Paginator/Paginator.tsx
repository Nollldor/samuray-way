import React, {FC, useState} from "react";
import styles from "components/common/Paginator/Paginator.module.css"
import cn from 'classnames'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize: number
}

export const Paginator: FC<PropsType> = (
    {
        totalItemsCount,
        pageSize,
        currentPage,
        onPageChanged,
        portionSize
    }) => {
    const pageCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Prev</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)} key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}
                >{p}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
    </div>
}