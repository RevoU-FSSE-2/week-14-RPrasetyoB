import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import EditCategory from'./';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn().mockResolvedValue({
  json: async () => ({ token: 'mockedToken'})
});

describe('test add category form', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
      })),
    });
  });  
    test('title Edit category form render correctly', async () => {
        render(
            <BrowserRouter>
              <EditCategory />
            </BrowserRouter>
          );
        const title = screen.getByText('Edit Category')
        expect(title).toBeDefined();
    })

    test('label Edit category render correctly', async () => {
        render(
            <BrowserRouter>
              <EditCategory />
            </BrowserRouter>
          );
        const title = screen.getByText('Category')
        expect(title).toBeDefined();
    })

    test('label status render correctly', async () => {
        render(
            <BrowserRouter>
              <EditCategory />
            </BrowserRouter>
          );
        const title = screen.getByText('Status')
        expect(title).toBeDefined();
    })

    test('button Update render correctly', async () => {
        render(
            <BrowserRouter>
              <EditCategory />
            </BrowserRouter>
          );
        const title = screen.getByText('Update')
        expect(title).toBeDefined();
    }),

    test('button cancel render correctly', async () => {
        render(
            <BrowserRouter>
              <EditCategory />
            </BrowserRouter>
          );
        const title = screen.getByText('Cancel')
        expect(title).toBeDefined();
    })


  test('submits the form and set token in localStorage', async () => {   
      render(<BrowserRouter>
              <EditCategory />
            </BrowserRouter>)
      const category = screen.getByPlaceholderText('Enter update category');
      const status = screen.getByPlaceholderText('Choose status');
      const button = screen.getByText('Update');

      act(() => {
          fireEvent.change(category, { target: { value : 'test'}});
          fireEvent.change(status, { target: { value : 'true'}});
          fireEvent.click(button);
      })
      await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith('https://mock-api.arikmpt.com/api/category/update', expect.any(Object));
      })
    })
})