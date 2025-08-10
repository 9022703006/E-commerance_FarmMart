import React, { useState } from 'react';
import './Categories.css';
import { Animated } from "react-animated-css";
import { catego } from '../../../Array_Data/Categ';

function Categories({select_categories,update_categories}) {
    const [select_border,update]=useState("ALL");
    return (
        <div>
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <div>
                    <h1 className='h1'>Select your Categories...</h1>
                </div>
            </Animated>
            <p className='p1'>
                Farm animals play a crucial role in agriculture and rural life, providing essential resources for human sustenance and livelihood.
                Common farm animals include cows, pigs, sheep, and chickens, each contributing uniquely to the economy and ecosystem.
            </p>
            <div>
                <section className='div121'>
                    <div className="d-flex flex-row multiple-item-slider">
                        {catego.map((values, index) => {
                            return (
                                <div onClick={()=>update_categories(prev=>prev===values.title ? "All":values.title)} key={index}>
                                    <div className="justify-content-center spacer-slider">
                                        <figure className={ `figure ${select_categories===values.title?'activity12':""}`}>
                                            <img className={`img-fluid figure-img mx-auto d-block `}
                                                src={values.img || 'fallback-image-url.jpg'} 
                                                alt={values.alt || "Farm animal"} 
                                            />
                                            <figcaption className="figure-caption">{values.title || "Caption"}</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Categories;