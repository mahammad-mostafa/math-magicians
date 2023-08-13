export default async (url, options = {}) => {
  const response = await fetch(url, options);
  if (response.status > 299) {
    return { success: false };
  }
  const result = await response.json();
  return { success: true, result };
};
