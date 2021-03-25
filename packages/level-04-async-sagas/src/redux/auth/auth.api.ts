export const authenticate = (username: string, password: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ token: "<my_custom_token>" });
    }, 3000);
  });
