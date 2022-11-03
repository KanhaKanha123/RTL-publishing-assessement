import ArticlesListVerticle from '../ArticlesListVerticle';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import * as testData from './test.data.json';

describe('ArticlesListVerticle component test', () => {
    const { bundles } = testData;
    beforeEach(() => {
        render(<ArticlesListVerticle bundles={bundles} />);
    });

    test("ArticlesListVerticle component load correctly", () => {
        const wrapper = screen.getByTestId("verticleArticles-wrapper");

        //check element exist
        expect(wrapper).toBeInTheDocument();
    });

    test("ArticlesListVerticle component should match snapshot", () => {
        const element = renderer.create(<ArticlesListVerticle bundles={bundles} />);
        expect(element.toJSON()).toMatchSnapshot();
    });
});
