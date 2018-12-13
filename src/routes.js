import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import TourDetail from "./components/TourDetail/TourDetail";
import Tours from './components/Tours/Tours';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ location, history }) => <ProductActionPage location={location} history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '/tours',
        exact: false,
        main: ({ match}) => <Tours match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;