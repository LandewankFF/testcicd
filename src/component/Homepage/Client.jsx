import React, { useContext } from 'react'
import Log1 from '../../assets/log1.png'
import Log2 from '../../assets/log2.png'
import Log3 from '../../assets/log3.png'
import Log4 from '../../assets/log4.png'
import Log5 from '../../assets/log5.png'
import { LanguageContext } from '../../utils/LanguageContext';

const Client = () => {
    const { t } = useContext(LanguageContext);
    return (
        <div className="flex flex-col items-center justify-center py-8" data-aos='fade-up' data-aos-duration='1000'>
            <h1 className="text-2xl font-bold text-primary-color mb-8" >{t('ourclient')}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-16 lg:px-44 mb-6 items-center">
                <img src={Log1} alt="IBEC STEI" className="w-28 mx-11 lg:w-44"/>
                <img src={Log2} alt="Museum Kebaharian Jakarta" className="ml-8 sm:mr-8 w-44 lg:w-64"/>
                <img src={Log4} alt="Maritim Muda Nusantara" className="ml-9 w-36 sm:ml-2 md:ml-6 lg:w-44 lg:ml-2"/>
                <img src={Log3} alt="Bappenas" className="w-28 ml-12 lg:w-36 md:ml-0 2xl:-ml-10"/>
                <img src={Log5} alt="Ikan Segar" className="w-28 ml-12 lg:w-32 md:ml-0 2xl:-ml-24"/>
            </div>
        </div>

    )
}

export default Client
