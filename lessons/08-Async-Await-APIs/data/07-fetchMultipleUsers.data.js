export const validUserData = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
];

export const mockFetchUserSuccess = (userId) =>
  new Promise((resolve) => {
    const data = validUserData.find((user) => user.id === userId);
    setTimeout(
      () =>
        resolve({
          ok: true,
          status: 200,
          statusText: "OK",
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Remaining": "59",
            "Cache-Control": "max-age=3600",
          },
          url: `https://jsonplaceholder.typicode.com/users/${userId}`,
          redirected: false,
          type: "basic",
          bodyUsed: false,
          json: () => Promise.resolve(data),
          clone: () => this,
          text: () => Promise.resolve(JSON.stringify(data)),
        }),
      500
    );
  });

export const mockFetchUserFailure = (userId) =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          ok: false,
          status: 404,
          statusText: "Not Found",
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Remaining": "59",
          },
          url: `https://jsonplaceholder.typicode.com/users/${userId}`,
          redirected: false,
          type: "error",
          bodyUsed: false,
          json: () =>
            Promise.reject({
              message: new Error(`Failed to fetch user with ID: ${userId}`),
            }),
        }),
      500
    );
  });

export const userIds = [1, 2, 3];
