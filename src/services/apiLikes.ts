import { getUser } from "./apiUsers";
import { supabase } from "./supabase";

export const getLikes = async (postId: number) => {
    const { data, error } = await supabase
        .from("likes")
        .select("*")
        .eq("post", postId);

    if (error) throw new Error(error.message);
    return data;
};

export const hasLiked = async (postId: number) => {
    const user = await getUser();

    const { data, error } = await supabase
        .from("likes")
        .select("*")
        .eq("profile", user!.id)
        .eq("post", postId);

    if (error) throw new Error(error.message);
    return data.length === 1;
};
