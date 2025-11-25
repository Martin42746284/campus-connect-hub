import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { toast } from "@/hooks/use-toast";

export const useGroups = () => {
  return useQuery({
    queryKey: ["groups"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("groups")
        .select(`
          *,
          profiles:created_by (full_name)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });
};

export const useGroupMembership = (groupId: string) => {
  const { user } = useAuth();

  const { data: isMember } = useQuery({
    queryKey: ["group-member", groupId, user?.id],
    queryFn: async () => {
      if (!user) return false;
      const { data } = await supabase
        .from("group_members")
        .select("id")
        .eq("group_id", groupId)
        .eq("user_id", user.id)
        .maybeSingle();
      return !!data;
    },
    enabled: !!user,
  });

  return isMember;
};

export const useToggleGroupMembership = (groupId: string) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const isMember = useGroupMembership(groupId);

  return useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("User not authenticated");

      if (isMember) {
        await supabase
          .from("group_members")
          .delete()
          .eq("group_id", groupId)
          .eq("user_id", user.id);
      } else {
        await supabase
          .from("group_members")
          .insert({ group_id: groupId, user_id: user.id });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group-member", groupId] });
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      toast({
        title: isMember ? "Groupe quitté" : "Groupe rejoint",
        description: isMember 
          ? "Vous avez quitté le groupe avec succès"
          : "Vous avez rejoint le groupe avec succès",
      });
    },
  });
};

export const useCreateGroup = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      category: string;
      description?: string;
    }) => {
      if (!user) throw new Error("User not authenticated");

      const { data: group, error } = await supabase
        .from("groups")
        .insert({
          ...data,
          created_by: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      // Auto-join the creator
      await supabase
        .from("group_members")
        .insert({ group_id: group.id, user_id: user.id });

      return group;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      toast({
        title: "Groupe créé",
        description: "Le groupe a été créé avec succès",
      });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible de créer le groupe",
        variant: "destructive",
      });
    },
  });
};
