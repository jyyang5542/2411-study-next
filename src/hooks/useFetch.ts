import createXior from 'xior';

const api = createXior.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

export const useFetch = async <T>(url: string): Promise<T> => {
  try {
    const response = await api.get<T>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('API 요청 실패');
  }
};
