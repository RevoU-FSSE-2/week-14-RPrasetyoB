export const mockFetch = (response: any, status = 200) => {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        status,
        json: () => Promise.resolve(response),
      })
    );
  };