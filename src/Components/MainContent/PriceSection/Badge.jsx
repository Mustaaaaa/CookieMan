
const Badge = () => {
    const badges = ["GDPR", "CCPA", "LGPD", "CNIL"];
  return (
    <div className="hidden lg:flex flex-wrap gap-2 justify-end mr-20 mt-28">
      {badges.map((badge, index) => (
        <span
          key={index}
          className="bg-green-400 text-white text-sm font-bold w-[calc(71px)] text-center px-3 py-1 rounded-full shadow-2xl"
        >
          ✓{badge}
        </span>
      ))}
    </div>
  )
}

export default Badge
