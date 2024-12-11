import { useState } from "react";
import Swal from 'sweetalert2';


const ContactForm = ({onClose}) => {
    const [errors, setErrors] = useState({});
    const validateForm = (formData) => {
        const newErrors = {};

        if (!formData.get("name")) newErrors.name = "Il nome è obbligatorio.";
        if (!formData.get("lastname")) newErrors.lastname = "Il cognome è obbligatorio.";

        const email = formData.get("email");
        if (!email) {
            newErrors.email = "L'email è obbligatoria.";
        } else if (!/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(email)) {
            newErrors.email = "Inserisci un'email valida.";
        }

        const number = formData.get("number");
        if (!number) {
            newErrors.number = "Il numero di telefono è obbligatorio.";
        } else if (!/^\d{10}$/.test(number)) {
            newErrors.number = "Inserisci un numero di telefono valido (10 cifre).";
        }

        if (!formData.get("message")) newErrors.message = "Il messaggio è obbligatorio.";

        return newErrors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        formData.append("access_key", "80394403-01ba-42d5-891d-67cf8f56faf9");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: "Inviato con successo!",
                    icon: "success",
                    confirmButtonText: 'Chiudi',
                    confirmButtonColor: '#F97316',
                    customClass: {
                        confirmButton: 'rounded-full'
                    }
                });
                event.target.reset();
                setErrors({});
            } else {
                Swal.fire({
                    title: 'Errore!',
                    text: 'Riprova a compilare il form e rinviarlo!',
                    icon: 'error',
                    confirmButtonText: 'Chiudi',
                    confirmButtonColor: '#F97316',
                    customClass: {
                        confirmButton: 'rounded-full'
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Errore di rete!',
                text: 'Si è verificato un problema con la connessione. Riprova più tardi.',
                icon: 'error',
                confirmButtonText: 'Chiudi',
                confirmButtonColor: '#F97316',
                customClass: {
                    confirmButton: 'rounded-full'
                },
            });
        }
    };

    return (
        <div className='fixed inset-0 flex justify-center h-screen w-screen items-center bg-black/50 z-50'>
            <div className="flex justify-center items-center p-5 z-50 relative">
            <button onClick={onClose} className="absolute top-10 right-10 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full duration-500 hover:bg-red-700">✕</button>                <form onSubmit={onSubmit} noValidate className="bg-gray-50 shadow-2xl p-10 rounded-3xl lg:w-[calc(500px)]">
                    <h1 className="text-green-500 text-2xl pb-10">Contattami!</h1>
                    <div className="mb-4 flex justify-between">
                        <div className="w-5/12">
                            <input name="name" type="text" placeholder=" Nome" className="pl-5 h-14 w-full border-2 rounded-md border-green-500" />
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="w-5/12">
                            <input name="lastname" type="text" placeholder=" Cognome" className="pl-5 h-14 w-full border-2 rounded-md border-green-500" />
                            {errors.lastname && <p className="text-red-600 text-sm mt-1">{errors.lastname}</p>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <input name="email" type="email" placeholder=" Email" className="pl-5 h-14 w-full border-2 rounded-md border-green-500" />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <input name="number" type="tel" maxLength="10" placeholder=" Numero di telefono" className="pl-5 h-14 w-full border-2 rounded-md border-green-500" />
                        {errors.number && <p className="text-red-600 text-sm mt-1">{errors.number}</p>}
                    </div>
                    <div className="mb-4">
                        <textarea name="message" placeholder=" Scrivi il tuo messaggio" className="pl-5 pt-2 h-40 w-full border-2 rounded-md border-green-500 resize-none"></textarea>
                        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="flex justify-center items-center w-28 h-10 bg-green-400 text-green rounded-full hover:bg-green-900 duration-500 text-white  ">Invia</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
