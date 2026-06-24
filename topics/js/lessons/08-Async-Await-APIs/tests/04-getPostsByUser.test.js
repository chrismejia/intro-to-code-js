import { getPostsByUser } from "../04-getPostsByUser.js";
import {
  validUser,
  validPosts,
  fetchUserDataSuccess,
  fetchUserPostsSuccess,
  fetchUserDataFail,
  fetchUserPostsFail,
} from "../data/04-getPostsByUser.data.js";

describe("getPostsByUser", () => {
  it("should return user data and posts when both fetch operations succeed", async () => {
    const result = await getPostsByUser(
      fetchUserDataSuccess,
      fetchUserPostsSuccess
    );
    expect(result).toEqual({ user: validUser, posts: validPosts });
  });

  describe("should return an error object with message: 'Failed to fetch data'", () => {
    it("when fetching user data fails", async () => {
      const result = await getPostsByUser(
        fetchUserDataFail,
        fetchUserPostsSuccess
      );
      expect(result).toEqual({ error: "Failed to fetch data" });
    });

    it("when fetching user posts fails", async () => {
      const result = await getPostsByUser(
        fetchUserDataSuccess,
        fetchUserPostsFail
      );
      expect(result).toEqual({ error: "Failed to fetch data" });
    });

    it("when both fetching user data and posts fail", async () => {
      const result = await getPostsByUser(
        fetchUserDataFail,
        fetchUserPostsFail
      );
      expect(result).toEqual({ error: "Failed to fetch data" });
    });
  });
});
