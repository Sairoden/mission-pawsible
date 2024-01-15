// REACT & LIBRARIES
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from "stream-chat-react";

// STYLES
import "./ChatMessage.scss";
import "@stream-io/stream-chat-css/dist/css/index.css";

// UI COMPONENTS
import { Spinner } from "../../ui";

// HOOKS
import { useGetChatMembers } from "../../hooks";

import axios from "axios";

const apiKey = import.meta.env.VITE_STREAM_KEY;

// const user = {
//   id: "sairoden",
//   name: "Sairoden Gandarosa",
//   image: "https://getstream.imgix.net/images/random_svg/FS.png",
// };

// const user2 = {
//   id: "poppy",
//   name: "poppy",
//   image:
//     "https://images.pexels.com/photos/3794246/pexels-photo-3794246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// };

function ChatMessage() {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const { chatMembers, isPending } = useGetChatMembers();

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);
      const res = await axios(
        `http://localhost:8080/api/v1/getToken/${messenger?.id}`
      );

      await chatClient.connectUser(messenger, res.data.token);

      const channel = chatClient.channel("team", pet.id, {
        name: pet.petName,
        image: pet.images[0],
      });

      const channelConnection = await channel.create();

      await channel.addMembers([
        { user_id: owner.id },
        { user_id: messenger.id },
      ]);

      console.log(channelConnection);

      setChannel(channel);
      // setClient(chatClient);
    }

    let owner = {};
    let messenger = {};
    let pet = {};

    if (chatMembers) {
      owner = {
        id: chatMembers.owner.id,
        name: `${chatMembers.owner.firstName} ${chatMembers.owner.lastName}`,
        image: chatMembers.owner.avatar,
      };

      messenger = {
        id: chatMembers.messenger.id,
        name: `${chatMembers.messenger.firstName} ${chatMembers.messenger.lastName}`,
        image: chatMembers.messenger.avatar,
      };

      pet = { ...chatMembers.pet };

      init();
      if (client) return () => client.disconnectUser();
    }
  }, [chatMembers, client]);

  if (!client || !channel || isPending) return <Spinner />;

  return (
    <div className="chat-message">
      <Chat client={client} theme="messaging light">
        <ChannelList />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
      <h1>Hello</h1>
    </div>
  );
}

export default ChatMessage;
