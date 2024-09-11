import { expect } from "chai";
import { getPostsByUser } from "../04-getPostsByUser";
import {
  validUser,
  validPosts,
  fetchUserDataSuccess,
  fetchUserPostsSuccess,
  fetchUserDataFail,
  fetchUserPostsFail,
} from "../data/04-getPostsByUser.data";

describe("getPostsByUser", function () {
  this.timeout(5000);

  it("should return user data and posts when both fetch operations succeed", async function () {
    const result = await getPostsByUser(
      fetchUserDataSuccess,
      fetchUserPostsSuccess
    );
    expect(result).to.deep.equal({ user: validUser, posts: validPosts });
  });

  describe("should return an error object with message: 'Failed to fetch data'", function () {
    it("when fetching user data fails", async function () {
      const result = await getPostsByUser(
        fetchUserDataFail,
        fetchUserPostsSuccess
      );
      expect(result).to.deep.equal({ error: "Failed to fetch data" });
    });

    it("when fetching user posts fails", async function () {
      const result = await getPostsByUser(
        fetchUserDataSuccess,
        fetchUserPostsFail
      );
      expect(result).to.deep.equal({ error: "Failed to fetch data" });
    });

    it("when both fetching user data and posts fail", async function () {
      const result = await getPostsByUser(
        fetchUserDataFail,
        fetchUserPostsFail
      );
      expect(result).to.deep.equal({ error: "Failed to fetch data" });
    });
  });
});
