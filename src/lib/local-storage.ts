export function readFromLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof localStorage === 'undefined') {
    return defaultValue;
  }
  const storedValue = localStorage.getItem(key);

  if(!storedValue) return defaultValue

  try {
    return JSON.parse(storedValue) as T;
  } catch (e) {
    console.log("something went wrong", e)
    return defaultValue
  }
  
}

export function writeToLocalStorage<T>(key: string, value: T) {
 localStorage.setItem(key, JSON.stringify(value));
}
