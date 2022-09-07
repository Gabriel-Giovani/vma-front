import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, Select, Upload, message } from 'antd';
import { get, post, put } from '../../../../services/api';
import { Container, FormButton, FormButtonBox } from './styles';
import { API_BASE_URL } from '../../../../helpers/constants';
import AuthService from '../../../../services/auth';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

export default (props) => {
    const { visible, onCancel, onConfirm, onEdit, editableBanner } = props;

    const [form] = Form.useForm();

    const [formData, setFormData] = useState({
        title: '',
        link: '',
        photo: ''
    });
    const [statusLoading, setStatusLoading] = useState(false);

    useEffect(() => {
        if(onEdit && editableBanner) {
            setFormData({
                title: editableBanner.title,
                link: editableBanner.link,
                photo: editableBanner.photo
            });

            form.setFieldsValue({
                title: editableBanner.title,
                link: editableBanner.link
            });
        } else {
            setFormData({
                title: '',
                link: '',
                photo: ''
            });

            form.resetFields();
        }
    }, [editableBanner, onEdit]);

    const updateFormData = (key, value) => {
        const formDataValues = {...formData};
        formDataValues[key] = value;
        setFormData(formDataValues);
    };

    const sendFormData = async () => {
        let req;

        if(onEdit)
            req = await put(`/banner/${editableBanner.id}`, formData);
        else
            req = await post('/banner', formData);

        if(req) {
            message.success(`Banner ${onEdit ? 'editado' : 'cadastrado'} com sucesso!`);
            setFormData({
                title: '',
                link: '',
                photo: ''
            });
            form.setFieldsValue({
                title: '',
                link: '',
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
            title={onEdit ? 'Editar banner' : 'Cadastrar banner'}
        >
            <Container>
                <Form
                    layout='horizontal'
                    labelCol={{ xl: 5, lg: 5 }}
                    wrapperCol={{ xl: 19, lg: 19 }}
                    form={form}
                >
                    <Form.Item
                        label='Título'
                        name='title'
                        rules={[
                            {
                                required: true,
                                message: 'Informe o título do banner!'
                            }
                        ]}
                    >
                        <Input
                            placeholder='Informe o título do banner'
                            value={formData.title}
                            onChange={(e) => updateFormData('title', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label='Link'
                        name='link'
                        rules={[
                            {
                                required: true,
                                message: 'Informe o link do banner!'
                            }
                        ]}
                    >
                        <Input
                            placeholder='Informe o link do banner'
                            value={formData.link}
                            onChange={(e) => updateFormData('link', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Selecione a imagem"
                        name="photo"
                        rules={[
                            {
                                required: true,
                                message: 'Selecione uma imagem!'
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