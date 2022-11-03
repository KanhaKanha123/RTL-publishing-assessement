import Home from '../Home';
import { renderHook, waitFor, screen, render } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import useFetchData from '../../../hooks/useFetchData';

describe('Home component component test', () => {

    let fetchMock = global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ test: 100 }),
        }),
    ) as jest.Mock;

    test("Home component load correctly and called the fetch api", async () => {
        act(() => { render(<Home />) });
        renderHook(async () => { await act(() => { useFetchData() }) });

        waitFor(() => {
            const homePage = screen.getByTestId("home-page");
            expect(fetchMock).toHaveBeenCalled();
            expect(homePage).toBeInTheDocument();
        });


    });

    test("Home component should match snapshot", () => {
        const element = renderer.create(<Home/>);
        expect(element.toJSON()).toMatchSnapshot();
    });
})
