import { supabase } from "./supabase";

export const join = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
            emailRedirectTo: "/",
        },
    });

    if (error) throw new Error(error.message);
};

export const getUser = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data.user;
};
