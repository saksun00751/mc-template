import Link from 'next/link'
import { Bars3Icon, MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'
import {  PlayIcon } from '@heroicons/react/24/solid'
const Nav = () => {
    return (
        <div className='flex justify-between items-center w-full h-10 px-6 py-8 bg-[#202020] text-white'>
            <div className='flex cursor-pointer'>
                <Bars3Icon className='h-8 mr-4' />
                <PlayIcon className='h-7 w-10 ml-3 rounded-md mr-1 bg-red-600' />
                <h1 className=' text-2xl font-bold'>  Youtube</h1>
            </div>
            <div className='flex items-center'>
                <form className='flex w-[600px] items-center'>
                    <input className='bg-black rounded-l-lg px-3 flex-1 h-10' type="text" name="" id="" placeholder='Search' />
                    <button className='h-10 w-16  bg-[#313131] flex items-center justify-center rounded-r-lg'>
                        <MagnifyingGlassIcon className='h-8' />
                    </button>
                </form>
            </div>
            <div className='flex items-center  justify-between w-24'>
                <BellIcon className="h-8  cursor-pointer"></BellIcon>
                <img
                    className=" cursor-pointer h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Nav;

