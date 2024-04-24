import { Tables } from "@/types";
import { create } from "zustand";

interface ProfileState extends Tables<"profiles"> {
    setName: (name: string) => void;
    setUsername: (username: string) => void;
    setFavoriteLanguage: (favorite_language: string) => void;
    setBio: (bio: string | null) => void;
    setAvatar: (avatar: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
    id: "",
    joined_at: "",
    name: "",
    username: "",
    favorite_language: "",
    bio: null,
    avatar: "",

    setName: (name) => set({ name: name }),
    setUsername: (username) => set({ username: username }),
    setFavoriteLanguage: (favorite_language) =>
        set(() => ({ favorite_language: favorite_language })),
    setBio: (bio) => set({ bio: bio }),
    setAvatar: (avatar) => set({ avatar: avatar }),
}));
