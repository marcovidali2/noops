import { Tables } from "@/types";
import { getUser } from "./apiUsers";
import { supabase } from "./supabase";

export const uploadAvatar = async (file: File) => {
    const user = await getUser();

    const { data, error } = await supabase.storage
        .from("avatars")
        .upload(user!.id, file, { upsert: true });

    if (error) throw new Error(error.message);
    return data;
};
export const getProfile = async (userId: string) => {
    const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user", userId);

    if (error) throw new Error(error.message);
    return profile;
};

export const getUsernames = async () => {
    const { data: profiles, error } = await supabase
        .from("profiles")
        .select("username");

    if (error) throw new Error(error.message);
    return profiles.map((profile) => profile.username);
};

export const createProfile = async (profile: Tables<"profiles">) => {
    const profileSupabase = {
        name: profile.name,
        username: profile.username,
        favoriteLanguage: profile.favoriteLanguage,
        bio: profile.bio,
        avatar: profile.avatar,
    };

    const { error } = await supabase
        .from("profiles")
        .upsert([profileSupabase], { onConflict: "id" });

    if (error) throw new Error(error.message);
};
