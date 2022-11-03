import Header from '../Header';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header component test', () => {

    test("Header component load correctly", () => {
        render(<Router><Header /></Router>);
        const wrapper = screen.getByTestId("header-wrapper-div");
        const headerAnchor = screen.getByText(/RTL News/i);
        const headerLoginText = screen.getByText(/Login/i);

        //check element exist
        expect(wrapper).toBeInTheDocument();
        expect(headerAnchor).toBeInTheDocument();
        expect(headerLoginText).toBeInTheDocument();
    });

    test("Header component should match snapshot", () => {
        const element = renderer.create(<Router><Header /></Router>);
        expect(element.toJSON()).toMatchSnapshot();
    });
})
