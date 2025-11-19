import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const NotificationDropdown = () => {
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "Marie Dubois",
      message: "a aimé votre publication",
      time: "Il y a 5 min",
      read: false,
    },
    {
      id: 2,
      type: "comment",
      user: "Pierre Martin",
      message: "a commenté votre photo",
      time: "Il y a 1h",
      read: false,
    },
    {
      id: 3,
      type: "event",
      user: "Club Robotique",
      message: "a créé un nouvel événement",
      time: "Il y a 2h",
      read: true,
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {unreadCount} nouveau{unreadCount > 1 ? 'x' : ''}
            </Badge>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => (
          <DropdownMenuItem 
            key={notification.id} 
            className={`flex items-start gap-3 p-3 ${!notification.read ? 'bg-muted/50' : ''}`}
          >
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xs">
                {notification.user.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm">
                <span className="font-medium">{notification.user}</span>
                {' '}{notification.message}
              </p>
              <p className="text-xs text-muted-foreground">{notification.time}</p>
            </div>
            {!notification.read && (
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            )}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-primary">
          Voir toutes les notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
