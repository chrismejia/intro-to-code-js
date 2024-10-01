export const passingUserIds = [1, 2];
export const failingUserIds = [9997, 9998, 9999];

export const validUserData = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
];

export const expectedHeaders = {
  Authorization: "Bearer fake123fake456fake789",
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const mockFetchUserSuccess = (userId, headers) =>
  new Promise((resolve, reject) => {
    // Validate the headers
    const headersMatch = Object.keys(expectedHeaders).every(
      (key) => headers[key] === expectedHeaders[key]
    );

    if (!headersMatch) {
      return reject({
        message: new Error("Invalid headers passed in fetch request"),
      });
    }

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
      250
    );
  });

export const mockFetchUserFailure = (userId, headers) =>
  new Promise((resolve, reject) => {
    const headersMatch = Object.keys(expectedHeaders).every(
      (key) => headers[key] === expectedHeaders[key]
    );

    if (!headersMatch) {
      return reject({
        message: new Error("Invalid headers passed in fetch request"),
      });
    }

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
      250
    );
  });
