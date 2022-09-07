import React, { useState, useEffect } from 'react';
import Dragger, { DraggerProps } from "antd/lib/upload/Dragger";
import AuthService from '../../services/auth';
import { LoadingOutlined, CameraOutlined } from '@ant-design/icons';
import { API_BASE_URL } from '../../helpers/constants';
import { post } from '../../services/api';

export default ({
    title,
    description,
    options,
    className,
    onUpload,
    onFail,
    type,
    image
}) => {
    const [isUploading, setUploading] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const authData = AuthService.getAuthData();

        if(authData)
            setUserData(authData);
    }, []);

    const authData = AuthService.getAuthData();

    const uploadImage = async (file) => {
        let formData = new FormData();

        formData.photo = file;
        formData.uuid = file.uid;
        formData.domain = 'POST';
        formData.filename = file.name;
        formData.id = 1;

        const req = await post('/storage/user', formData);
    };

    const uploaderProps = {
        showUploadList: false,
        name: 'file',
        multiple: false,
        action: uploadImage,
        className: className,
        headers: {
            Authorization: `Bearer ${userData && userData.token ? userData.token : ''}`
        },
        onChange(info) {
            const { status } = info.file;

            if(status !== 'uploading') {
                setUploading(true);
            }
            if(status === 'done') {
                setUploading(false);

                const response = info.file.response;

                if(response) {
                    onUpload && onUpload(response.payload, info.file);
                }
            } else if(status === 'error') {
                setUploading(false);
                onFail && onFail(info.file);
            }
        },
        ...options
    };

    const renderIcon = () => {
        if(isUploading)
            return (<LoadingOutlined/>);

        return (<CameraOutlined style={{ fontSize: '30px' }} />);
    };

    return (
        <Dragger { ...uploaderProps }>
            {
                type === 'IMAGE_UPLOADER' && image ? (
                    <img src={image} alt="Foto" style={{ width: '100%' }} />
                ) : (
                    <>
                        <div className='ant-upload-drag-icon'>
                            { renderIcon() }
                        </div>
                        <p className="ant-upload-text">{title ? title : `Adicione uma foto`}</p>
                        {/* <p className="ant-upload-hint">{description ? description : `Suporte para um único arquivo`}</p> */}
                    </>
                )
            }
        </Dragger>
    );
};