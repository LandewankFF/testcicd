import React, { useContext } from 'react'
import Logo1 from '../../assets/Logo1.png'
import Logo2 from '../../assets/Logo2.png'
import Logo3 from '../../assets/Logo3.png'
import { LanguageContext } from '../../utils/LanguageContext';

const RegisterAt = () => {
    const { t } = useContext(LanguageContext);
    return (
        <div className="flex flex-col items-center justify-center py-2 mb-8" data-aos='fade-up' data-aos-duration='1000'>
            <h1 className="text-2xl font-bold text-primary-color mb-4">{t('registerat')}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-6">
                <img src={Logo1} alt="Blue Starthub" className="rounded-lg mx-auto w-44 object-cover " />
                <img src={Logo2} alt="Pengayoman" className="rounded-lg mx-auto w-20 object-cover" />
                <img src={Logo3} alt="Startup" className="rounded-lg lg:ml-12 mx-auto w-20 object-cover" />
            </div>
        </div>
    )
}

export default RegisterAt
