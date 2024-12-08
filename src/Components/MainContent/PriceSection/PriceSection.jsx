import Badge from './Badge';
import CardMonthly from './CardMonthly';
import CardYearly from './CardYearly';
import CardMultiDominio from './CardMultiDominio';
import LogoCookieMan from '/Cookieman_Verde.svg';

import Shield from '../../../../public/Scudo.svg';

const PriceSection = () => {
    return (
        <div id='priceSection' className=" h-screen max-w-[calc(1440px)] lg:mb-40">
            <Badge />
            <div className='relative'>
                <div className="absolute -top-20 right-6 lg:right-96">
                    <div className="w-60 h-40 bg-green-500 blur-3xl opacity-40 rounded-b-full"></div>
                </div>
            </div>

            <div className='relative'>
                <img src={Shield} alt="" className='absolute top-20 lg:top-0 left-16 lg:left-40 -rotate-12 lg:h-[calc(242px)] h-[calc(76px)] z-0' />
                <p className='absolute lg:left-[calc(455px)] left-[calc(115px)] top-20 lg:top-0 text-lg lg:text-6xl text-center lg:-ml-36 font-semibold z-10'>un`<span className='text-2xl lg:text-8xl'>UNICA</span> soluzione</p>
                <p className='absolute lg:left-[calc(530px)] left-[calc(170px)] top-[calc(106px)] lg:top-20 text-lg lg:text-6xl text-center font-semibold '><span className='text-2xl lg:text-8xl'>TUTTE</span> le funzionalità</p>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap gap-5 m-5'>
                <div className='flex flex-nowrap gap-5 w-full'>
                    <CardMonthly />
                    <CardYearly />
                </div>
                <CardMultiDominio />
            </div>
            <div className="absolute -bottom-40 -left-20 z-0">
                <div className="w-[calc(300px)] h-[calc(300px)] lg:w-[calc(600px)] lg:h-[calc(600px)] bg-green-500 blur-3xl opacity-30 rounded-b-full"></div>
            </div>

            <div className="px-5 lg:px-20 z-50 ">
                <p className="text-lg">
                    Un`unica soluzione, un unico prezzo, tutte le funzionalità incluse per garantirti completa conformità alle normative,
                    per sempre. Personalizzabile in ogni dettaglio, semplice da configurare e senza costi nascosti. Con
                    <span className="inline-block align-middle">
                        <img src={LogoCookieMan} alt="Logo CookieMan" className="w-26 h-3 mx-2" />
                    </span>,
                    la trasparenza è assicurata: semplicità, conformità e accessibilità sono i nostri punti di forza.
                </p>
            </div>
        </div>
    )
}

export default PriceSection
