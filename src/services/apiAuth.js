// SERVICES
import { supabase } from "./supabase";

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error)
    throw new Error("Unable to retrieve user information. Please try again.");

  return data?.user;
};

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Invalid credentials. Please try again.");

  return data;
};
