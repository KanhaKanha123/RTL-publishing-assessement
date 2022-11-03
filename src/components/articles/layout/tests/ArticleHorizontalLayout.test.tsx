import ArticleHorizontalLayout from '../ArticleHorizontalLayout';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import * as testData from './test.data.json';

describe('ArticleHorizontalLayout component test', () => {

    test("ArticleHorizontalLayout component load correctly", () => {
        render(<ArticleHorizontalLayout bundle={testData.withData}/>);

        const anchorTag=screen.getByTestId("horizontalLayout-a");
        const wrapper=screen.getByTestId("horizontalLayout-wrapper");
        const horizontalLayoutImage=screen.getByTestId("horizontalLayout-img");
        const horizontalLayoutRightContentDiv=screen.getByTestId("horizontalLayout-rightContentDiv");
        const horizontalLayoutLabelTitle=screen.getByTestId("horizontalLayout-label-title");
        const horizontalLayoutLabelDate=screen.getByTestId("horizontalLayout-label-date");
        const horizontalLayoutLayoutBoldTitle=screen.getByTestId("horizontalLayout-layoutBoldTitle");
        const horizontalLayoutLead=screen.getByTestId("horizontalLayout-lead");
       
       //check element exist
        expect(wrapper).toBeInTheDocument();
        expect(anchorTag).toBeInTheDocument();
        expect(horizontalLayoutImage).toBeInTheDocument();
        expect(horizontalLayoutRightContentDiv).toBeInTheDocument();
        expect(horizontalLayoutLabelTitle).toBeInTheDocument();
        expect(horizontalLayoutLabelDate).toBeInTheDocument();
        expect(horizontalLayoutLayoutBoldTitle).toBeInTheDocument();
        expect(horizontalLayoutLead).toBeInTheDocument();
    });

    test("ArticleHorizontalLayout component recieve correct props", () => {
        render(<ArticleHorizontalLayout bundle={testData.withData}/>);

        const horizontalLayoutLabelTitle=screen.getByTestId("horizontalLayout-label-title");
        const horizontalLayoutLabelDate=screen.getByTestId("horizontalLayout-label-date");
        const horizontalLayoutLayoutBoldTitle=screen.getByTestId("horizontalLayout-layoutBoldTitle");
        const horizontalLayoutLead=screen.getByTestId("horizontalLayout-lead");
        
        //match values
        expect(horizontalLayoutLabelTitle).toHaveTextContent('De uitschieters van 2018');
        expect(horizontalLayoutLabelDate).toHaveTextContent('19 juni 2018');
        expect(horizontalLayoutLayoutBoldTitle).toHaveTextContent('Trijntje');
        expect(horizontalLayoutLead).toHaveTextContent('Humberto Tan');
    });

    test("ArticleHorizontalLayout component not recieve correct props", () => {
        render(<ArticleHorizontalLayout bundle={testData.withoutData}/>);
        const horizontalLayoutLabelTitle=screen.getByTestId("horizontalLayout-label-title");
        const horizontalLayoutLabelDate=screen.getByTestId("horizontalLayout-label-date");
        const horizontalLayoutLayoutBoldTitle=screen.getByTestId("horizontalLayout-layoutBoldTitle");
        const horizontalLayoutLead=screen.getByTestId("horizontalLayout-lead");
        
        //match values
        expect(horizontalLayoutLabelTitle).toBeEmptyDOMElement();
        expect(horizontalLayoutLabelDate).toBeEmptyDOMElement();
        expect(horizontalLayoutLayoutBoldTitle).toBeEmptyDOMElement();
        expect(horizontalLayoutLead).toBeEmptyDOMElement();
    });

    test("ArticleHorizontalLayout should match the snapshot", () => {
            const element=renderer.create(<ArticleHorizontalLayout bundle={testData.withData}/>);
            expect(element.toJSON()).toMatchSnapshot();
    });
})
