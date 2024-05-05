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

export const toggleLike = async (postId: number) => {
    const _hasLiked = await hasLiked(postId);
    if (!_hasLiked) await addLike(postId);
    else await removeLike(postId);
};

export const addLike = async (postId: number) => {
    const user = await getUser();

    const like = {
        profile: user!.id,
        post: postId,
    };

    const { error } = await supabase.from("likes").insert([like]);
    if (error) throw new Error(error.message);
};

export const removeLike = async (postId: number) => {
    const user = await getUser();

    const { error } = await supabase
        .from("likes")
        .delete()
        .eq("profile", user!.id)
        .eq("post", postId);

    if (error) throw new Error(error.message);
};
