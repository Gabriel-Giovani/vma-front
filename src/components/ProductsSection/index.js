import React, { useEffect, useState } from 'react';
import {
    BiggerText,
    CategorieButton,
    CategoriesList,
    ColumnProductCategories,
    ColumnProducts,
    Container,
    SmallerText,
    TitleColumnCategories,
    SmallerTextContainer,
    SmallerBlackLine,
    YellowLine
} from './styles';
import { Row, Col, Divider } from 'antd';
import ProductImageExample from '../../assets/images/product-example.png';
import { get } from '../../services/api';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        if(selectedCategory)
            getProductsByCategory();
    }, [selectedCategory]);

    const getCategories = async () => {
        const reqData = await get('/categories/all');

        if(reqData) {

            setCategories(reqData);
            
            if(reqData.length > 0) {
                setSelectedCategory(reqData[0].id);
            }
        }
    };

    const getProductsByCategory = async () => {
        const reqData = await get(`/products/category/${selectedCategory}`);

        if(reqData) {
            setProducts(reqData);
        }
    };

    return (
        <Container id="products">
            <Row gutter={24} style={{ height: '100%' }}>
                <Col xl={8} lg={10} md={24} style={{ height: '100%' }}>
                    <ColumnProductCategories>
                        <TitleColumnCategories>
                            <SmallerTextContainer>
                                <SmallerBlackLine />
                                <SmallerText>Destaque</SmallerText>
                            </SmallerTextContainer>
                            <BiggerText>Produtos</BiggerText>
                            <div style={{ width: '40%' }}>
                                <Divider style={{ color: '#000', borderTop: '1px solid #000' }} />
                            </div>
                        </TitleColumnCategories>

                        <CategoriesList>
                            <YellowLine />
                            {
                                categories.length > 0 &&
                                    categories.map((category, index) => (
                                        <CategorieButton
                                            key={index}
                                            className={selectedCategory === category.id && '-selected'}
                                            onClick={() => setSelectedCategory(category.id)}
                                        >
                                            { category.name }
                                        </CategorieButton>
                                    ))
                            }
                        </CategoriesList>
                    </ColumnProductCategories>
                </Col>
                <Col xl={16} lg={14} md={24} style={{ height: '100%' }}>
                    <ColumnProducts>
                    <Swiper
                        slidesPerView={2}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }
                        }}
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                        style={{ marginBottom: '20px' }}
                    >
                        {
                            products.length > 0 &&
                                products.map((product, index) => {
                                    if(index <= 3)
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className='item'>
                                                    <img src={product.photo} />
                                                </div>
                                            </SwiperSlide>
                                        )
                                })
                        }
                    </Swiper>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 2200,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {
                            products.length > 0 &&
                                products.map((product, index) => {
                                    if(index > 3)
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className='item'>
                                                    <img src={product.photo} />
                                                </div>
                                            </SwiperSlide>
                                        )
                                })
                        }
                    </Swiper>
                    </ColumnProducts>
                </Col>
            </Row>
        </Container>
    );
}