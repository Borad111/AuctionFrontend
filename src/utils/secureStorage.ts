import { config } from "@/config";

const ENCRYPTION_KEY = config.storage_key; // tumne already define kiya hai

// Simple XOR encryption (demo purpose; production me crypto use karna)
const encrypt = (data: string): string => {
  return btoa(
    encodeURIComponent(
      data
        .split("")
        .map((char, i) =>
          String.fromCharCode(char.charCodeAt(0) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length))
        )
        .join("")
    )
  );
};

const decrypt = (data: string): string => {
  return decodeURIComponent(
    atob(data)
      .split("")
      .map((char, i) =>
        String.fromCharCode(char.charCodeAt(0) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length))
      )
      .join("")
  );
};

export const secureStorage = {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, encrypt(JSON.stringify(value)));
  },
  getItem: (key: string) => {
    const data = localStorage.getItem(key);
    if (!data) return null;
    try {
      return JSON.parse(decrypt(data));
    } catch {
      return null;
    }
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};
