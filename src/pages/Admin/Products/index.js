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
import RegisterProductModal from './RegisterProductModal';
import DeleteProductModal from './DeleteProductModal';
import ButtonHover from '../../../components/ButtonHover';
import LoadingSpace from '../../../components/LoadingSpace';

export default () => {
    const [products, setProducts] = useState([]);
    const [visibleRegisterProductModal, setVisibleRegisterProductModal] = useState(false);
    const [visibleDeleteProductModal, setVisibleDeleteProductModal] = useState(false);
    const [onEdit, setOndit] = useState(false);
    const [editableProduct, setEditableProduct] = useState(null);
    const [deletedProduct, setDeletedProduct] = useState(null);
    const [loadingData, setLoadingData] = useState(false);

    // Pagination
    const [pageSize, setPageSize] = useState(6);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxIndex, setMaxIndex] = useState(0);
    const [minIndex, setMinIndex] = useState(0);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        if(!loadingData) {
            setLoadingData(true);

            const reqData = await get('/products/all');
    
            if(reqData) {
                setProducts(reqData);
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

    const createProduct = () => {
        setOndit(false);
        setVisibleRegisterProductModal(true);
    };

    const editProduct = (product) => {
        setOndit(true);
        setVisibleRegisterProductModal(true);
        setEditableProduct(product);
    };

    const openDeleteProductModal = (product) => {
        setDeletedProduct(product);
        setVisibleDeleteProductModal(true);
    };

    const deleteProduct = async () => {
        if(deletedProduct) {
            const req = await del(`/product/${deletedProduct.id}`);
    
            if(req) {
                message.success('Produto removido com sucesso!');
                await getProducts();
                setVisibleDeleteProductModal(false);
            }
        }
    };

    const onSaveProduct = async () => {
        await getProducts();
        setVisibleRegisterProductModal(false);
    };

    return (
        <Container>
            <WelcomeTitle>Gerenciar Produtos</WelcomeTitle>

            <SubtitlePage>
                <p className="descrition-screen">Crie, edite ou exclua produtos abaixo:</p>

                <RegisterButton onClick={createProduct}>Cadastrar produto</RegisterButton>
            </SubtitlePage>

            <ListWrapper>
                {
                    loadingData ?
                        <LoadingSpace />
                    :
                    products.length > 0 ?
                        products.map((product, index) => 
                            index >= minIndex &&
                            index < maxIndex && (
                                <Card key={index} className="card-item">
                                    <Row gutter={24}>
                                        <Col xs={24} sm={4} md={4} lg={4} xl={4} className='col-photo'>
                                            <img className='photo' src={product.photo} />
                                        </Col>
                                        <Col xs={24} sm={16} md={16} lg={16} xl={16} className='col-name'>
                                            <h3 className='name'>{ product.name }</h3>
                                        </Col>
                                        <Col xs={24} sm={4} md={4} lg={4} xl={4} className='col-actions'>
                                            <ButtonHover type='edit'>
                                                <EditOutlined onClick={() => editProduct(product)} />
                                            </ButtonHover>
                                            <ButtonHover type='delete'>
                                                <DeleteOutlined onClick={() => openDeleteProductModal(product)} />
                                            </ButtonHover>
                                        </Col>
                                    </Row>
                                </Card>
                            )
                        )
                    :
                        <EmptySpace
                            title='Nenhum produto por aqui...'
                            text='Cadastre novos produtos'
                            style={{ marginTop: '100px' }}
                        />
                }
                <Pagination
                    pageSize={pageSize}
                    current={currentPage}
                    total={products.length}
                    onChange={handlePaginationChange}
                />
            </ListWrapper>

            <RegisterProductModal
                visible={visibleRegisterProductModal}
                onCancel={() => setVisibleRegisterProductModal(false)}
                onConfirm={onSaveProduct}
                onEdit={onEdit}
                editableProduct={editableProduct}
            />

            <DeleteProductModal
                visible={visibleDeleteProductModal}
                onCancel={() => setVisibleDeleteProductModal(false)}
                onConfirm={deleteProduct}
                deletedProduct={deletedProduct}
            />
        </Container>
    );
};