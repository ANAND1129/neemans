import React from 'react'

const Brand = () => {
    const Snekers = [ 
        "THE HIPSTERS",
        "WHOOSH LITE SNEAKERS",
        "TREAD BASICS",
        "RETRO SLICK SNEAKERS",
        "THE REGULARS",
        "COMFY HUSTLERS",
        "COMMUTER BASICS",
        "COSMO COMFORT SNEAKERS",
        "GLOSSY GROOVE SNEAKERS",
        "CASUAL POP SNEAKERS",
        "CLASSIC SOLIDS",
        "DRESS SNEAKERS",
        "CHUNKY BLAZE SNEAKERS",
        "MAX HYBRID SNEAKERS",
        "URBAN CASUALS",
        "HIGH WAVE SNEAKERS",
        "SOLE MAX CASUALS",
      ];





return (
<div className='border absolute z-50 bg-white left-0 h-[800px] w-full mt-4 p-5 px-[13%]  overflow-y-scroll '>
<div className='flex mt-7 gap-[50%] '>
<div className=''>

  <div className='mt-4'>
      {Snekers.map((lists)=>(
          <p id='index' className='text-sm leading-10'>{lists}</p>
      ))}
  </div>
</div>

<div className=' flex w-[35%] gap-10 '>
  <div className='w-1/2'>
      <div className='border w-full h-[35%]'>

      </div>
      <div className=' text-center'>
      <h2 className='text-base'>NEW ARRIVALS</h2>
      <p className='text-xs'>WALKER'S HIGH</p>
      </div>
  </div>
  <div className='w-1/2'>
      <div className='border w-full h-[35%]'>

      </div>
      <div className=' text-center'>
      <h2 className='text-base'>BEST SELLER</h2>
      <p className='text-xs'>SPOTLIGHT SLIPONS</p>
      </div>
  </div>
</div>


</div>
</div>
)
}
export default Brand;