import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { toast } from "@/hooks/use-toast";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          profiles:created_by (full_name)
        `)
        .order("date", { ascending: true });

      if (error) throw error;
      return data;
    },
  });
};

export const useEventAttendance = (eventId: string) => {
  const { user } = useAuth();

  const { data: isAttending } = useQuery({
    queryKey: ["event-attendance", eventId, user?.id],
    queryFn: async () => {
      if (!user) return false;
      const { data } = await supabase
        .from("event_attendees")
        .select("id")
        .eq("event_id", eventId)
        .eq("user_id", user.id)
        .maybeSingle();
      return !!data;
    },
    enabled: !!user,
  });

  return isAttending;
};

export const useToggleEventAttendance = (eventId: string) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const isAttending = useEventAttendance(eventId);

  return useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("User not authenticated");

      if (isAttending) {
        await supabase
          .from("event_attendees")
          .delete()
          .eq("event_id", eventId)
          .eq("user_id", user.id);
      } else {
        await supabase
          .from("event_attendees")
          .insert({ event_id: eventId, user_id: user.id });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event-attendance", eventId] });
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast({
        title: isAttending ? "Désinscription réussie" : "Inscription réussie",
        description: isAttending
          ? "Vous ne participerez plus à cet événement"
          : "Vous êtes maintenant inscrit à cet événement",
      });
    },
  });
};

export const useCreateEvent = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      title: string;
      date: string;
      location: string;
      category: string;
      description?: string;
    }) => {
      if (!user) throw new Error("User not authenticated");

      const { data: event, error } = await supabase
        .from("events")
        .insert({
          ...data,
          created_by: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return event;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast({
        title: "Événement créé",
        description: "L'événement a été créé avec succès",
      });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible de créer l'événement",
        variant: "destructive",
      });
    },
  });
};
