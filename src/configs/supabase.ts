import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://inkxowqgjumngskanmry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlua3hvd3FnanVtbmdza2FubXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwOTMzMDcsImV4cCI6MTk4MDY2OTMwN30.PnsGWPXWHyVpYqacmyDj-cjyjboWH_1gkic9dXlTTmk";

export const supabase = createClient(supabaseUrl, supabaseKey);
