import React from 'react';
import {
    BannerBiggerText,
    BannerIcon,
    BannerLinkDetails,
    BannerLinksContainer,
    BannerSmallerText,
    Container,
    DescriptionContainer,
    Link,
    BackgroundCover,
    DescriptionTitle,
    DescriptionText,
    CrownsBackground,
    BlackLine
} from './styles';
import { Row, Col } from 'antd';
import BackgroundWhatsapp from '../../assets/images/background-whatsapp.png';
import BackgroundInstagram from '../../assets/images/background-instagram.png';
import BackgroundFacebook from '../../assets/images/background-facebook.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import CrownsBarImage from '../../assets/images/crowns-bar.png';

export default () => {
    return (
        <Container>
            <Row gutter={24} style={{ height: '100%' }}>
                <Col xl={16} lg={16} md={24}>
                    <BannerLinksContainer>
                        <Row gutter={24}>
                            <CrownsBackground>
                                <img src={CrownsBarImage} />
                            </CrownsBackground>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                                <a href="#">
                                    <Link>
                                        <BackgroundCover />
                                        <img src={BackgroundWhatsapp} />
                                        <BannerLinkDetails>
                                            <BannerIcon>
                                                <FontAwesomeIcon icon={faWhatsapp} />
                                            </BannerIcon>
                                            <div>
                                                <BannerSmallerText>Fale conosco</BannerSmallerText>
                                                <BannerBiggerText>Whatsapp</BannerBiggerText>
                                            </div>
                                        </BannerLinkDetails>
                                    </Link>
                                </a>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                                <a href="#">
                                    <Link>
                                        <BackgroundCover />
                                        <img src={BackgroundInstagram} />
                                        <BannerLinkDetails>
                                            <BannerIcon>
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </BannerIcon>
                                            
                                            <div>
                                                <BannerSmallerText>Siga-nos no</BannerSmallerText>
                                                <BannerBiggerText>Instagram</BannerBiggerText>
                                            </div>
                                        </BannerLinkDetails>
                                    </Link>
                                </a>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                                <a href="#">
                                    <Link>
                                        <BackgroundCover />
                                        <img src={BackgroundFacebook} />
                                        <BannerLinkDetails>
                                            <BannerIcon>
                                                <FontAwesomeIcon icon={faFacebookSquare} />
                                            </BannerIcon>
                                            <div>
                                                <BannerSmallerText>Siga-nos no</BannerSmallerText>
                                                <BannerBiggerText>Facebook</BannerBiggerText>
                                            </div>
                                        </BannerLinkDetails>
                                    </Link>
                                </a>
                            </Col>
                        </Row>
                    </BannerLinksContainer>
                </Col>
                <Col xl={8} lg={8} md={24}>
                    <DescriptionContainer>
                        <div>
                            <DescriptionTitle>Siga nossas redes sociais</DescriptionTitle>
                            <DescriptionText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </DescriptionText>
                        </div>

                        <BlackLine />
                    </DescriptionContainer>

                </Col>
            </Row>
        </Container>
    );
}