import Resource from "./Resource";
const ResourcesSection = () => {
  return (
    <div id="ResourcesSection" className="max-w-[calc(1440px)] h-screen z-10">
          <p className="font-normal text-4xl text-green-400 lg:block hidden">UN’UNICA SOLUZIONE PER LA COMPLETA CONFORMITA’ NORMATIVA </p>
          <a href="/" className="font-normal text-3xl text-black/50 lg:hidden block text-center hover:cursor-pointer z-10">Scopri di più</a>
          <Resource/>
    </div>
  )
}

export default ResourcesSection
