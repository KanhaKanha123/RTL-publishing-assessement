import useGetData from '../useGetData';
import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-test-renderer';

describe('useGetData custom hook component test', () => {

  let fetchMock = global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({  returnedData: "foo1" }),
    }),
  ) as jest.Mock;

  test("useGetData hooks and fetch api should return correct data", async () => {

    const { result } = renderHook(() => useGetData());

    await act(async () => {
      result.current.setApiUrl("bundle-api.json");
    });

 
    waitFor(() => {
      expect(fetchMock).toHaveBeenCalled();
      expect(result.current).toBe({
        returnedData: "foo1"
      });
    });

  });
})
