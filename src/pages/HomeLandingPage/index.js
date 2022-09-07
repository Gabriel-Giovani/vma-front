import React, { useEffect } from 'react';
import Carousel from '../../components/Carousel';
import ContactForm from '../../components/ContactForm';
import DistributionSection from '../../components/DistributionSection';
import Footer from '../../components/Footer';
import HeaderMenu from '../../components/HeaderMenu';
import InstitutionalSection from '../../components/InstitutionalSection';
import ProductsSection from '../../components/ProductsSection';
import SocialNetworksSection from '../../components/SocialNetworksSection';
import LoaderPage from '../../components/LoaderPage';

export default () => {
    return (
        <>
            {/* <LoaderPage /> */}

            <HeaderMenu/>
            <Carousel/>
            <InstitutionalSection/>
            <ProductsSection/>
            <DistributionSection/>
            <SocialNetworksSection/>
            <ContactForm/>
            <Footer/>
        </>
    );
};