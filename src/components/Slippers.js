import React from 'react'

const Slippers = () => {
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

const Slipons  = [
"DRESS SLIP ONS",
"GRIP FIT SLIP ONS",
"DAPPER LOAFERS",
"DRESS LOAFERS",
"SPOTLIGHT SLIP ONS",
"EVERYDAY BASIC SLIP ONS",
"COTTON SLIP ONS",
"SOLE MAX SLIP ONS",
"RELIVE KNIT SLIP ONS",
"RELIVE KNIT LOAFERS",
"WOOL LOAFERS"
];

const Athleisure = [
  "WALKER’S HIGH",
"EASE WALK SLIP ONS",
"EASE WALK SNEAKERS",
"LIGHT WALKERS",
"CASUAL TRAINERS",
"CITY SMART WALKERS"
];




return (
<div className='border absolute z-50 bg-white left-0 h-[800px] w-full mt-4 p-5 px-[13%]  overflow-y-scroll '>
<div className='flex mt-7 gap-[10%] '>
<div className=''>
  <h1 className='text-2xl'>FLIP FLOPS</h1>
  <div className='mt-4'>
      {Snekers.map((lists)=>(
          <p id='index' className='text-sm leading-10'>{lists}</p>
      ))}
  </div>
</div>
<div className=''>
<h1 className='text-2xl'>SLIDES</h1>
<div className='mt-4'>
      {Slipons.map((lists)=>(
          <p id='index' className='text-sm leading-10'>{lists}</p>
      ))}
  </div>
</div>
<div className=''>
<h1 className='text-2xl'>SANDLES</h1>
<div className='mt-4'>
      {Athleisure.map((lists)=>(
          <p id='index' className='text-sm leading-10'>{lists}</p>
      ))}
  </div>
</div>
<div className='flex w-[35%] gap-10 '>
  <div className='w-1/2'>
      <div className='border w-full h-[35%]'>

      </div>
      <div className='text-center'>
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

export default Slippers;