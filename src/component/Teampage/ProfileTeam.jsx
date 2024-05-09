import React, { useEffect, useContext } from 'react'
// import CardProfile from '../../component/Teampage/CardProfile'
import CardProfileAlt from './CardProfileAlt'
import CardProfileDouble from './CardProfileDouble'
import AOS from 'aos'
import Profile1 from '../../assets/profile1.png'
import Profile2 from '../../assets/profile2.png'
import Profile3 from '../../assets/profile3.png'
import Profile4 from '../../assets/profile4.png'
import Profile5 from '../../assets/profile5.png'
import Profile6 from '../../assets/profile6.png'
import Profile7 from '../../assets/profile7.png'
import Profile8 from '../../assets/profile8.png'
import Profile9 from '../../assets/profile9.png'
import { LanguageContext } from '../../utils/LanguageContext';

const ProfileTeam = () => {
    const { t } = useContext(LanguageContext);
    useEffect(() => {
        AOS.init({
            once: true,
        })
    }, [])

    return (
        <div className="container mx-auto px-6 py-6 ">
            <div>
                <h1 className='text-center font-semibold text-4xl my-16' data-aos="fade-up" data-aos-duration='1500' >{t('commisioners')}</h1>
                <div className="grid md:grid-cols-2 gap-12 -mx-2  w-auto items-center " data-aos="fade-up" data-aos-duration='1500' >
                    <CardProfileAlt
                        name="Dr. Ir. I Wayan Nurjaya, M.Sc."
                        position={t('commisioners1')}
                        image={Profile1}
                        description={t('desccommisioners1')}
                    />
                    <CardProfileAlt
                        name="M. Ronald David, S.E."
                        position={t('commisioners2')}
                        image={Profile2}
                        description={t('desccommisioners2')}
                    />
                </div>
            </div>
            <div>
                <h1 className='text-center font-semibold text-4xl my-16' data-aos="fade-up" data-aos-duration='1500'>{t('directors')}</h1>
                <div className="grid md:grid-cols-2 gap-12 -mx-2" data-aos="fade-up" data-aos-duration='1500'>
                    <CardProfileAlt
                        name="Dr. Catur Prasetyo, S.S.T.Par., M.Si."
                        position={t('directors1')}
                        image={Profile3}
                        description={t('descdirectors1')}
                    />
                    <CardProfileDouble
                        name="Kaisar Akhir, S.I.K., M.Sc., M.B.A, CTBE."
                        position={t('directors2')}
                        position2={t('directors22')}
                        image={Profile4}
                        description={t('descdirectors2')}
                    />
                </div>
            </div>
            <div class="flex justify-center items-center">
                <div>
                    <h1 className='text-center font-semibold text-4xl my-16' data-aos="fade-up" data-aos-duration='1500'>{t('managers')}</h1>
                    <div className="grid md:grid-cols-2 gap-12 -mx-2 mb-24" data-aos="fade-up" data-aos-duration='1500'>
                        <CardProfileAlt
                            name="Mattoviani, S.M."
                            position={t('managers1')}
                            image={Profile5}
                            description={t('descmanagers1')}
                        />
                        <CardProfileAlt
                            name="Aron Jose Manuel Pakpahan, S.T."
                            position={t('managers2')}
                            image={Profile6}
                            description={t('descmanagers2')}
                        />
                    </div>
                    <div class="grid lg:grid-cols-1 md:px-36 lg:px-72 gap-12 mx-auto mt-16" data-aos="fade-up" data-aos-duration="1500">
                        <CardProfileAlt
                            name="Mohamad Afif Dzulqifli, S.Pi."
                            position={t('managers3')}
                            image={Profile7}
                            description={t('descmanagers3')}
                        />
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center font-semibold text-4xl my-16' data-aos="fade-up" data-aos-duration='1500'>{t('developers')}</h1>
                {/* <div className="grid lg:grid-cols-1 md:px-36 lg:px-72 gap-12 mx-auto" data-aos="fade-up" data-aos-duration='1500'> */}
                <div className="grid md:grid-cols-2 gap-12 -mx-2 mb-24" data-aos="fade-up" data-aos-duration='1500'>
                    <CardProfileAlt
                        name="Alya Izzah Zalfa Rihadah Ramadhani Nirwana Putri"
                        position={t('developers1')}
                        image={Profile8}
                        description={t('descdevelopers1')}
                    />
                    <CardProfileAlt
                        name="Muhamad Sultan Faturahman"
                        position={t('developers1')}
                        image={Profile9}
                        description={t('descdevelopers2')}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileTeam
