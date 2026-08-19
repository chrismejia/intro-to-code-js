export const initialProfiles = {
  user1: { name: "Alice", age: 25 },
  user2: { name: "Bob", age: 30 },
};

export const profileUpdates = {
  user1: { age: 26 },
  user3: { name: "Charlie", age: 35 },
};

export const emptyProfiles = {};

export const emptyUpdates = {};

export const unchangedProfiles = {
  user1: { name: "Alice", age: 25 },
  user2: { name: "Bob", age: 30 },
};

export const newProfilesOnly = {
  user3: { name: "Charlie", age: 35 },
  user4: { name: "David", age: 40 },
};

export const completeOverwriteProfiles = {
  user1: { name: "Alicia", age: 27 },
  user2: { name: "Robert", age: 32 },
};

export const expectedProfiles = {
  user1: { name: "Alice", age: 26 },
  user2: { name: "Bob", age: 30 },
  user3: { name: "Charlie", age: 35 },
};

export const expectedEmptyProfiles = {
  user1: { name: "Alice", age: 26 },
  user2: { name: "Bob", age: 30 },
  user3: { name: "Charlie", age: 35 },
};

export const expectedUnchangedProfiles = {
  user1: { name: "Alice", age: 25 },
  user2: { name: "Bob", age: 30 },
};

export const expectedNewProfilesOnly = {
  user1: { name: "Alice", age: 25 },
  user2: { name: "Bob", age: 30 },
  user3: { name: "Charlie", age: 35 },
  user4: { name: "David", age: 40 },
};

export const expectedCompleteOverwriteProfiles = {
  user1: { name: "Alicia", age: 27 },
  user2: { name: "Robert", age: 32 },
};
