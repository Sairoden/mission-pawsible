// SERVICES
import { supabase } from "./supabase";

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error.message);
    throw new Error("Unable to retrieve user information. Please try again.");
  }

  return data?.user;
};

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error?.message === "Email not confirmed") {
    console.error(error.message);
    throw new Error("Email is not confirmed. Please verify it.");
  }

  if (error) {
    console.error(error.message);
    throw new Error("Invalid credentials. Please try again.");
  }

  return data;
};

export const signup = async ({
  firstName,
  lastName,
  email,
  contactNumber,
  address,
  password,
}) => {
  const { data: registeredUser } = await supabase
    .from("users")
    .select("email")
    .eq("email", email);

  if (registeredUser.length > 0)
    throw new Error("Email has already been registered.");

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw new Error("Please try again later 🙏");
  }

  const { data: user, error: userError } = await supabase
    .from("users")
    .insert([
      { id: data.user.id, firstName, lastName, email, contactNumber, address },
    ])
    .select();

  data.user.user_metadata = {
    firstName: user[0]?.firstName,
    lastName: user[0]?.lastName,
    contactNumber: user[0]?.contactNumber,
    address: user[0]?.address,
    avatar: user[0]?.avatar,
  };

  if (userError) {
    console.error(userError.message);
    throw new Error("Registration failed.");
  }
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const resendEmailConfirmation = async email => {
  const { data, error } = await supabase.auth.resend({
    type: "signup",
    email,
    options: {
      emailRedirectTo: "http://localhost:5173/",
    },
  });

  if (error) {
    console.error(error.message);
    throw new Error("Failed to resend email confirmation");
  }

  return data;
};
