import React from 'react';
import { Row, Col } from 'antd';
import {
    Container,
    DistributionBiggerTitle,
    DistributionDescription,
    DistributionSmallerTitle,
    DistributionTexts,
    YellowLine
} from './styles';

export default () => {
    return (
        <Container>
            <Row gutter={24} style={{ height: '100%' }}>
                <Col xl={12} lg={24}>
                    <DistributionTexts>
                        <DistributionBiggerTitle>Nossa</DistributionBiggerTitle>
                        <DistributionSmallerTitle>Distribuição</DistributionSmallerTitle>
                        <DistributionDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore mLorem ipsum dolor sit amet, consectetur adipiscing elit, sed niam.agna aLorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                            minim veniam.Ut enim ad minim veniam.
                        </DistributionDescription>
                    </DistributionTexts>

                    <YellowLine/>
                </Col>
                <Col span={12}></Col>
            </Row>
        </Container>
    );
}