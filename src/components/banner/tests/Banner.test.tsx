import Banner from '../Banner';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

const testData= {
title: "De uitschieters van 2018",
label: "best gelezen",
description: "Waar hadden we.",
image: "https://www.rtlboulevard.nl/sites/default/files/content/images/2018/12/27/thumbnail_Jaaroverzicht%20Banner.jpg"
};

describe('Banner component test', () => {

    test("Banner component load correctly", () => {
        render(<Banner artcleData={testData}/>);

        const wrapper=screen.getByTestId("banner-wrapper-div");
        const bannerImage=screen.getByTestId("banner-image");
        const bannerLabel=screen.getByTestId("banner-label");
        const bannerBitle=screen.getByTestId("banner-title");
        const bannerDescription=screen.getByTestId("banner-description")
       
        //check element exist
        expect(wrapper).toBeInTheDocument();
        expect(bannerImage).toBeInTheDocument();
        expect(bannerLabel).toBeInTheDocument();
        expect(bannerBitle).toBeInTheDocument();
        expect(bannerDescription).toBeInTheDocument();
    });

    test("Banner component recieve correct props", () => {
        render(<Banner artcleData={testData}/>);

        const bannerLabel=screen.getByTestId("banner-label");
        const bannerBitle=screen.getByTestId("banner-title");
        const bannerDescription=screen.getByTestId("banner-description")

        //check values
        expect(bannerDescription).toHaveTextContent('Waar hadden we.');
        expect(bannerLabel).toHaveTextContent('best gelezen');
        expect(bannerBitle).toHaveTextContent('De uitschieters van 2018');
    });

    test("Banner component should match snapshot", () => {
        const element = renderer.create(<Banner artcleData={testData} />);
        expect(element.toJSON()).toMatchSnapshot();
    });
})
