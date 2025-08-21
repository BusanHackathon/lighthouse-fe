type AuthStorageKey = {
  accessToken: string;
  refreshToken: string;
};

const initStorage = <T extends keyof AuthStorageKey>(key: T, storage: Storage) => {
  const storageKey = `${key}`;

  const get = (): AuthStorageKey[T] => {
    const value = storage.getItem(storageKey);

    return JSON.parse(value as string);
  };

  const set = (value: AuthStorageKey[T]) => {
    if (value === undefined || value === null) {
      return storage.removeItem(storageKey);
    }

    const stringifiedValue = JSON.stringify(value);

    storage.setItem(storageKey, stringifiedValue);
  };

  return { get, set };
};

export const authStorage = {
  accessToken: initStorage('accessToken', localStorage),
  refreshToken: initStorage('refreshToken', localStorage),
};
