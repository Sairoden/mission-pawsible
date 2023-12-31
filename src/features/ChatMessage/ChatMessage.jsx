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

const apiKey = import.meta.env.VITE_STREAM_KEY;

const user = {
  id: "sairoden",
  name: "Sairoden Gandarosa",
  image: "https://getstream.imgix.net/images/random_svg/FS.png",
};

const filters = { type: "messaging", members: { $in: [user.id] } };
const sort = { last_message_at: -1 };

function ChatMessage() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);

      // await chatClient.connectUser(user, chatClient.devToken(user.id));
      await chatClient.connectUser(
        user,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic2Fpcm9kZW4ifQ.P-hno23wt76_yCvc4oA_h6GQpIpC3CCINPb-6vaJ2Uo"
      );

      const channel = chatClient.channel("messaging", "react-talk", {
        image: "https://www.drupal.org/files/project-images/react.png",
        name: "Talk about react",
        members: [user.id],
      });

      await channel.watch();

      setClient(chatClient);
    }

    init();

    if (client) return () => client.disconnectUser();
  }, []);

  if (!client) return <Spinner />;

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
    </div>
  );
}

export default ChatMessage;
