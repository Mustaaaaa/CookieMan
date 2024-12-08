import LogoCookieManVerde from './LogoCookieManVerde'
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className='relative z-50'>
            <div className="fixed top-0 left-0 h-9 lg:h-20 shadow-xl flex items-center m-[calc(5%)] lg:m-0 lg:rounded-none rounded-xl w-[calc(90%)] lg:w-screen z-50 bg-white">
                <LogoCookieManVerde />
                <div className='flex items-center justify-between mx-10 lg:mx-40 text-center w-full '>
                    <Link to="priceSection" smooth={true} duration={500} className='text-lg lg:text-3xl text-green-500 font-semibold hover:cursor-pointer duration-500 hover:text-black'>PREZZI</Link>
                    <Link to="ResourcesSection" smooth={true} duration={500} className='text-sm lg:text-2xl hover:cursor-pointer duration-500 hover:text-green-500'>RISORSE</Link>
                    <Link to="priceSection" smooth={true} duration={500} className='text-sm lg:text-2xl hover:cursor-pointer duration-500 hover:text-green-500'>FUNZIONALITÀ</Link>
                    <Link to="priceSection" smooth={true} duration={500} className='text-sm lg:text-2xl hover:cursor-pointer duration-500 hover:text-green-500'>SUPPORTO</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
