"use client";
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
//import { Avatar } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "../ui/avatar";
import { Video, X } from "lucide-react";
import MessageInput from "./message-input";
import MessageContainer from "./message-container";
//import ChatPlaceHolder from "@/components/home/chat-placeholder";
import ChatPlaceHolder from "./chat-placeholder";
import GroupMembersDialog from "./group-members-dialog";
import { useConversationStore } from "@/src/store/chat-store";

const RightPanel = () => {
	const {selectedConversation, setSelectedConversation} = useConversationStore();
	if (!selectedConversation) return <ChatPlaceHolder />;

	const conversationName = selectedConversation.groupName || selectedConversation.name;
	const conversationImage = selectedConversation.groupName || selectedConversation.name;

  const isGroup = true; 

	return (
		<div className='w-3/4 flex flex-col'>
			<div className='w-full sticky top-0 z-50'>
				{/* Header */}
				<div className='flex justify-between bg-gray-primary p-3'>
					<div className='flex gap-3 items-center'>
						<Avatar>
							<AvatarImage src={"/placeholder.png"} className='object-cover' />
							<AvatarFallback>
								<div className='animate-pulse bg-gray-tertiary w-full h-full rounded-full' />
							</AvatarFallback>
						</Avatar>
						<div className='flex flex-col'>
							<p>{conversationName}</p>
							{selectedConversation.isGroup && (

							 <GroupMembersDialog selectedConversation={selectedConversation}  /> 
							)};
						</div>
					</div>

					<div className='flex items-center gap-7 mr-5'>
						<a href='/video-call' target='_blank'>
							<Video size={23} />
						</a>
						<X size={16} className='cursor-pointer' onClick={() => setSelectedConversation(null)} />
					</div>
				</div>
			</div>
			{/* CHAT MESSAGES */}
			<MessageContainer />

			{/* INPUT */}
			<MessageInput />
		</div>
	);
};
export default RightPanel;