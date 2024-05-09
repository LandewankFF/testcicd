import React, { useContext } from 'react';
import { LanguageContext } from '../../utils/LanguageContext';
import sector from '../../assets/detail-sector.svg';
import location from '../../assets/detail-location.svg';
import getInitialData from '../../utils/CatalougeData';

const CardCatalogue = () => {
  const { t } = useContext(LanguageContext);
  const initialData = getInitialData();

  const handleDetailClick = (id) => {
    window.location.href = `/detail/${id}`;
  };

  return (
    <div
      className="container mx-auto flex flex-col justify-between mb-16 pb-10"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h1 className="text-primary-color text-center font-bold text-2xl sm:text-4xl my-11">
        {t('startuplist')}
      </h1>

      <div className="mx-auto grid gap-7 justify-center sm:grid-cols-2 lg:grid-cols-4">
        {initialData.map((CardCatalogue) => (
          <div
            key={CardCatalogue.id}
            className="p-3 border rounded w-full md:w-64 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-16 h-16"
                src={CardCatalogue.logo}
                alt={CardCatalogue.name}
              />
              <div>
                <h2 className="text-xl font-medium mb-3 text-sky-600">
                  {CardCatalogue.name}
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <img className="w-5" src={sector} alt="" />
                  <h3 className="text-sm font-light">
                    {CardCatalogue.sector}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <img className="w-5" src={location} alt="" />
                  <h3 className="text-sm font-light">
                    {CardCatalogue.location}
                  </h3>
                </div>
                <button
                  className="h-10 w-full flex items-center justify-center font-medium text-white bg-secondary-color rounded-md text-sm hover:bg-primary-color hover:text-white hover:transition-all duration-300"
                  onClick={() => handleDetailClick(CardCatalogue.id)}
                >
                  <span>{t('buttonText')}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCatalogue;
