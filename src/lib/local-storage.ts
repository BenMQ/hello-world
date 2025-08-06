export function readFromLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof localStorage === 'undefined') {
    return defaultValue;
  }
  const storedValue = localStorage.getItem(key);
  if (storedValue === null) {
    return defaultValue;
  }
  // TODO(minqi): consider handling JSON parsing errors. Should we return defaultValue?
  return JSON.parse(storedValue) as T;
}

export function writeToLocalStorage<T>(key: string, value: T) {
 localStorage.setItem(key, JSON.stringify(value)); 
}
