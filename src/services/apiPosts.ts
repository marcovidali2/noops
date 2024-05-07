import { Tables } from "@/types";
import { supabase } from "./supabase";
import { getUser } from "./apiUsers";

export const createPost = async (post: Tables<"posts">) => {
    const { error } = await supabase.from("posts").insert([post]);
    if (error) throw new Error(error.message);
};

export const uploadImage = async (image: File) => {
    const { data, error } = await supabase.storage
        .from("images")
        .upload(Math.random().toString(), image);

    if (error) throw new Error(error.message);
    return data;
};

export const getAllPosts = async () => {
    const { data: posts, error } = await supabase
        .from("posts")
        .select("*, profile(*)")
        .order("createdAt", { ascending: false });

    if (error) throw new Error(error.message);
    return posts;
};

export const getUserPosts = async () => {
    const user = await getUser();

    const { data: posts, error } = await supabase
        .from("posts")
        .select("*")
        .eq("profile", user!.id)
        .order("createdAt", { ascending: false });

    if (error) throw new Error(error.message);
    return posts;
};
