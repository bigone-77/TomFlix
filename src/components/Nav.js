import React, { useEffect, useState } from 'react'
import Category from './NavCategory';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const Nav = () => {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    // params를 얻어오는 메서드 => useLocation
    const { pathname } = useLocation();
    const navigate = useNavigate();    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const initialUserData = localStorage.getItem('userData') ?
    JSON.parse(localStorage.getItem('userData')) : {};

    const [userData, setUserData] = useState(initialUserData);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (pathname === '/') {
                    navigate('/main');
                }
            }   else {
                navigate('/');
            }
        })
    }, [auth, navigate, pathname]);

    


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = () => {
            if (window.scrollY > 50) {
                setShow(true);
            }   else {
                setShow(false);
            }
        }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${searchValue}`);
    }

    const handleAuth = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            setUserData(result.user);
            localStorage.setItem('userData', JSON.stringify(result.user));
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUserData({});
            navigate('/');
        }).catch(error => 
            console.log(error)
        )
    }

    return (
        <div className='flex flex-col mt-[30px] items-between text-center fixed top-0 left-0 right-0 z-50'>
            <div 
                className={`
                    flex 
                    items-center 
                    justify-between
                    md:justify-start
                    ${pathname && 'md:justify-between' }
                    tracking-widest 
                    z-3 
                    h-[70px]
                    ${show ? 'bg-indigo-950' : 'bg-transparent'}
                `}
            >
                <div 
                    className='transition-opacity w-[110px] p-3  ml-10 max-h-[70px] border-2 border-zinc-300 rounded-md hover:opacity-70'
                    onClick={() => (window.location.href = "/")}
                >
                    <p>TOMFLIX</p>
                </div>
                

                { pathname === '/' ? 
                    (
                    <div className='transition-opacity w-[110px] p-3  ml-10 max-h-[70px] border-2 cursor-pointer border-zinc-300 rounded-md hover:border-transparent hover:text-gray-300 hover:bg-white mr-9'>
                        <a onClick={handleAuth}>LOGIN</a>
                    </div>) : 
                    <>
                        <div className='hidden ml-10 md:block'>
                            <Category />
                        </div>
                        <div className='flex flex-row justify-between mb-[12px] mr-9'>
                            <FaSearch 
                                size={25}
                                className='mx-2 mt-3'
                            />
                            <input 
                                value={searchValue} 
                                onChange={handleChange}
                                type='text'
                                placeholder='제목, 장르, 배우로 검색해보세요'
                                className={`px-3 py-2 border-4 border-white rounded-md ${show ? 'bg-indigo-950' : 'bg-transparent'}`}
                            />
                        </div>
                        <div 
                            className='box-border relative flex items-center w-40 h-20 mb-3 cursor-pointer'
                            onMouseEnter={() => setMenu(true)}
                            onMouseLeave={() => setMenu(false)}
                        >
                            <div className='w-[40px] h-[40px]'>
                                <img 
                                    src={userData.photoURL} 
                                    alt={userData.displayName}
                                    className='rounded-full '
                                />
                            </div>
                            <div className='absolute left-[40px]'>
                                {!menu ? <IoIosArrowDown size={20}/> : <IoIosArrowUp size={20}/>}
                            </div>
                            {menu && <Category mobile handleSignOut={handleSignOut}/>}
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

export default Nav