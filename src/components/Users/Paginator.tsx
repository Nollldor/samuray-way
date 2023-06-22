import React, {FC} from "react";
import styles from "./paginator.module.css"

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

export const Paginator: FC<PropsType> = (
    {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged
    }) => {
    const pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map((p, i) => <span className={currentPage === p ? styles.selectedPage : ""} key={i}
                                   onClick={() => onPageChanged(p)}>{p}</span>)}
    </div>
}