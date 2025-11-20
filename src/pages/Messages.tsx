import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, MoreVertical } from "lucide-react";
import { useState } from "react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Marie Curie",
      avatar: "",
      lastMessage: "Super, on se retrouve là-bas!",
      timestamp: "10:30",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Lucas Tremblay",
      avatar: "",
      lastMessage: "Tu as les notes du cours?",
      timestamp: "Hier",
      unread: 0,
      online: true,
    },
    {
      id: 3,
      name: "Sophie Bernard",
      avatar: "",
      lastMessage: "Les photos sont disponibles!",
      timestamp: "Hier",
      unread: 0,
      online: false,
    },
    {
      id: 4,
      name: "Groupe Robotique",
      avatar: "",
      lastMessage: "Réunion demain à 18h",
      timestamp: "2 jours",
      unread: 5,
      online: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Marie Curie",
      content: "Salut! Tu viens à la conférence demain?",
      timestamp: "10:20",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Moi",
      content: "Oui bien sûr! À quelle heure?",
      timestamp: "10:25",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Marie Curie",
      content: "14h00 à l'amphithéâtre A",
      timestamp: "10:28",
      isOwn: false,
    },
    {
      id: 4,
      sender: "Moi",
      content: "Parfait! On se retrouve à l'entrée?",
      timestamp: "10:29",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Marie Curie",
      content: "Super, on se retrouve là-bas!",
      timestamp: "10:30",
      isOwn: false,
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle sending message
      setMessageText("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-6">
        <Card className="border-border h-[calc(100vh-12rem)]">
          <CardContent className="p-0 h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              {/* Conversations List */}
              <div className="border-r border-border overflow-y-auto">
                <div className="p-4 border-b border-border">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Rechercher une conversation..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="divide-y divide-border">
                  {conversations.map((conv, index) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedChat(index)}
                      className={`w-full p-4 text-left hover:bg-muted/50 transition-colors ${
                        selectedChat === index ? 'bg-muted' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conv.avatar} />
                            <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                              {conv.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {conv.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-foreground truncate">{conv.name}</p>
                            <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                            {conv.unread > 0 && (
                              <Badge variant="default" className="ml-2">
                                {conv.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="md:col-span-2 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={conversations[selectedChat].avatar} />
                      <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                        {conversations[selectedChat].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{conversations[selectedChat].name}</p>
                      <p className="text-xs text-muted-foreground">
                        {conversations[selectedChat].online ? 'En ligne' : 'Hors ligne'}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-end space-x-2 max-w-[70%] ${msg.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        {!msg.isOwn && (
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xs">
                              MC
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div className={`rounded-2xl px-4 py-2 ${
                          msg.isOwn 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm">{msg.content}</p>
                          <p className={`text-xs mt-1 ${
                            msg.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Écrivez votre message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button 
                      variant="hero" 
                      size="icon"
                      onClick={handleSendMessage}
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Messages;