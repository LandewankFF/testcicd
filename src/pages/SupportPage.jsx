import React, { useContext } from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderSupport from '../component/Supportpage/HeaderSupport'
import BackToTopButton from '../component/BackToTop'
import Pdf1 from '../../src/assets/pdf/Company Profile.pdf'
import Pdf2 from '../../src/assets/pdf/Indonesia - Law of the Sea.pdf'
import Pdf3 from '../../src/assets/pdf/Indonesian Ocean Policy.pdf'
// import Pdf4 from '../../src/assets/pdf/Blue Economy Company Index - Research Article.pdf'
// import Pdf5 from '../../src/assets/pdf/Blue Economy Company Index - Proposal.pdf'
import CardSupport from '../component/Supportpage/CardSupport'
import { LanguageContext } from '../utils/LanguageContext';

const SupportPage = () => {

    const { t } = useContext(LanguageContext);
    return (
        <div>
            <NavBar />
            <HeaderSupport />
            <div className='container mx-auto flex flex-col justify-between mb-2 pb-10' data-aos='fade-up' data-aos-duration='1500'>
                <div className='text-primary-color mx-auto'>
                    <h1 className='text-center font-bold text-2xl sm:text-4xl my-11'>{t('essedownload')}</h1>
                </div>
            </div>
            <div className="mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <CardSupport
                    title={t('sertifcard1')}
                    pdf={Pdf1}
                />
                <CardSupport
                    title={t('sertifcard2')}
                    pdf={Pdf2}
                />
                <CardSupport
                    title={t('sertifcard3')}
                    pdf={Pdf3}
                />
            </div>
            <Footer />
            <BackToTopButton />
        </div>

    )
}

export default SupportPage
