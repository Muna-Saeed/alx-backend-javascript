export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform asynchronous operation (e.g., fetch data from an API)
    // For now, let's resolve the Promise immediately
    resolve('Response from API');
  });
}
