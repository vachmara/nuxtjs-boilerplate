import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  event.context.user = await serverSupabaseUser(event);
  if (!event.context.user) {
    return;
  }
  // Select all the users only if the user is an admin
  const { data } = await client.from("account").select("*").eq("user_id", event.context.user.id).single();

  if (data) {
    // @ts-ignore
    event.context.user.admin = data.admin;
  }
});