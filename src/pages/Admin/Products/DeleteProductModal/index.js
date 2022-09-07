import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, Select, Upload, message } from 'antd';
import { get, post, put } from '../../../../services/api';
import { API_BASE_URL } from '../../../../helpers/constants';
import AuthService from '../../../../services/auth';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

export default (props) => {
    const { visible, onCancel, onConfirm, deletedProduct } = props;

    return(
        <Modal
            visible={visible}
            onCancel={onCancel}
            footer={false}
            width={600}
            title="Remover produto"
            onOk={onConfirm}
            onCancel={onCancel}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancelar
                </Button>,
                <Button key="submit" type="primary" onClick={onConfirm}>
                    Remover
                </Button>
            ]}
            style={{ textAlign: 'center' }}
        >
            <p>{`Tem certeza que deseja remover o produto ${deletedProduct ? deletedProduct.name : ''}?`}</p>
        </Modal>
    );
}