import LogoCookieMan from '/Cookieman_Verde.svg'
import LogoCookieManMobile from '/Scudo.svg'

const LogoCookieManVerde = () => {
  return (
    <div>
      <a href="/"><img src={LogoCookieMan} alt="" className='hidden lg:block min-h-[calc(33.3px)] max-h-[calc(33.3px)] min-w-[calc(243.6px)] max-w-[calc(243.6px)] lg:ml-7' /></a>
      <a href="/"><img src={LogoCookieManMobile} alt="" className='flex lg:hidden h-[calc(15px)] w-[calc(15px)] ml-2 lg:ml-7' /></a>
    </div>
  )
}

export default LogoCookieManVerde

