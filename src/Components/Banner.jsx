import { Link } from 'react-scroll';

const Banner = ({banner, heading, subheading, btn1}) => {
  return (
    <div><div  className='gradientBg rounded-xl rounded-br-[80px] md:p-9 py-9'>
    <div className='flex flex-col md:flex-row-reverse justify-between items-center grp-10'>
       {/* banner image */}
       <div>
          <img src={banner} alt="" className='lg:h-[386px]'  />
       </div>
       {/* banner content*/}
       <div className="md:w-3/5">
           <h3 className='md:text-6xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading} </h3>
           <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
           <div className='space-x-5 space-y-4'>
           <Link to="devis" smooth={true} duration={500}>
             <button className='btnPrimary'>{btn1}</button>
          </Link>
           </div>
       </div>
       


    </div>
  </div></div>
  )
}

export default Banner