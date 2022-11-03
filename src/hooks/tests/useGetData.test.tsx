import useGetData from '../useGetData';
import { renderHook, waitFor, screen } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';

describe('useGetData custom hook component test', () => {

  let fetchMock = global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ test: 100 }),
    }),
  ) as jest.Mock;

  test("useGetData hooks and fetch api should return correct data", async () => {

    const { result } = renderHook(() => { act(() => { useGetData() }) });

    waitFor(() => {
      expect(fetchMock).toHaveBeenCalled();
      expect(result.current).toEqual({ test: 100 });
    });

  });
})
