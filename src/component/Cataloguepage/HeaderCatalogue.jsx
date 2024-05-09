import React, { useEffect, useContext } from 'react';
import Cat from '../../assets/header-cat.png';
import AOS from 'aos';
import { LanguageContext } from '../../utils/LanguageContext';
// import { Link, useLocation } from 'react-router-dom'; //error di Link deteksi di test
// import { useLocation } from 'react-router-dom';

const HeaderCatalogue = () => {
  // const location = useLocation();
  // const isCatalogue = location.pathname === '/catalogue'; //error is catalog deteksi tets ci cd
  const { t } = useContext(LanguageContext);
  useE(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
      <div className="container -mt-10 mb-20 mx-auto px-4 lg:px-20 py-8 items-center flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8" data-aos="fade-right">
          <p className="text-white text-3xl font-bold sm:text-5xl mb-4 support-mt">
            {t('catalogueheader1')}
          </p>
          <p className="text-white text-m sm:text-lg mb-8">
            {t('catalogueheader2')}
          </p>
          <a
            href="https://becdex.com/home/catalog"
            target="_blank"
            className="px-4 py-2 font-medium text-primary-color bg-white rounded-md text-sm hover:bg-primary-color hover:text-white"
            rel="noreferrer"
          >
            {t('visitcatalogue')}
          </a>
        </div>
        <div className="md:w-1/2" data-aos="fade-left">
          <img className="rounded-lg w-90" src={Cat} alt="gambar" />
        </div>
      </div>
    </div>
  );
};

export default HeaderCatalogue;
