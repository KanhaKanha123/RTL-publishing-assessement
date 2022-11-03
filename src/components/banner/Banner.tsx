import React from 'react';
import { ArticleProps } from "../../types/types";

const Banner = ({ artcleData: { title, label, description, image } }: ArticleProps) => {
    return (<>
        <div data-testid="banner-wrapper-div" className="banner-wrapper">
            <img data-testid="banner-image" src={image}></img>
            <span data-testid="banner-label" className="title">{label}</span>
            <h1 data-testid="banner-title" className="bannerTitle">{title}</h1>
            <span data-testid="banner-description">{description}</span>
        </div>
    </>
    )
}

export default Banner;