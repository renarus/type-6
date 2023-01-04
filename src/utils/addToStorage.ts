const addToStorage = (name: string, data: unknown): void => {
  localStorage.setItem(name, JSON.stringify(data));
};

export default addToStorage;
