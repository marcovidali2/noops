import { supabase } from "./supabase";

export const getLikes = async (postId: string) => {
    const { data, error } = await supabase
        .from("likes")
        .select("*")
        .eq("post", postId);

    if (error) throw new Error(error.message);
    return data;
};
