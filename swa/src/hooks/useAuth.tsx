import { Providers } from "@microsoft/mgt-react";


export const useAuth = (): { getToken: () => Promise<string | undefined> } => {
  const getToken = async (): Promise<string | undefined> => {
    const provider = Providers.globalProvider;
    if (provider) {
      try {
        const token = await provider.getAccessToken();
        return token;
      } catch (error) {
        console.error("Error getting access token:", error);
      }
    }
    return undefined;
  };

  return { getToken };
};