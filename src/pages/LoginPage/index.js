import React from 'react'

const LoginPage = () => {
    return (
        <section className='flex flex-col h-screen overflow-hidden text-center'>
            <div className='mb-[10vw] w-full min-h-screen box-border flex justify-center items-start flex-col px-[80px] py-[40px] h-full'>
                <div className='max-w-[650px] min-h-[400px] w-full flex flex-col text-start'>
                    {/* <img src='/images/cta-logo-one.svg' alt='logo-one' className='mb-[12px] max-w-[600px] min-h-[1px] block w-full'/> */}
                    <div className='relative flex justify-start w-full mb-20 pb'>
                        <p className='absolute left-12 top-2.5 text-2xl'>톰플릭스 회원 전용</p>
                        <img src='/images/group-icon.png' alt='icon' className='w-[50px] h-[50px] absolute top-0 left-0'/>
                    </div>
                    <p className='text-5xl'>
                        <span>최신 영화, TV시리즈,</span>
                        <div className='mt-5'/>
                        <span>스포츠 중계를 모두 한 곳에서</span>
                    </p>
                    <div className='flex flex-col'>
                        <label className='mt-20 font-light'>이미 톰플릭스 회원이라면?</label>
                        <a className='w-9/12 py-4 my-6 font-bold tracking-wider text-center rounded-sm cursor-pointer bg-sky-500 hover:opacity-60'>톰플릭스 로그인</a>
                    </div>

                    {/* <img src='/images/cta-logo-two.png' alt='logo-two'/> */}

                </div>
                <div className='absolute top-0 left-0 right-0 h-full bg-top bg-main -z-10'/> 
            </div>
        </section>
    )
}

export default LoginPage

// Container - section
// Content - div
// Center - div
// 
