import { useState } from "react";
import ContactForm from "./ContactForm";
const CardMultiDominio = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const toggleContactModal = () => {
        setIsContactModalOpen(!isContactModalOpen);
    };

    return (
        <div className="w-{clac(90%)} lg:w-full shadow-2xl lg:mt-72 rounded-3xl  bg-white/50 p-4 z-10">

            <p className="text-lg lg:text-5xl text-orange-500 font-semibold text-center">MULTI DOMINIO</p>
            <p className="text-lg lg:text-2xl my-3 lg:my-20">Se hai più di un dominio, se sei una web agency o lavori nel digitale, contattaci per avere un’offerta a te dedicata.</p>

            <div>
                <button onClick={toggleContactModal} className='bg-orange-400 hover:bg-orange-600 duration-500  text-white font-semibold text-lg lg:text-xl rounded-xl lg:rounded-[calc(30px)] w-full lg:h-[calc(98px)] h-[calc(39px)] mt-1'>Contattaci</button>
                
                {isContactModalOpen && (
                    <ContactForm onClose={toggleContactModal} />
                )}
            </div>
        </div>
    )
}

export default CardMultiDominio

