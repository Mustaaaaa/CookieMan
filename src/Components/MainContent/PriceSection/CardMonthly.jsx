import { useState } from 'react';
const CardMonthly = () => {
    const [count, setCount] = useState(1);
    const Price = 20;
    const TotalPrice = Price * count;
    const increment = () => {
        if (count < 12) {
            setCount(count + 1);
        }
    };
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };


    return (
        <div className="w-[calc(50%)] lg:w-[calc(50%)]  shadow-2xl mt-40 lg:mt-72 rounded-3xl lg:ml-[calc(50px)] p-4 z-10  bg-white/50">

            <p className="text-lg lg:text-3xl text-green-500">Mensile</p>

            <div className="font-bold flex justify-center items-center  gap-4 lg:gap-12 pt-6">
                <button className="flex justify-center items-center w-[calc(38px)] lg:w-[calc(55px)] h-[calc(16px)] lg:h-[calc(23px)] bg-green-400 rounded-md text-lg text-center lg:rounded-lg" onClick={decrement}>-</button>
                <span className='text-3xl lg:text-6xl'>{count}</span>
                <button className="flex justify-center items-center w-[calc(38px)] lg:w-[calc(55px)] h-[calc(16px)] lg:h-[calc(23px)] bg-green-400 rounded-md lg:rounded-lg" onClick={increment}>+</button>
            </div>

            <div className='flex flex-col justify-center items-center lg:mt-0 mt-3'>
                <p>€ <span className='text-3xl lg:text-6xl font-bold'>{Price}</span> /Mese</p>
                <p>€ {TotalPrice} /Totale</p>
            </div>

            <div>
                <button className='bg-green-400 hover:bg-green-900 duration-500 text-white font-semibold text-lg lg:text-xl rounded-lg lg:rounded-[calc(30px)]  h-[calc(33px)] w-full lg:h-[calc(85px)] lg:mt-1'>ACQUISTA</button>
            </div>
        </div>
    )
}

export default CardMonthly
