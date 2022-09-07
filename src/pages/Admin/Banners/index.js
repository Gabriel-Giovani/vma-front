import React, { useEffect, useState } from 'react';
import {
    Container,
    WelcomeTitle,
    SubtitlePage,
    RegisterButton,
    ListWrapper
} from './styles';
import { Row, Col, Card, message, Pagination } from 'antd';
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import { del, get } from '../../../services/api';
import EmptySpace from '../../../components/EmptySpace';
import RegisterBannerModal from './RegisterBannerModal';
import DeleteBannerModal from './DeleteBannerModal';
import ButtonHover from '../../../components/ButtonHover';
import LoadingSpace from '../../../components/LoadingSpace';

export default () => {
    const [banners, setBanners] = useState([]);
    const [visibleRegisterBannerModal, setVisibleRegisterBannerModal] = useState(false);
    const [visibleDeleteBannerModal, setVisibleDeleteBannerModal] = useState(false);
    const [onEdit, setOndit] = useState(false);
    const [editableBanner, setEditableBanner] = useState(null);
    const [deletedBanner, setDeletedBanner] = useState(null);
    const [loadingData, setLoadingData] = useState(false);

    // Pagination
    const [pageSize, setPageSize] = useState(6);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxIndex, setMaxIndex] = useState(0);
    const [minIndex, setMinIndex] = useState(0);

    useEffect(() => {
        getBanners();
    }, []);

    const getBanners = async () => {
        if(!loadingData) {
            setLoadingData(true);

            const reqData = await get('/banners/all');
    
            if(reqData) {
                setBanners(reqData);
                setTotalPage(reqData.length / pageSize);
                setMinIndex(0);
                setMaxIndex(pageSize);
            }

            setTimeout(() => setLoadingData(false), 1000);
        }
    };

    const handlePaginationChange = (page) => {
        setCurrentPage(page);
        setMinIndex((page - 1) * pageSize);
        setMaxIndex(page * pageSize);
    };

    const createBanner = () => {
        setOndit(false);
        setVisibleRegisterBannerModal(true);
    };

    const editBanner = (banner) => {
        setOndit(true);
        setVisibleRegisterBannerModal(true);
        setEditableBanner(banner);
    };

    const openDeleteBannerModal = (banner) => {
        setDeletedBanner(banner);
        setVisibleDeleteBannerModal(true);
    };

    const deleteBanner = async () => {
        if(deletedBanner) {
            const req = await del(`/banner/${deletedBanner.id}`);
    
            if(req) {
                message.success('Banner removido com sucesso!');
                await getBanners();
                setVisibleDeleteBannerModal(false);
            }
        }
    };

    const onSaveBanner = async () => {
        await getBanners();
        setVisibleRegisterBannerModal(false);
    };

    return (
        <Container>
            <WelcomeTitle>Gerenciar Banners</WelcomeTitle>

            <SubtitlePage>
                <p className="descrition-screen">Crie, edite ou exclua banners abaixo:</p>

                <RegisterButton onClick={createBanner}>Cadastrar banner</RegisterButton>
            </SubtitlePage>

            <ListWrapper>
                {
                    loadingData ?
                        <LoadingSpace />
                    :
                    banners.length > 0 ?
                        banners.map((banner, index) => 
                            index >= minIndex &&
                            index < maxIndex && (
                                <Card key={index} className="card-item">
                                    <Row gutter={24}>
                                        <Col xs={24} sm={6} md={6} lg={6} xl={6} className='col-photo'>
                                            <img className='photo' src={banner.photo} />
                                        </Col>
                                        <Col xs={24} sm={14} md={14} lg={14} xl={14} className='col-name'>
                                            <h3 className='name'>{ banner.title }</h3>
                                        </Col>
                                        <Col xs={24} sm={4} md={4} lg={4} xl={4} className='col-actions'>
                                            <ButtonHover type='edit'>
                                                <EditOutlined onClick={() => editBanner(banner)} />
                                            </ButtonHover>
                                            <ButtonHover type='delete'>
                                                <DeleteOutlined onClick={() => openDeleteBannerModal(banner)} />
                                            </ButtonHover>
                                        </Col>
                                    </Row>
                                </Card>
                            )
                        )
                    :
                        <EmptySpace
                            title='Nenhum banner por aqui...'
                            text='Cadastre novos banners'
                            style={{ marginTop: '100px' }}
                        />
                }
                <Pagination
                    pageSize={pageSize}
                    current={currentPage}
                    total={banners.length}
                    onChange={handlePaginationChange}
                />
            </ListWrapper>

            <RegisterBannerModal
                visible={visibleRegisterBannerModal}
                onCancel={() => setVisibleRegisterBannerModal(false)}
                onConfirm={onSaveBanner}
                onEdit={onEdit}
                editableBanner={editableBanner}
            />

            <DeleteBannerModal
                visible={visibleDeleteBannerModal}
                onCancel={() => setVisibleDeleteBannerModal(false)}
                onConfirm={deleteBanner}
                deletedBanner={deletedBanner}
            />
        </Container>
    );
};