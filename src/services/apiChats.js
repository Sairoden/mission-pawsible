// SERVICES
import { supabase } from "./supabase";

export const getChatMembers = async petId => {
  const { data, error: error } = await supabase.auth.getUser();

  const { data: messenger, error2 } = await supabase
    .from("users")
    .select("*")
    .eq("id", data.user.id);

  const { data: pet, error3 } = await supabase
    .from("pets")
    .select("*")
    .eq("id", petId);

  const { data: owner, error4 } = await supabase
    .from("users")
    .select("*")
    .eq("id", pet[0].userId);

  if (error || error2 || error3 || error4) {
    console.error(error.message);
    throw new Error("User could not be loaded");
  }

  const members = {
    owner: owner[0],
    messenger: messenger[0],
    pet: pet[0],
  };

  return members;
};

export const getChatConnection = async connection => {
  if (!connection || !connection?.ownerId || !connection?.messengerId) return;

  const { data: chatConnection, error } = await supabase
    .from("chats")
    .select("*")
    .eq("messengerId", connection?.messengerId)
    .eq("ownerId", connection?.ownerId);

  if (error) {
    console.error(error.message);
    throw new Error("Connection could not be established");
  }

  if (chatConnection) return chatConnection[0];
};

export const createChatConnection = async petId => {
  // GET MESSENGER AND OWNER
  const { data, error } = await supabase.auth.getUser();
  const { data: pet, error: error2 } = await supabase
    .from("pets")
    .select("*")
    .eq("id", petId);

  const { data: messenger, error: error3 } = await supabase
    .from("users")
    .select("*")
    .eq("id", data.user.id);

  const { data: owner } = await supabase
    .from("users")
    .select("*")
    .eq("id", pet[0].userId);

  // CHECK IF THERE IS CONNECTION
  const { data: chatConnection, error: error4 } = await supabase
    .from("chats")
    .select("*")
    .eq("messengerId", messenger[0].id)
    .eq("ownerId", owner[0].id);

  if (error || error2 || error3 || error4)
    throw new Error("Connection could not be established");

  const chatData = {
    ...chatConnection[0],
    pet: {
      id: pet[0].id,
      name: pet[0].petName,
      image: pet[0].images[0],
    },
    owner: {
      id: owner[0].id,
      name: `${owner[0].firstName} ${owner[0].lastName}`,
      image: owner[0].avatar,
      role: "user",
    },
    messenger: {
      id: messenger[0].id,
      name: `${messenger[0].firstName} ${messenger[0].lastName}`,
      image: messenger[0].avatar,
      role: "user",
    },
  };

  if (chatConnection[0]) return chatData;


  // // IF NO CONNECTIONS - CREATE ONE
  const { data: chatConnection2, error: error5 } = await supabase
    .from("chats")
    .insert([
      {
        messengerId: messenger[0].id,
        ownerId: owner[0].id,
        channelId: `${petId}-${messenger[0].id}`,
      },
    ])
    .select();

  if (error5)
    throw new Error("Create chat connection could not be established");

  const chatData2 = {
    ...chatConnection2[0],
    pet: {
      id: pet[0].id,
      name: pet[0].petName,
      image: pet[0].images[0],
    },
    owner: {
      id: owner[0].id,
      name: `${owner[0].firstName} ${owner[0].lastName}`,
      image: owner[0].avatar,
      role: "user",
    },
    messenger: {
      id: messenger[0].id,
      name: `${messenger[0].firstName} ${messenger[0].lastName}`,
      image: messenger[0].avatar,
      role: "user",
    },
  };

  return chatData2;
};
