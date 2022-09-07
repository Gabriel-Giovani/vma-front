import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, Select, Upload, message } from 'antd';
import { get, post, put } from '../../../../services/api';
import { Container, FormButton, FormButtonBox } from './styles';

export default (props) => {
    const { visible, onCancel, onConfirm, onEdit, editableCategory } = props;

    const [form] = Form.useForm();

    const [formData, setFormData] = useState({name: ''});

    useEffect(() => {
        if(onEdit && editableCategory) {
            setFormData({ name: editableCategory.name });
            form.setFieldsValue({ name: editableCategory.name });
        } else {
            setFormData({ name: '' });
            form.resetFields();
        }
    }, [editableCategory, onEdit]);

    const updateFormData = (key, value) => {
        const formDataValues = {...formData};
        formDataValues[key] = value;
        setFormData(formDataValues);
    };

    const sendFormData = async () => {
        let req;

        if(onEdit)
            req = await put(`/category/${editableCategory.id}`, formData);
        else
            req = await post('/category', formData);

        if(req) {
            message.success(`Categoria ${onEdit ? 'editada' : 'cadastrada'} com sucesso!`);
            setFormData({ name: '' });
            form.setFieldsValue({ name: '' });

            if(onConfirm)
                onConfirm();
        }
    };

    return(
        <Modal
            visible={visible}
            onCancel={onCancel}
            footer={false}
            width={800}
            title={onEdit ? 'Editar categoria' : 'Cadastrar categoria'}
        >
            <Container>
                <Form
                    layout='horizontal'
                    labelCol={{ xl: 2, lg: 2 }}
                    wrapperCol={{ xl: 22, lg: 22 }}
                    form={form}
                >
                    <Form.Item
                        label='Nome'
                        name='name'
                        rules={[
                            {
                                required: true,
                                message: 'Informe o nome da categoria!'
                            }
                        ]}
                    >
                        <Input
                            placeholder='Informe o nome da categoria'
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                        />
                    </Form.Item>

                    <FormButtonBox>
                        <FormButton onClick={sendFormData}>Salvar</FormButton>
                    </FormButtonBox>
                </Form>
            </Container>
        </Modal>
    );
}