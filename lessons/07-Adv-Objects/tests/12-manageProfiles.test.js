import { expect } from "chai";
import { manageProfiles } from "../12-manageProfiles";
import {
  initialProfiles,
  profileUpdates,
  emptyProfiles,
  emptyUpdates,
  unchangedProfiles,
  newProfilesOnly,
  completeOverwriteProfiles,
  expectedProfiles,
  expectedNewProfilesOnly,
  expectedCompleteOverwriteProfiles,
} from "../data/12-manageProfiles.data";

xdescribe("#12: manageProfiles", () => {
  it("should return the same profiles object when updates object is empty", () => {
    const result = manageProfiles(initialProfiles, emptyUpdates);
    expect(result).to.not.equal(initialProfiles);
  });

  it("should not change profiles that are not updated", () => {
    const result = manageProfiles(unchangedProfiles, profileUpdates);
    expect(result).to.deep.equal(expectedProfiles);
  });

  it("should add new profiles that are not in the initial profiles", () => {
    const result = manageProfiles(initialProfiles, newProfilesOnly);
    expect(result).to.deep.equal(expectedNewProfilesOnly);
  });

  it("should add new profiles from updates when profiles object is empty", () => {
    const result = manageProfiles(emptyProfiles, profileUpdates);
    expect(result).to.not.equal(profileUpdates);
    expect(result).to.deep.equal(profileUpdates);
  });

  it("should correctly overwrite existing profiles with new complete data", () => {
    const result = manageProfiles(initialProfiles, completeOverwriteProfiles);
    expect(result).to.deep.equal(expectedCompleteOverwriteProfiles);
  });
});
