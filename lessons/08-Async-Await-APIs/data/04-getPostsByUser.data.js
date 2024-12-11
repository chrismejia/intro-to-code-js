// Mock user data
export const validUser = { id: 1, name: "Alice" };

// Mock posts data
export const validPosts = [{ id: 101, title: "Post 1" }];

// Success scenarios
export const fetchUserDataSuccess = () =>
  new Promise((resolve) => setTimeout(() => resolve(validUser), 500));

export const fetchUserPostsSuccess = (userId) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (userId && typeof userId === "number") {
        resolve(validPosts);
      } else {
        reject("User ID is missing or invalid.");
      }
    }, 500)
  );

// Failure scenarios
export const fetchUserDataFail = () =>
  new Promise((_, reject) =>
    setTimeout(() => reject("User data fetch failed"), 500)
  );

export const fetchUserPostsFail = (userId) =>
  new Promise((_, reject) =>
    setTimeout(() => {
      if (userId && typeof userId === "number") {
        reject("Failed to fetch user posts.");
      } else {
        reject("User ID is missing or invalid.");
      }
    }, 500)
  );
