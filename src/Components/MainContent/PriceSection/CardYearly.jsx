import { useState } from 'react';

const CardYearly = () => {
    const Price = 20;
    const Discount = 1 - 0.17;
    const [year, setYear] = useState(1);

    const handleChange = (e) => {
        setYear(parseInt(e.target.value));
    };

    const TotalPrice = Price * 12 * year * Discount;

    return (
        <div className="w-[calc(50%)] lg:w-[calc(40%)] shadow-2xl mt-40 lg:mt-72 rounded-3xl bg-white/50 p-4 z-10">

            <p className="text-lg lg:text-3xl text-green-500">Annuale</p>

            <div className="flex flex-col justify-center items-center gap-4 p-5 mt-6">
                <input
                    type="range"
                    min="1"
                    max="3"
                    value={year}
                    onChange={handleChange}
                    className="w-full custom-slider h-2 rounded-md"
                    style={{
                        background: `linear-gradient(to right, #549c72 ${(year - 1) * 50}%, #d9d9d9 ${(year - 1) * 50}%)`,
                      }}
                />

                <div className="flex justify-between w-full">
                    {[1, 2, 3].map((num) => (
                        <span
                            key={num}
                            className={`text-lg lg:text-3xl ${year === num ? 'font-bold text-xl' : ''}`}
                        >
                            {num}
                        </span>
                    ))}
                </div>
            </div>

            <div className='flex flex-col justify-center items-center -mt-3'>
                <p>€ <span className='text-3xl lg:text-6xl font-bold'>{Price}</span> /Mese</p>
                <p>€ {TotalPrice} /Totale</p>
            </div>

            <div>
                <button className='bg-green-400 text-white font-semibold text-lg lg:text-xl rounded-lg lg:rounded-[calc(30px)] w-full h-[calc(33px)] lg:h-[calc(85px)] mt-1'>ACQUISTA</button>
            </div>
        </div>
    )
}

export default CardYearly
