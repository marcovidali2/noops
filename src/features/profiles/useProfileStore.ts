import { Tables } from "@/types";
import { create } from "zustand";

interface ProfileState extends Tables<"profiles"> {
    setName: (name: string) => void;
    setUsername: (username: string) => void;
    setFavoriteLanguage: (favoriteLanguage: string) => void;
    setBio: (bio: string | null) => void;
    setAvatar: (avatar: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
    id: "",
    joined_at: "",
    name: "",
    username: "",
    favoriteLanguage: "",
    bio: null,
    avatar: "",

    setName: (name) => set({ name: name }),
    setUsername: (username) => set({ username: username }),
    setFavoriteLanguage: (favoriteLanguage) =>
        set(() => ({ favoriteLanguage: favoriteLanguage })),
    setBio: (bio) => set({ bio: bio }),
    setAvatar: (avatar) => set({ avatar: avatar }),
}));
