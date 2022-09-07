import React, { useEffect } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import AuthService from '../services/auth';
import 'antd/dist/antd.css';

// Components
import AdminContainer from '../components/Admin/Container';

// Pages
import HomeLandingPage from './HomeLandingPage';
import Login from './Admin/Login';
import Home from './Admin/Home';
import Products from './Admin/Products';
import Categories from './Admin/Categories';
import Banners from './Admin/Banners';

const Routes = () => {
    return (
        <BrowserRouter forceRefresh={false}>
            <Switch>
                <Route exact path='/' component={HomeLandingPage} />
                <Route exact path='/admin/login' component={Login} />

                <AdminContainer>
                    <Route exact path='/admin/home' component={Home} />
                    <Route exact path='/admin/products' component={Products} />
                    <Route exact path='/admin/categories' component={Categories} />
                    <Route exact path='/admin/banners' component={Banners} />
                </AdminContainer>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;