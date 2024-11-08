import featuredImg from '../assets/feature1.jpg'

const Feature = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto " id="feature">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="lg:w-1/4">
                <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Un outil unique de devis gratuit</h3>
                <p className="text-base text-tartiary">Cette interface vous permet de personnaliser entièrement votre devis (nom, montant, prestation, couleur) et
                     de le télécharger en PDF sans laisser vos coordonnées, ou de le recevoir par email. Une alternative pratique aux modèles Word ou Excel.
                </p>
            </div>
            {/* featured cards */}
            <div className="w-full lg:w-3/4">
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center
                 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                    <div>
                        <img src={featuredImg} alt="" />                  
                        <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                        Rapide</h5>
                    </div>
                </div>
                <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center
                 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer
                 md:mt-16'>
                    <div>
                        <img src={featuredImg} alt="" />                  
                        <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                        Professionnel</h5>
                    </div>
                </div>
                <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center
                 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                    <div>
                        <img src={featuredImg} alt="" />                  
                        <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                        Stockage sécurisé</h5>
                    </div>
                </div>
            </div>   
            </div>
        </div>
    </div>
  )
}

export default Feature