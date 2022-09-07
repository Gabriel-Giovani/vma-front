import React, { useState } from 'react';
import {
    HeaderMenu,
    Logo,
    NavItem,
    NavList,
    RetiringMenu,
    RetiringMenuLine,
    MenuDropdown,
    NavListDropdown,
    RedSquare
} from './styles';
import LogoHeader from '../../assets/images/logo-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default () => {
    return (
        <HeaderMenu>
            <Logo src={LogoHeader}/>

            <NavList>
                <NavItem><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></NavItem>
                <NavItem><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></NavItem>
                <NavItem><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></NavItem>
                <NavItem><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></NavItem>
            </NavList>

            <RedSquare />

            <RetiringMenu>
                <RetiringMenuLine />
                <RetiringMenuLine />
                <RetiringMenuLine style={{ width: '30px' }} />
            </RetiringMenu>

            {/* <MenuDropdown className={visibleMenuDropdown ? '-visible' : ''}>
                <NavListDropdown>
                    <NavItem><a href="#home">Home</a></NavItem>
                    <NavItem><a href="#products">Produtos</a></NavItem>
                    <NavItem><a href="#institucional">Sobre</a></NavItem>
                    <NavItem><a href="#contact">Contato</a></NavItem>
                </NavListDropdown>
            </MenuDropdown> */}
        </HeaderMenu>
    );
}