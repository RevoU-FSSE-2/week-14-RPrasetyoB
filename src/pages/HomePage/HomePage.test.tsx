import { BrowserRouter } from 'react-router-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import HomePage from './';
import { fetchMockCategories } from './fetchMockCategories';

describe('HomePage', () => {
    global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve({ data: [] }),
        ok: true,
    });
    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
      });

  it('label Add category renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByText('Add category');
    expect(addCategoryButton).toBeDefined();
  });

  it('Filter status category renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByText('All');
    expect(addCategoryButton).toBeDefined();
  });

  it('Filter name renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByPlaceholderText('Filter by name');
    expect(addCategoryButton).toBeDefined();
  });

  it('Button Profile renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByText('Profile');
    expect(addCategoryButton).toBeDefined();
  });

  it('Button Log out renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByText('Log Out');
    expect(addCategoryButton).toBeDefined();
  });

  it('Label ID renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByText('ID');
    expect(addCategoryButton).toBeDefined();
  });

  it('Label Name renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByText('Name');
    expect(addCategoryButton).toBeDefined();
  });

  it('Label Status renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByText('Status');
    expect(addCategoryButton).toBeDefined();
  });

  it('Label Action renders correctly', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const addCategoryButton = screen.getByText('Action');
    expect(addCategoryButton).toBeDefined();
  });

  it('logs out on button click', () => {
    localStorage.setItem('authToken', 'testToken');
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
    const logoutButton = screen.getByText('Log Out');
    fireEvent.click(logoutButton);
    expect(localStorage.getItem('authToken')).toBeNull();
  });

    it('renders categories name from API', async () => {
    (global as any).fetch = jest.fn(() => fetchMockCategories());
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        );
        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('https://mock-api.arikmpt.com/api/category'), {
                headers: expect.objectContaining({
                Authorization: expect.stringContaining('Bearer'),
                }),
            });
            });
        
            const Data = screen.queryByText('Category 1');
            expect(Data).toBeDefined();
    });

    it('Button edit render correctly', async () => {
        (global as any).fetch = jest.fn(() => fetchMockCategories());
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
            );
            await waitFor(() => {
                expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('https://mock-api.arikmpt.com/api/category'), {
                headers: expect.objectContaining({
                    Authorization: expect.stringContaining('Bearer'),
                }),
                });
            });
        
            const Data = screen.queryAllByAltText('edit-button');
            expect(Data).toBeDefined();
            });

    it('Button delete render correctly', async () => {
        (global as any).fetch = jest.fn(() => fetchMockCategories());
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
            );
        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('https://mock-api.arikmpt.com/api/category'), {
                headers: expect.objectContaining({
                Authorization: expect.stringContaining('Bearer'),
                }),
            });
            });
        
            const Data = screen.queryAllByAltText('delete-button');
            expect(Data).toBeDefined();
        });
});

