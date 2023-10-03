import React from 'react'

const Category = ({ mobile, handleSignOut }) => {
    return (
        <ul className={`flex flex-row gap-10 ${mobile && 'flex-col absolute right-3 top-10 w-20 bg-slate-500 z-auto rounded-md py-2 px-3 overflow-y-scroll'}`}>
            <li className={`${mobile ? 'text-xs p-0' : ''}`}>{mobile ? '프로필관리' : 'TV'}</li>
            <li className={`${mobile ? 'text-xs p-0' : ''}`}>{mobile ? '구매내역' : '영화'}</li>
            <li className={`${mobile ? 'text-xs p-0' : ''}`}>{mobile ? '할인쿠폰' : '스포츠'}</li>
            <li className={`${mobile ? 'text-xs p-0' : ''}`}>{mobile ? '리뷰관리' : '스토어'}</li>
            <li className={`${mobile ? 'text-xs p-0' : ''}`}>{mobile ? '의견보내기' : '키즈'}</li>
            <li 
                className={`${mobile ? 'text-xs p-0' : ''}`}
                onClick={mobile ? handleSignOut : null}
            >
                {mobile ? '로그아웃' : '뉴스'}
            </li>
            {!mobile && <li>찜한 컨텐츠</li>}
        </ul>
    )
}

export default Category