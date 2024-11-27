export type FormData = {
  firstName?: string;
  lastName?: string;
  age?: number;
  street?: string;
  city?: string;
  state?: string;
  pinCode?: number;
  email?: string;
  password?: string;
};

export type UserData = {
  firstName?: string;
  lastName?: string;
  age?: number;
};

export type AddressData = {
  street?: string;
  city?: string;
  state?: string;
  pinCode?: number;
};

export type AccountData = {
  email?: string;
  password?: string;
};

export const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: undefined,
  street: "",
  city: "",
  state: "",
  pinCode: undefined,
  email: "",
  password: "",
};

const CACHE_KEY = "FORM_DATA";

export const localStorageServices = {
  addToLocalStorage: (data: FormData) => {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  },
  getDataFromStorage: () => {
    const data = localStorage.getItem(CACHE_KEY);
    if (data) return JSON.parse(data);
    else return INITIAL_DATA;
  },
  removeDataFromStorage: () => {
    const data = localStorage.getItem(CACHE_KEY);
    if (data) localStorage.removeItem(CACHE_KEY);
  },
};
