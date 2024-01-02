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

  let { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", data.user.email);

  data.user.user_metadata = {
    firstName: user[0]?.firstName,
    lastName: user[0]?.lastName,
    contactNumber: user[0]?.contactNumber,
    address: user[0]?.address,
    avatar: user[0]?.avatar,
  };

  if (userError) {
    console.error(error.message);
    throw new Error("Unable to retrieve user information");
  }

  return data?.user;
};

export const loginWithGoogle = async () => {
  supabase.auth.signInWithOAuth({
    provider: "google",
  });
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

  let { data: user, error: userError } = await supabase
    .from("users")
    .update({ firstName, lastName, contactNumber, address })
    .eq("email", data.user.email)
    .select("*");

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
      emailRedirectTo: "https://mission-pawsible.netlify.app",
    },
  });

  if (error) {
    console.error(error.message);
    throw new Error("Failed to resend email confirmation");
  }

  return data;
};
