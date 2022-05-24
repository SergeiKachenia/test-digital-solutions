export const checkResponse = (res: Response) => {
  if (!res.ok) {
    throw new Error(`Error status - ${res.status}`);
  }
};