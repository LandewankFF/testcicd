import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../utils/LanguageContext';
import getInitialData from '../../utils/CatalougeData';
import sector from '../../assets/detail-sector.svg';
import location from '../../assets/detail-location.svg';
import AOS from 'aos';

const DetailCatalouge = () => {
  const { t } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  });

  const { id } = useParams();
  const initialData = getInitialData();

  const selectedItem = initialData.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div
      className="container mx-auto px-8 md:px-20 mt-16 mb-16 aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className="flex items-center p-4 border rounded gap-6 mb-6"
        data-aos="fade-left"
      >
        <img src={selectedItem.logo} alt="" className="w-44" />
        <div>
          <p className="text-xs font-normal">
            {t('certifiedOn')}: {selectedItem.certified}
          </p>
          <h2 className="text-2xl font-medium mb-6 text-sky-500">
            {selectedItem.name}
          </h2>
          <a
            href={selectedItem.link}
            target="_blank"
            className="px-4 py-2 font-light text-white bg-secondary-color rounded-md text-md hover:bg-primary-color hover:text-white hover:transition-all duration-300"
            rel="noopener noreferrer"
          >
            {t('goto')} {selectedItem.name}
          </a>
        </div>
      </div>
      <div className="p-4 border rounded gap-6 mb-6">
        <div>
          <h3 className="text-xl font-medium mb-4">{t('description')}</h3>
          <p className="text-md font-light">{t(selectedItem.description)}</p>
        </div>
        <div
          className="flex flex-col md:flex-row justify-center gap-10 mt-8"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-col justify-center items-center">
            <img className="h-16" src={sector} alt="" />
            <h3 className="text-md font-medium text-sky-500 mt-4">
              {t('sector')}
            </h3>
            <p className="text-md font-light">{selectedItem.sector}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="h-16" src={location} alt="" />
            <h3 className="text-md font-medium text-sky-500 mt-4">
              {t('location')}
            </h3>
            <p className="text-md font-light">{selectedItem.location}</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded gap-6">
        <div>
          <h3 className="text-xl font-medium mb-4">{t('primaryOffice')}</h3>
          <p className="text-md font-light">{selectedItem.address}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCatalouge;
