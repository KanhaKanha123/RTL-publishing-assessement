import ArticlesListHorizontal from '../ArticlesListHorizontal';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import * as testData from './test.data.json';

describe('ArticlesListHorizontal component test', () => {
    const { bundles } = testData;

    test("ArticlesListHorizontal component load correctly", () => {
        render(<ArticlesListHorizontal bundles={bundles} />);
        const wrapper = screen.getByTestId("horizontalArticles-wrapper");
        //check element exist
        expect(wrapper).toBeInTheDocument();
    });

    test("ArticlesListHorizontal component should match snapshot", () => {
        const element = renderer.create(<ArticlesListHorizontal bundles={bundles} />);
        expect(element.toJSON()).toMatchSnapshot();
    });
});
