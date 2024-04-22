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
