import React, { Component } from 'react';
import './Ourgallery.css';
import { Link } from 'react-router-dom';
import callApi from './../../utils/apiCaller';
import _ from 'lodash';

class Ourgallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: [],
            category: 'all',
            categories: []
        }
    }
    componentDidMount() {
        callApi('tours','GET',null).then(res => {
            this.setState({tours: res.data})
        })
        callApi('categories','GET',null).then(res => {
            this.setState({categories: res.data})
        })
        
    }
    getTours = (tours, url) => {
        let category = this.state.category;
        if(category !== 'all') {
            tours = _.filter(tours, function(o) { 
                return o.category_id === category; 
            })
        }
        let result = tours.map((tour, index) => {
            return ( 
                <Link key={index} to={`${url}/${tour.id}`} className="country-link 8 work-img" >
                    <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot1.jpg'} alt="img" />
                    <div className="info-panel">
                        <div className="hot-price">${tour.price}</div>
                        <h3 className="country-name">{tour.place}</h3>
                    </div>
                </Link>      
            )
        })
        return result;
    }
    changeCategory = (category_id) => {
        this.setState({category: category_id})

    }
    getCategories = (categories) => {
        let result = categories.map((category, index) => {
        let actual = this.state.category === category.id ? "actual" : null;
        return (
            <span 
                onClick={() => this.changeCategory(category.id)} 
                className={`button ${actual}`} >
                    {category.name}
            </span>
            )
        })
        return result;
    } 
    render() {
        let {match} = this.props;
        let {tours, categories} = this.state;
        console.log(categories);
        console.log(match);
        let url = match.url;
        if(url === '/') {
            url = '/tours';
        }
        return (
            <section id="gallery">
                <div className="region region-onepage-our-gallery">
                    <div id="block-views-0da21991801cce90f89c208d8fb76f5f" className="block block-views">
                        <div className="content">
                            <section className="t-gallery scroll-to-block">
                                <div className="container">
                                    <div className="t-title-block">
                                        <img src={process.env.PUBLIC_URL + 'images/outgallary.png'} alt="img" />
                                        <h2 className="block-title t-about-title">our gallery</h2>
                                        <div id="filters" className="cont-filter clearfix">
                                          {this.getCategories(categories)}
                                        </div>
                                    </div>
                                </div>
                                <center>
                                    <div id="gallery-popap" className="isotope img-crop ">
                                        <div className="grid" />
                                        {this.getTours(tours, url)}
                                    </div>
                                </center>
                            </section>
                            <div className="content clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Ourgallery;
