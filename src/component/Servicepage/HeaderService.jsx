import React, { useEffect, useContext } from 'react'
import BgService from '../../assets/header-ser.png'
import AOS from 'aos'
import { LanguageContext } from '../../utils/LanguageContext';

const HeaderService = () => {
    const { t } = useContext(LanguageContext);
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500
        })
    }, [])

    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
            <div className="container mx-auto px-6 md:px-20 -mt-10 mb-20 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8" data-aos='fade-right'>
                    <p className="text-white font-bold text-3xl lg:text-5xl mb-6 text-team service-mt">{t('servicetitle')}</p>
                    <p className="text-white text-l sm:text-lg mb-8">
                        {t('servicetitle2')}
                    </p>
                </div>
                <div className="md:w-1/2" data-aos='fade-left'>
                    <img className="rounded-lg " src={BgService} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderService
