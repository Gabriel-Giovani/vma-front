import React, { useEffect, useState } from 'react';
// import { Carousel, Radio } from 'antd';
import {
    CarouselContainer,
    CarouselItem,
    WhatsappLink,
    WhatsappLinkDescription,
    DescriptionBiggerText,
    DescriptionSmallerText,
    SocialLinksBar
} from './styles';
import CarouselImageExample from '../../assets/images/carousel-image-example.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { get } from '../../services/api';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        getAllBanners();
    }, []);

    const getAllBanners = async () => {
        const reqData = await get('/banners/all');

        if(reqData)
            setBanners(reqData);
    };

    return (
        <CarouselContainer id="home">
            <Carousel
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                autoPlay
            >
                <div>
                    <img src={CarouselImageExample} />
                </div>
                <div>
                    <img src={CarouselImageExample} />
                </div>
                <div>
                    <img src={CarouselImageExample} />
                </div>
                <div>
                    <img src={CarouselImageExample} />
                </div>
                <div>
                    <img src={CarouselImageExample} />
                </div>
            </Carousel>

            <WhatsappLink href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
                <WhatsappLinkDescription>
                    <DescriptionBiggerText>Atendimento</DescriptionBiggerText>
                    <DescriptionSmallerText>Saiba mais +</DescriptionSmallerText>
                </WhatsappLinkDescription>
            </WhatsappLink>

            <SocialLinksBar>
                <p>Faça parte da nossa rede social e receba novidades</p>
                <div>
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </div>
            </SocialLinksBar>
        </CarouselContainer>
    );
}