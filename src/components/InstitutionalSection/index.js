import React from 'react';
import {
    Container,
    SectionHeader,
    TitleBox,
    RedLine,
    TitleText,
    Description,
    CategoriesList,
    CategoryButton,
    PlayIcon,
    ProductsList,
    ProductCard,
    GreyLine,
    BoxProductName,
    WeightInfos,
    InfoTitle,
    InfoBadge,
    ProductDetails,
    DetailBox,
    DetailTitle,
    DetailText
} from './styles';
import CrownLogo from '../../assets/images/crown-logo.png';
import InstitutionalImage from '../../assets/images/institutional-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PlayIconImage from '../../assets/images/play-icon.png';
import { Col, Row } from 'antd';
import ProductExample from '../../assets/images/product-example.png';

export default () => {
    return (
        <Container id="institucional">
            <SectionHeader>
                <TitleBox>
                    <RedLine />
                    <TitleText>Destaque</TitleText>
                </TitleBox>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam.
                </Description>
            </SectionHeader>

            <CategoriesList>
                <PlayIcon src={PlayIconImage} />
                <CategoryButton className='-selected'>Pão</CategoryButton>
                <CategoryButton>Artesanais</CategoryButton>
                <CategoryButton>Doces</CategoryButton>
                <CategoryButton>Outros</CategoryButton>
            </CategoriesList>

            <ProductsList>
                <Row gutter={24}>
                    <Col span={6}>
                        <ProductCard>
                            <img src={ProductExample} />

                            <GreyLine />
                            <BoxProductName>
                                Pipoca caramelizada
                            </BoxProductName>

                            <WeightInfos>
                                <InfoTitle>
                                    Peso Liq. Disponível: 
                                </InfoTitle>
                                <InfoBadge>50g</InfoBadge>
                                <InfoBadge>290g</InfoBadge>
                                <InfoBadge>400g</InfoBadge>
                            </WeightInfos>

                            <ProductDetails>
                                <Row gutter={24}>
                                    <Col span={12} style={{ paddingRight: 0 }}>
                                        <DetailBox>
                                            <DetailTitle>Sabor: </DetailTitle>
                                            <DetailText>Doce de milho</DetailText>
                                        </DetailBox>
                                    </Col>
                                    <Col span={12} style={{ paddingLeft: 0 }}>
                                        <DetailBox>
                                            <DetailTitle>Marca: </DetailTitle>
                                            <DetailText>Clac</DetailText>
                                        </DetailBox>
                                    </Col>
                                </Row>
                                <Row>
                                    <DetailBox>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                    </DetailBox>
                                </Row>
                            </ProductDetails>
                        </ProductCard>
                    </Col>
                    <Col span={6}>
                        <ProductCard>
                            <img src={ProductExample} />

                            <GreyLine />
                            <BoxProductName>
                                Pipoca caramelizada
                            </BoxProductName>

                            <WeightInfos>
                                <InfoTitle>
                                    Peso Liq. Disponível: 
                                </InfoTitle>
                                <InfoBadge>50g</InfoBadge>
                                <InfoBadge>290g</InfoBadge>
                                <InfoBadge>400g</InfoBadge>
                            </WeightInfos>

                            <ProductDetails>
                                <Row gutter={24}>
                                    <Col span={12} style={{ paddingRight: 0 }}>
                                        <DetailBox>
                                            <DetailTitle>Sabor: </DetailTitle>
                                            <DetailText>Doce de milho</DetailText>
                                        </DetailBox>
                                    </Col>
                                    <Col span={12} style={{ paddingLeft: 0 }}>
                                        <DetailBox>
                                            <DetailTitle>Marca: </DetailTitle>
                                            <DetailText>Clac</DetailText>
                                        </DetailBox>
                                    </Col>
                                </Row>
                                <Row>
                                    <DetailBox>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                    </DetailBox>
                                </Row>
                            </ProductDetails>
                        </ProductCard>
                    </Col>
                    <Col span={6}>
                        <ProductCard>
                            <img src={ProductExample} />

                            <GreyLine />
                            <BoxProductName>
                                Pipoca caramelizada
                            </BoxProductName>

                            <WeightInfos>
                                <InfoTitle>
                                    Peso Liq. Disponível: 
                                </InfoTitle>
                                <InfoBadge>50g</InfoBadge>
                                <InfoBadge>290g</InfoBadge>
                                <InfoBadge>400g</InfoBadge>
                            </WeightInfos>

                            <ProductDetails>
                                <Row gutter={24}>
                                    <Col span={12} style={{ paddingRight: 0 }}>
                                        <DetailBox>
                                            <DetailTitle>Sabor: </DetailTitle>
                                            <DetailText>Doce de milho</DetailText>
                                        </DetailBox>
                                    </Col>
                                    <Col span={12} style={{ paddingLeft: 0 }}>
                                        <DetailBox>
                                            <DetailTitle>Marca: </DetailTitle>
                                            <DetailText>Clac</DetailText>
                                        </DetailBox>
                                    </Col>
                                </Row>
                                <Row>
                                    <DetailBox>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                    </DetailBox>
                                </Row>
                            </ProductDetails>
                        </ProductCard>
                    </Col>
                    <Col span={6}>
                        <ProductCard>
                            <img src={ProductExample} />

                            <GreyLine />
                            <BoxProductName>
                                Pipoca caramelizada
                            </BoxProductName>

                            <WeightInfos>
                                <InfoTitle>
                                    Peso Liq. Disponível: 
                                </InfoTitle>
                                <InfoBadge>50g</InfoBadge>
                                <InfoBadge>290g</InfoBadge>
                                <InfoBadge>400g</InfoBadge>
                            </WeightInfos>

                            <ProductDetails>
                                <Row gutter={24}>
                                    <Col span={12} style={{ paddingRight: 0 }}>
                                        <DetailBox>
                                            <DetailTitle>Sabor: </DetailTitle>
                                            <DetailText>Doce de milho</DetailText>
                                        </DetailBox>
                                    </Col>
                                    <Col span={12} style={{ paddingLeft: 0 }}>
                                        <DetailBox>
                                            <DetailTitle>Marca: </DetailTitle>
                                            <DetailText>Clac</DetailText>
                                        </DetailBox>
                                    </Col>
                                </Row>
                                <Row>
                                    <DetailBox>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                        <DetailTitle>Cód 50g: </DetailTitle>
                                        <DetailText>254</DetailText>
                                    </DetailBox>
                                </Row>
                            </ProductDetails>
                        </ProductCard>
                    </Col>

                    ADICIONAR PAGINAÇÃO
                </Row>
            </ProductsList>
        </Container>
    );
}