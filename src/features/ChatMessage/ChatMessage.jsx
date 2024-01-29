// REACT & LIBRARIES
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import axios from "axios";

// STYLES
import "./ChatMessage.scss";
import "@stream-io/stream-chat-css/dist/css/index.css";
import toast from "react-hot-toast";

// UI COMPONENTS
import { Spinner } from "../../ui";

// CONTEXTS
import { useChatContext } from "../../contexts";

// HOOKS
import { useNewMessageNotification } from "../../hooks";

const apiKey = import.meta.env.VITE_STREAM_KEY;

function ChatMessage() {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const { chatConnection, setConnected } = useChatContext();
  const { newMessageNotification } = useNewMessageNotification();
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      try {
        const chatClient = StreamChat.getInstance(apiKey);

        let user = {};
        const channelId = `${chatConnection?.id}-${chatConnection?.pet?.id}`;
        let channelImage = chatConnection?.pet?.image;
        let channelName = `${chatConnection?.pet?.name}-${chatConnection?.id}`;

        if (chatConnection?.messenger?.id !== chatConnection?.ownerId) {
          user = chatConnection.messenger;
        } else {
          user = chatConnection.owner;
        }

        console.log(user);

        console.log(channelName);

        const res = await axios(
          `https://mission-pawsible-backend.onrender.com/api/v1/getToken/${user?.id}`
        );

        await axios(
          `https://mission-pawsible-backend.onrender.com/api/v1/getToken/${chatConnection?.ownerId}`
        );

        await chatClient.connectUser(user, res.data.token);

        const channel = chatClient.channel("messaging", channelId, {
          name: channelName,
          image: channelImage,
        });

        if (chatConnection?.messenger?.id !== chatConnection?.ownerId) {
          await channel.create();
          await channel.addMembers([
            chatConnection?.owner.id,
            chatConnection?.messenger.id,
          ]);
        }

        setChannel(channel);
        setClient(chatClient);

        channel.on("message.new", event => {
          const members = channel?.state?.members;
          const memberIds = Object.keys(members);
          const otherMemberIds = memberIds.filter(id => id !== event?.user?.id);
          const otherMembers = otherMemberIds.map(id => members[id]);

          if (otherMembers[0]?.user?.online === false) {
            newMessageNotification(otherMembers[0]?.user?.id);
          }
        });
      } catch (err) {
        if (err) {
          console.log(err);
          toast.error("Refresh the page and try again");
          navigate(-1);
        }
      }
    }

    if (chatConnection) init();

    if (client)
      return () => {
        setConnected(false);
        return client.disconnectUser();
      };
  }, [chatConnection, client, navigate, setConnected]);

  if (!client || !channel) return <Spinner />;

  return (
    <div className="chat-message">
      <Chat client={client} theme="messaging light">
        <ChannelList
          filters={{
            members: {
              $in: [chatConnection?.messenger?.id],
            },
          }}
        />

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
