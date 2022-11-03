import ArticleVerticleLayout from '../ArticleVerticleLayout';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import * as testData from './test.data.json';

describe('ArticleVerticleLayout component test', () => {

    test("ArticleVerticleLayout component load correctly", () => {
        render(<ArticleVerticleLayout bundle={testData.withData}/>);

        const anchorTag=screen.getByTestId("verticleLayout-a");
        const wrapper=screen.getByTestId("article-verticle-layout-wrapper");
        const verticleLayoutImage=screen.getByTestId("verticleLayout-img");
        const verticleLayoutLabelTitle=screen.getByTestId("verticleLayout-label-title");
        const verticleLayoutLabelDate=screen.getByTestId("verticleLayout-label-date");
        const verticleLayoutBoldTitle=screen.getByTestId("verticleLayout-layoutBoldTitle");
        const verticleLayoutLead=screen.getByTestId("verticleLayout-lead");
       
       //check element exist
        expect(wrapper).toBeInTheDocument();
        expect(anchorTag).toBeInTheDocument();
        expect(verticleLayoutImage).toBeInTheDocument();
        expect(verticleLayoutLabelTitle).toBeInTheDocument();
        expect(verticleLayoutLabelDate).toBeInTheDocument();
        expect(verticleLayoutBoldTitle).toBeInTheDocument();
        expect(verticleLayoutLead).toBeInTheDocument();
    });

    test("ArticleVerticleLayout component recieve correct props", () => {
        render(<ArticleVerticleLayout bundle={testData.withData}/>);

        const verticleLayoutLabelTitle=screen.getByTestId("verticleLayout-label-title");
        const verticleLayoutLabelDate=screen.getByTestId("verticleLayout-label-date");
        const verticleLayoutBoldTitle=screen.getByTestId("verticleLayout-layoutBoldTitle");
        const verticleLayoutLead=screen.getByTestId("verticleLayout-lead");
        
        //match values
        expect(verticleLayoutLabelTitle).toHaveTextContent('De uitschieters van 2018');
        expect(verticleLayoutLabelDate).toHaveTextContent('19 juni 2018');
        expect(verticleLayoutBoldTitle).toHaveTextContent('Trijntje');
        expect(verticleLayoutLead).toHaveTextContent('Humberto Tan');
    });

    test("ArticleVerticleLayout component not recieve correct props", () => {
        render(<ArticleVerticleLayout bundle={testData.withoutData}/>);
        
        const verticleLayoutLabelTitle=screen.getByTestId("verticleLayout-label-title");
        const verticleLayoutLabelDate=screen.getByTestId("verticleLayout-label-date");
        const verticleLayoutBoldTitle=screen.getByTestId("verticleLayout-layoutBoldTitle");
        const verticleLayoutLead=screen.getByTestId("verticleLayout-lead");
        
        //match values
        expect(verticleLayoutLabelTitle).toBeEmptyDOMElement();
        expect(verticleLayoutLabelDate).toBeEmptyDOMElement();
        expect(verticleLayoutBoldTitle).toBeEmptyDOMElement();
        expect(verticleLayoutLead).toHaveTextContent('...');
    });

    test("ArticleVerticleLayout should match the snapshot", () => {
        const element=renderer.create(<ArticleVerticleLayout bundle={testData.withData}/>);
        expect(element.toJSON()).toMatchSnapshot();
});
})
