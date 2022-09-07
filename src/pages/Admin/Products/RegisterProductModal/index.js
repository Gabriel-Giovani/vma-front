import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, Select, Upload, message } from 'antd';
import { get, post, put } from '../../../../services/api';
import { Container, FormButton, FormButtonBox } from './styles';
import { API_BASE_URL } from '../../../../helpers/constants';
import AuthService from '../../../../services/auth';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

export default (props) => {
    const { visible, onCancel, onConfirm, onEdit, editableProduct } = props;

    const [form] = Form.useForm();

    const [formData, setFormData] = useState({
        name: '',
        category: null,
        photo: ''
    });
    const [categories, setCategories] = useState([]);
    const [statusLoading, setStatusLoading] = useState(false);

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        if(onEdit && editableProduct) {
            setFormData({
                name: editableProduct.name,
                category: editableProduct.category,
                photo: editableProduct.photo
            });

            form.setFieldsValue({
                name: editableProduct.name,
                category: editableProduct.category
            });
        } else {
            setFormData({
                name: '',
                category: null,
                photo: ''
            });

            form.resetFields();
        }
    }, [editableProduct, onEdit]);

    const getCategories = async () => {
        const reqData = await get('/categories/all');

        if(reqData)
            setCategories(reqData);
    };

    const updateFormData = (key, value) => {
        const formDataValues = {...formData};
        formDataValues[key] = value;
        setFormData(formDataValues);
    };

    const sendFormData = async () => {
        let req;

        if(onEdit)
            req = await put(`/product/${editableProduct.id}`, formData);
        else
            req = await post('/product', formData);

        if(req) {
            message.success(`Produto ${onEdit ? 'editado' : 'cadastrado'} com sucesso!`);
            setFormData({
                name: '',
                category: null,
                photo: ''
            });
            form.setFieldsValue({
                name: '',
                category: '',
                photo: ''
            });

            if(onConfirm)
                onConfirm();
        }
    };

    const authData = AuthService.getAuthData();

    const uploaderProps = {
        name: 'file',
        multiple: false,
        action: `${API_BASE_URL}upload/file`,
        className: 'avatar-uploader',
        showUploadList: false,
        headers: {
            token: authData && authData.token ? authData.token : null
        },
        onChange: ((info: any) => {
            const { status } = info.file;
            if (status === 'uploading') {
                setStatusLoading(true);
            }
            if (status === 'done') {
                setStatusLoading(false);
                updateFormData('photo', info.file.response.payload.src);
                message.success(`${info.file.name} - foi adicionado com sucesso!.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} - não pode ser adicionado.`);
            }
        })
    };

    const uploadButton = (
        <div>
            {statusLoading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return(
        <Modal
            visible={visible}
            onCancel={onCancel}
            footer={false}
            width={800}
            title={onEdit ? 'Editar produto' : 'Cadastrar produto'}
        >
            <Container>
                <Form
                    layout='horizontal'
                    labelCol={{ xl: 6, lg: 6 }}
                    wrapperCol={{ xl: 18, lg: 18 }}
                    form={form}
                >
                    <Form.Item
                        label='Nome'
                        name='name'
                        rules={[
                            {
                                required: true,
                                message: 'Informe o nome do produto!'
                            }
                        ]}
                    >
                        <Input
                            placeholder='Informe o nome do produto'
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label='Categoria'
                        name='category'
                        rules={[
                            {
                                required: true,
                                message: 'Informe a categoria do produto!'
                            }
                        ]}
                    >
                        <Select
                            placeholder='Selecione uma categoria'
                            value={formData.category}
                            onChange={(value) => updateFormData('category', value)}
                        >
                            {
                                categories.map((item, index) => (
                                    <Select.Option key={index} value={item.id}>{ item.name }</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Selecione a imagem"
                        name="photo"
                        rules={[
                            {
                                required: true,
                                message: 'Selecione uma imagem para o produto!'
                            }
                        ]}
                    >
                        <Dragger
                            {...uploaderProps}
                        >
                            {formData.photo ? <img src={formData.photo} alt="background" style={{ width: '100%' }} /> : uploadButton}
                        </Dragger>
                    </Form.Item>
                    
                    <FormButtonBox>
                        <FormButton onClick={sendFormData}>Salvar</FormButton>
                    </FormButtonBox>
                </Form>
            </Container>
        </Modal>
    );
}