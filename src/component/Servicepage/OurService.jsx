import React, { useEffect, useContext } from 'react'
// import Service0 from '../../assets/service.png'
import Service1 from '../../assets/service1.png'
import Service2 from '../../assets/service2.png'
import Service3 from '../../assets/service3.png'
import Service4 from '../../assets/service4.png'
import { LanguageContext } from '../../utils/LanguageContext';
import AOS from 'aos'

const OurService = () => {
    const { t } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500
        })
    }, [])

    return (
        <div>
            {/* <div className="flex flex-wrap justify-center items-center -mt-96 sm:-mt-72 lg:-mt-32 p-1 lg:py-24 sm:p-6 md:-mb-16 md:px-20">
                <div className="w-full lg:w-1/2 p-8" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service0} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
                <div className="flex mt-14 flex-col w-full lg:w-1/2 p-8 text-primary-color event-mt lg:mt-0" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center text-2xl lg:text-left font-bold sm:text-4xl md:-mt-20 mb-4 lg:mt-20">{t('certificationservice')}</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-4">{t('certificationservicesub')}</p>
                    <hr />
                    <ul className="text-l mt-4 sm:text-2xl bg-white font-medium mb-8 md:px-12 text-center lg:text-left  lg:list-disc">
                        <li className='mb-2'>{t('becdex')}</li>
                        <li className='mb-2'>{t('profcertif')}</li>
                    </ul>
                </div>
            </div> */}
            <div className="flex -mt-10 flex-wrap justify-center items-center bg-cover bg-center min-h-screen md:px-20 p-1 sm:p-6">
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center text-2xl lg:text-left font-bold sm:text-4xl mb-4 lg:mt-20">{t('digitaltek')}</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-4">{t('digiteksub')}</p>
                    <hr />
                    <ul className="text-l mt-4 sm:text-2xl bg-white font-medium text-center lg:text-left  lg:list-disc mb-8 md:px-12 rounded-xl">
                        <li className='mb-2'>{t('mobileapp')}</li>
                        <li className='mb-2'>{t('website')}</li>
                        <li className='mb-2'>{t('bigdata')}</li>
                        <li className='mb-2'>{t('multimedia')}</li>
                        <li className='mb-2'>{t('sosmed')}</li>
                        <li className='mb-2'>{t('digitalmark')}</li>
                        <li className='mb-2'>{t('ecomm')}</li>
                        <li className='mb-2'>{t('rov')}</li>
                        <li className='mb-2'>{t('subsea')}</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 p-8" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service1} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center -mt-96 sm:-mt-72 lg:-mt-32 p-1 lg:py-24 sm:p-6 md:-mb-16 md:px-20">
                <div className="w-full lg:w-1/2 p-8" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service2} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
                <div className="flex mt-14 flex-col w-full lg:w-1/2 p-8 text-primary-color event-mt lg:mt-0" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center text-2xl lg:text-left font-bold sm:text-4xl md:-mt-20 mb-4 lg:mt-20">{t('eventorg')}</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-4">{t('eventorgsub')}</p>
                    <hr />
                    <ul className="text-l mt-4 sm:text-2xl bg-white font-medium mb-8 md:px-12 text-center lg:text-left  lg:list-disc">
                        <li className='mb-2'>{t('meeting')}</li>
                        <li className='mb-2'>{t('incentives')}</li>
                        <li className='mb-2'>{t('conference')}</li>
                        <li className='mb-2'>{t('exhibition')}</li>
                        <li className='mb-2'>Edutrip
                        </li>
                        <li className='mb-2'>Festival</li>
                        <li className='mb-2'>{t('competition')}
                        </li>
                        <li className='mb-2'>{t('creative')}</li>
                        <li className='mb-2'>{t('virtual')}</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-wrap justify-center p-1 sm:p-6 -mt-12 lg:-mt-20 consulting-mt md:px-20 items-center lg:py-24" >
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center text-2xl lg:text-left font-bold md:mt-10 sm:text-4xl mb-4 lg:mt-10">{t('consulting')}</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-2">{t('consultingsub')}
                    </p>
                    <hr />
                    <ul className="text-l mt-4 sm:text-2xl font-medium bg-white text-center lg:text-left  lg:list-disc mb-8 md:px-12">
                        <li className='mb-4'>{t('becdex')}</li>
                        <li className='mb-4'>{t('industrial')}</li>
                        <li className='mb-4'>{t('business')}</li>
                        <li className='mb-4'>{t('tourism')}</li>
                        <li className='my-4'>{t('creatives')}</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 p-8 lg:mt-10" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service3} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center -mt-96 sm:-mt-64 md:-mt-80 lg:-mt-12 p-1 sm:p-6 bg-cover bg-center md:px-20 min-h-screen lg:py-24">
                <div className="w-full lg:w-1/2 p-8 lg:-mt-10" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service4} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color edu-mt -mt-96 lg:-mt-20" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center mt-96 text-2xl lg:text-left font-bold sm:text-4xl md:-mt-4 mb-4">{t('edutrain')}</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-2 ">{t('edutrainsub')}</p>
                    <hr />
                    <ul className="text-l sm:text-2xl font-medium p-2 md:p-6 bg-white text-center lg:text-left  lg:list-disc md:px-12 ">
                        <li className='my-3'>{t('youth')}</li>
                        <li className='mb-3'>{t('incubation')}</li>
                        <li className='mb-3'>{t('profcertif')}</li>
                        <li className='mb-3'>{t('career')}</li>
                        <li className='my-3'>{t('crew')}</li>
                        <li className='my-3'>{t('higher')}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default OurService
