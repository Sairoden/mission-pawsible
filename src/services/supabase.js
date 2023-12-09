import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fpkraiqgftsurdrscohj.supabase.co";
export const supabase = createClient(
  supabaseUrl,
  import.meta.env.VITE_SUPABASE_KEY
);
