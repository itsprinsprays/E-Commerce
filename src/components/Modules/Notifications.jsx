import { useState } from "react";
import {
  Bell,
  MessageCircle,
  AlertTriangle,
  ShoppingBag,
  Tag,
  Heart,
  MoreHorizontal,
  Check,
  Trash2,
  Settings,
} from "lucide-react";

const notificationsData = [
  {
    id: 1,
    type: "message",
    icon: MessageCircle,
    iconBg: "bg-[#006A4E]",
    user: "Kiel Guevarra",
    avatar: "https://i.pravatar.cc/150?img=11",
    message: "sent you a message:",
    highlight: '"Is the item still available?"',
    time: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "listing",
    icon: ShoppingBag,
    iconBg: "bg-blue-500",
    user: "James Mathew M. Yakis",
    avatar: "https://i.pravatar.cc/150?img=12",
    message: "is interested in your listing",
    highlight: "CvSU Lanyard",
    time: "15 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "message",
    icon: MessageCircle,
    iconBg: "bg-[#006A4E]",
    user: "Chan Bejerano",
    avatar: "https://i.pravatar.cc/150?img=13",
    message: "sent you a message:",
    highlight: '"Can you do meet up sa Gate 1?"',
    time: "1 hour ago",
    read: false,
  },
  {
    id: 4,
    type: "report",
    icon: AlertTriangle,
    iconBg: "bg-red-500",
    user: "Prince Benitez",
    avatar: "https://i.pravatar.cc/150?img=15",
    message: "reported an issue with listing",
    highlight: "CvSU ID Holder",
    time: "5 hours ago",
    read: true,
  },
  {
    id: 5,
    type: "price",
    icon: Tag,
    iconBg: "bg-orange-500",
    user: "James Mathew M. Yakis",
    avatar: "https://i.pravatar.cc/150?img=12",
    message: "dropped the price on",
    highlight: "CvSU PE Uniform",
    time: "1 day ago",
    read: true,
  },
  {
    id: 6,
    type: "saved",
    icon: Heart,
    iconBg: "bg-pink-500",
    user: "Kiel Guevarra",
    avatar: "https://i.pravatar.cc/150?img=11",
    message: "saved your listing",
    highlight: "CvSU Notebook Set",
    time: "2 days ago",
    read: true,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("all");
  const [openMenuId, setOpenMenuId] = useState(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filtered =
    filter === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
    setOpenMenuId(null);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    setOpenMenuId(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          {unreadCount > 0 && (
            <p className="text-sm text-gray-500 mt-0.5">
              You have{" "}
              <span className="font-semibold text-[#006A4E]">
                {unreadCount} new
              </span>{" "}
              notification{unreadCount !== 1 && "s"}
            </p>
          )}
        </div>
        <button className="p-2 text-gray-400 hover:text-[#006A4E] hover:bg-[#E6F5ED] rounded-full transition-all">
          <Settings className="h-5 w-5" />
        </button>
      </div>

      {/* Filter Tabs & Actions */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === "all"
                ? "bg-[#006A4E] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
              filter === "unread"
                ? "bg-[#006A4E] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Unread
            {unreadCount > 0 && (
              <span
                className={`text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                  filter === "unread"
                    ? "bg-white/20 text-white"
                    : "bg-[#006A4E] text-white"
                }`}
              >
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-sm font-medium text-[#006A4E] hover:text-[#005A3E] hover:underline transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Notification List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <Bell className="h-12 w-12 mb-3 stroke-1" />
            <p className="text-sm font-medium">No notifications yet</p>
            <p className="text-xs mt-1">You&apos;re all caught up!</p>
          </div>
        ) : (
          filtered.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className={`flex items-start gap-3 px-4 py-4 transition-all duration-200 hover:bg-gray-50 relative group ${
                  !notif.read ? "bg-[#E6F5ED]/40" : ""
                }`}
              >
                {/* Unread dot */}
                {!notif.read && (
                  <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#006A4E] rounded-full" />
                )}

                {/* Avatar / Icon */}
                <div className="relative shrink-0 ml-2">
                  {notif.avatar ? (
                    <>
                      <img
                        src={notif.avatar}
                        alt={notif.user}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 ${notif.iconBg} p-1 rounded-full border-2 border-white`}
                      >
                        <Icon className="h-3 w-3 text-white" />
                      </div>
                    </>
                  ) : (
                    <div
                      className={`w-12 h-12 ${notif.iconBg} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 leading-snug">
                    {notif.user && (
                      <span className="font-semibold text-gray-900">
                        {notif.user}{" "}
                      </span>
                    )}
                    {notif.message}{" "}
                    {notif.highlight && (
                      <span className="font-semibold text-gray-900">
                        {notif.highlight}
                      </span>
                    )}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      !notif.read
                        ? "text-[#006A4E] font-semibold"
                        : "text-gray-400"
                    }`}
                  >
                    {notif.time}
                  </p>
                </div>

                {/* Action Menu */}
                <div className="relative shrink-0">
                  <button
                    onClick={() =>
                      setOpenMenuId(openMenuId === notif.id ? null : notif.id)
                    }
                    className="p-1.5 text-gray-300 hover:text-gray-500 hover:bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>

                  {openMenuId === notif.id && (
                    <div className="absolute right-0 top-8 bg-white rounded-xl shadow-lg border border-gray-100 py-1 w-48 z-10">
                      <button
                        onClick={() => toggleRead(notif.id)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors"
                      >
                        <Check className="h-4 w-4" />
                        Mark as {notif.read ? "unread" : "read"}
                      </button>
                      <button
                        onClick={() => removeNotification(notif.id)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 w-full text-left transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove notification
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
