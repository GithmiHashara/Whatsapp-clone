import { Laugh, Mic, Plus, Send } from "lucide-react";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useConversationStore } from "@/src/store/chat-store";

const MessageInput = () => {
    const [msgText, setMsgText] = useState("");
    // Use the correct mutation name
    const sendTextMessage = useMutation(api.messages.sendTextMessage);
    const me = useQuery(api.users.getMe);
    const { selectedConversation } = useConversationStore();

    const handleSendTextMsg = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedConversation && me) {
            await sendTextMessage({
                sender: me._id,
                content: msgText,
                conversation: selectedConversation._id, // Extract _id
            });
            setMsgText(""); // Clear the input after sending the message
        }
    };

    return (
        <div className='bg-gray-primary p-2 flex gap-4 items-center'>
            <div className='relative flex gap-2 ml-2'>
                {/* EMOJI PICKER WILL GO HERE */}
                <Laugh className='text-gray-600 dark:text-gray-400' />
                <Plus className='text-gray-600 dark:text-gray-400' />
            </div>

            <form onSubmit={handleSendTextMsg} className='w-full flex gap-3'>
                <div className='flex-1'>
                    <Input
                        type='text'
                        placeholder='Type a message'
                        className='py-2 text-sm w-full rounded-lg shadow-sm bg-gray-tertiary focus-visible:ring-transparent'
                        value={msgText}
                        onChange={(e) => setMsgText(e.target.value)}
                    />
                </div>
                <div className='mr-4 flex items-center gap-3'>
                    {msgText.length > 0 ? (
                        <Button
                            type='submit'
                            size={"sm"}
                            className='bg-transparent text-foreground hover:bg-transparent'
                        >
                            <Send />
                        </Button>
                    ) : (
                        <Button
                            type='submit'
                            size={"sm"}
                            className='bg-transparent text-foreground hover:bg-transparent'
                        >
                            <Mic />
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default MessageInput;
