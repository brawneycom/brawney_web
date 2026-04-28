import { Account } from "~/types";
import persistance from "./persistance";

type Storage<T> = {
  read: () => T | null;
  write: (t: T) => void;
  clear: () => void;
};

type AppStorage = {
  profile: Storage<Account>;
};

const keys = {
  profile: "profile",
};

const storage: AppStorage = {
  profile: {
    read: () => {
      const profile_storage = persistance.get(keys.profile);
      if (profile_storage) {
        var profile = JSON.parse(profile_storage) as Account;
        return profile;
      }

      return null;
    },
    write: (value: Account) =>
      persistance.set(keys.profile, JSON.stringify(value)),
    clear: () => persistance.clear(keys.profile),
  },
};

export default storage;
