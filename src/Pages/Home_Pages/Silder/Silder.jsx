import React from 'react';
import './Silder.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/Cow [photoutils.com].jpg';
import img2 from '../../../assets/House11.jpg';
import img3 from '../../../assets/pig_1920.jpg';
import img4 from '../../../assets/cow_1920.jpg';
import tv from '../../../assets/x_002_lcd_img.png';
import 'font-awesome/css/font-awesome.min.css';

const Silder = () => {
    return (
        <div className='body1'>
            <div className="x_002_lcd_main_wrap">
                <div className="row">
                    <div className="col-lg">
                        <h1>FARM-MART</h1>
                        <h2>Our Mission</h2>
                        <p>
                        At Farm-Mart, our mission is to connect buyers and sellers in the agricultural community,
                         ensuring ethical practices and the best welfare for animals involved. 
                        We strive to support local farmers and promote sustainable farming by making it easier for you to find and trade quality livestock.
                        </p>
                        <ul>
                            <li><span className="fa fa-check-square-o"></span> Animal Buying and Selling  </li>
                            <li><span className="fa fa-check-square-o"></span> Quality Products for Farm Operations  </li>
                            <li><span className="fa fa-check-square-o"></span> Animals Photos and Address of Owner</li>
                            <li><span className="fa fa-check-square-o"></span>Agricultural Technology Integration  </li>
                            <li><span className="fa fa-check-square-o"></span> Expert Guidance and Support </li>
                        </ul>
                        <a  className="button1" href="#">About Compamy</a>
                    </div>
                    <div className="col-lg">
                        <div className="x_002_lcd_inner_wrap">
                            <img src={tv} alt="x_002_lcd_img" />
                            <div id="x_002_lcd" className="carousel slide x_002_lcd_indicators x_002_lcd_control_button thumb_scroll_x swipe_x ps_easeOutCirc" data-ride="carousel" data-interval="8000">
                                <Carousel>
                                    <Carousel.Item>
                                        <img className="d-block w-100 h-100" src={img1} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 h-100" src={img2} alt="Second slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 h-100" src={img3} alt="Third slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 h-100" src={img4} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Silder;