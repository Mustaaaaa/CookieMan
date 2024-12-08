import { useState } from "react";

const Card = ({ title, subtitle, description, link, isExpanded, onToggle }) => (
    <div
        className="p-2 lg:p-6 flex flex-col justify-center lg:justify-start lg:shadow-none shadow-2xl bg-white/50 rounded-2xl lg:hover:cursor-default hover:cursor-pointer transition-all duration-300"
        onClick={onToggle}
    >
        <p className="text-lg text-green-400 font-bold mb-2">{title}</p>
        <p className="mb-2">{subtitle}</p>
        <div className={`${isExpanded ? "block" : "hidden"} lg:block`}>
            <p className="font-extralight mb-4">{description}</p>
            <a
                href={link}
                className="bg-green-400 text-white text-sm font-bold w-[calc(111px)] text-center px-3 py-1 rounded-full shadow-2xl"
            >
                SCOPRI DI PIÙ
            </a>
        </div>
    </div>
);

const Resource = () => {
    const [expandedCardIndex, setExpandedCardIndex] = useState(null);

    const handleCardToggle = (index) => {
        setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const cards = [
        {
            title: "Generatore di Privacy e Cookie Policy",
            subtitle: "Crea la tua privacy e cookie policy in pochi minuti.",
            description:
                "Personalizzabile grazie a oltre 2000 clausole in 14 lingue, aggiornate automaticamente se la legge cambia. Il nostro generatore ti permette di redigere un documento in pochi minuti e di integrarlo perfettamente sul tuo sito o la tua app.",
            link: "/",
        },
        {
            title: "Privacy Controls and Cookie Solution",
            subtitle:
                "Gestisci le preferenze di consenso come richiesto dalla Direttiva ePrivacy, dal GDPR, dal CPRA (modifica al CCPA) e dalla LGPD.",
            description:
                "La nostra soluzione ti permette di mostrare un cookie banner/banner di consenso completamente personalizzabile, raccogliere il consenso ai cookie, implementare il blocco preventivo (incluso il blocco automatico), impostare le preferenze pubblicitarie e altro ancora.",
            link: "/",
        },
        {
            title: "Generatore di Termini e Condizioni",
            subtitle: "Crea i tuoi termini e condizioni in pochi minuti.",
            description:
                "Personalizzabile grazie a oltre 100 clausole pre-configurate, disponibile in 14 lingue, potente e accurata, la nostra soluzione è in grado di gestire anche gli scenari più complessi. Ideale per e-commerce, marketplace, SaaS, app e altro ancora.",
            link: "/",
        },
        {
            title: "Generatore di Privacy e Cookie Policy",
            subtitle: "Crea la tua privacy e cookie policy in pochi minuti.",
            description:
                "Personalizzabile grazie a oltre 2000 clausole in 14 lingue, aggiornate automaticamente se la legge cambia. Il nostro generatore ti permette di redigere un documento in pochi minuti e di integrarlo perfettamente sul tuo sito o la tua app.",
            link: "/",
        },
        {
            title: "Privacy Controls and Cookie Solution",
            subtitle:
                "Gestisci le preferenze di consenso come richiesto dalla Direttiva ePrivacy, dal GDPR, dal CPRA (modifica al CCPA) e dalla LGPD.",
            description:
                "La nostra soluzione ti permette di mostrare un cookie banner/banner di consenso completamente personalizzabile, raccogliere il consenso ai cookie, implementare il blocco preventivo (incluso il blocco automatico), impostare le preferenze pubblicitarie e altro ancora.",
            link: "/",
        },
        {
            title: "Generatore di Termini e Condizioni",
            subtitle: "Crea i tuoi termini e condizioni in pochi minuti.",
            description:
                "Personalizzabile grazie a oltre 100 clausole pre-configurate, disponibile in 14 lingue, potente e accurata, la nostra soluzione è in grado di gestire anche gli scenari più complessi. Ideale per e-commerce, marketplace, SaaS, app e altro ancora.",
            link: "/",
        },
    ];

    return (
        <div className="py-16 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-3">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        link={card.link}
                        isExpanded={expandedCardIndex === index}
                        onToggle={() => handleCardToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Resource;
