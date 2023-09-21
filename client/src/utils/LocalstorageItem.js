// Set an item in localStorage with a timestamp indicating expiration time
export const setItemWithExpiration = (key, value, expirationInHours) => {
  const now = new Date();
  const expirationTime = now.getTime() + expirationInHours * 60 * 60 * 1000; // Convert hours to milliseconds
  const item = {
    value,
    expirationTime,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

// Get an item from localStorage and check if it has expired
export const getItemWithExpiration = (key) => {
  const item = JSON.parse(localStorage.getItem(key));

  if (item && new Date().getTime() < item.expirationTime) {
    return item.value;
  } else {
    localStorage.removeItem(key);
    return null;
  }
};
