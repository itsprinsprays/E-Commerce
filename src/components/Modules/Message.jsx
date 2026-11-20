import { useState } from "react";
import {
  Search,
  Send,
  Image,
  Mic,
  ThumbsUp,
  MoreHorizontal,
  Phone,
  Video,
  Circle,
  ChevronLeft,
} from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Kiel Guevarra",
    avatar: "https://i.pravatar.cc/150?img=11",
    lastMessage: "anu want ng akuchikuchi baby ku na 'yan?",
    time: "2 seconds ago",
    online: true,
    unread: 2,
  },
  {
    id: 2,
    name: "James Mathew M. Yakis",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "anu want ng akuchikuchi baby ku na 'yan?",
    time: "2 seconds ago",
    online: false,
    unread: 0,
  },
  {
    id: 3,
    name: "Chan Bejerano",
    avatar: "https://i.pravatar.cc/150?img=13",
    lastMessage: "anu want ng akuchikuchi baby ku na 'yan?",
    time: "2 seconds ago",
    online: true,
    unread: 0,
  },
  {
    id: 4,
    name: "Lu Tuazon",
    avatar: "https://i.pravatar.cc/150?img=14",
    lastMessage: "anu want ng akuchikuchi baby ku na 'yan?",
    time: "2 seconds ago",
    online: false,
    unread: 0,
  },
  {
    id: 5,
    name: "Prince Benitez",
    avatar: "https://i.pravatar.cc/150?img=",
    lastMessage: "anu want ng akuchikuchi baby ku na 'yan?",
    time: "2 seconds ago",
    online: true,
    unread: 5,
  },
];

const messagesData = {
  1: [
    {
      id: 1,
      sender: "them",
      text: "Kumain kana, baby?",
      time: "Sent 34hrs ago",
    },
    {
      id: 2,
      sender: "me",
      text: "Hindi pa po.",
      time: "Sent 34hrs ago",
    },
    {
      id: 3,
      sender: "them",
      text: "anu want ng akuchikuchi baby ku na 'yan?",
      time: "Sent 2 seconds ago",
    },
  ],
};

export default function Message() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);

  const messages = messagesData[selectedContact.id] || [];

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setShowChat(true);
  };

  return (
    <div className="flex h-full bg-gray-50">
      {/* Contacts Sidebar */}
      <div
        className={`${
          showChat ? "hidden md:flex" : "flex"
        } flex-col w-full md:w-80 lg:w-96 bg-white border-r border-gray-200`}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#006A4E]/30 focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleSelectContact(contact)}
              className={`flex items-center gap-3 px-5 py-4 cursor-pointer transition-all duration-200 border-l-4 ${
                selectedContact.id === contact.id
                  ? "bg-[#E6F5ED] border-[#006A4E]"
                  : "border-transparent hover:bg-gray-50"
              }`}
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                />
                {contact.online && (
                  <Circle className="absolute bottom-0 right-0 h-3.5 w-3.5 fill-green-500 text-white stroke-[3]" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-gray-900 truncate">
                    {contact.name}
                  </h3>
                  <span className="text-[11px] text-gray-400 shrink-0 ml-2">
                    {contact.time}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {contact.lastMessage}
                </p>
              </div>

              {/* Unread Badge */}
              {contact.unread > 0 && (
                <span className="bg-[#006A4E] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                  {contact.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div
        className={`${
          showChat ? "flex" : "hidden md:flex"
        } flex-col flex-1 bg-white`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#006A4E] text-white shadow-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowChat(false)}
              className="md:hidden p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="relative">
              <img
                src={selectedContact.avatar}
                alt={selectedContact.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white/30"
              />
              {selectedContact.online && (
                <Circle className="absolute bottom-0 right-0 h-3 w-3 fill-green-400 text-[#006A4E] stroke-[3]" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-base">
                {selectedContact.name}
              </h3>
              <p className="text-xs text-green-200">
                {selectedContact.online ? "● Online" : "○ Offline"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <Phone className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <Video className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] ${
                  msg.sender === "me" ? "order-2" : "order-1"
                }`}
              >
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === "me"
                      ? "bg-[#006A4E] text-white rounded-br-md"
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
                <p
                  className={`text-[10px] text-gray-400 mt-1 ${
                    msg.sender === "me" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="px-4 py-3 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-[#006A4E] hover:bg-[#E6F5ED] rounded-full transition-all">
              <Image className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-[#006A4E] hover:bg-[#E6F5ED] rounded-full transition-all">
              <Mic className="h-5 w-5" />
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-[#006A4E]/30 focus:bg-white transition-all duration-200"
              />
            </div>

            {messageInput.trim() ? (
              <button className="p-2.5 bg-[#006A4E] hover:bg-[#005A3E] text-white rounded-full transition-all shadow-md hover:shadow-lg">
                <Send className="h-5 w-5" />
              </button>
            ) : (
              <button className="p-2.5 text-[#006A4E] hover:bg-[#E6F5ED] rounded-full transition-all">
                <ThumbsUp className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
