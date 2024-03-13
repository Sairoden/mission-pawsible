// SERVICES
import { supabase, supabaseUrl } from "./supabase";

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (data.user.app_metadata.provider === "google") {
    const { avatar_url, full_name } = data.user.identities[0].identity_data;

    const firstName = full_name.split(" ")[0];
    const lastName = full_name.split(" ")[1];
    const avatar = avatar_url;

    await supabase
      .from("users")
      .update([{ firstName, lastName, avatar }])
      .eq("email", data.user.email)
      .select();
  }

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

export const forgotPassword = async email => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://mission-pawsible.netlify.app/account/update",
  });

  if (error) {
    console.error(error.message);
    throw new Error("Failed to send reset password email");
  }
};

export const updateProfile = async ({
  firstName,
  lastName,
  address,
  email,
  contactNumber,
  avatar,
  password,
}) => {
  console.log("CLICKING UPDATE");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("users")
    .update({
      firstName,
      lastName,
      address,
      contactNumber,
    })
    .eq("id", user.id);

  if (error) {
    console.error(error?.message);
    throw new Error("Update user went wrong");
  }

  if (password) {
    const { error } = await supabase.auth.updateUser({
      password,
      data: {
        address,
        avatar,
        contactNumber,
        firstName,
        lastName,
      },
    });

    if (error) console.error(error?.message);
  }

  if (user.email !== email) {
    const { error } = await supabase.auth.updateUser({
      email,
      data: {
        address,
        avatar,
        contactNumber,
        firstName,
        lastName,
      },
    });

    if (error) console.error(error?.message);

    if (
      error ||
      error?.message === "Email rate limit exceeded" ||
      error?.message.includes("rate")
    )
      throw new Error("Please update your email later.");
  }

  if (avatar.length < 1) return;
  // CHECK FOR AVATAR

  // 1. Upload the avatar image to supabase bucket
  const fileName = `avatar-${user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar[0]);

  if (storageError) throw new Error(storageError.message);

  // 2. Update avatar in the user
  const { error: userError } = await supabase
    .from("users")
    .update({
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    })
    .eq("id", user.id);

  if (userError) throw new Error(userError.message);

  const { data, error: userError2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (userError2) throw new Error(userError2.message);

  return data;
};
