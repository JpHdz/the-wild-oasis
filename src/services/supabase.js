import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ldtmxfflgcptudgcswsh.supabase.co";
// export const supabaseUrl = "https://soluujxhngtpoqanjkjl.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkdG14ZmZsZ2NwdHVkZ2Nzd3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MDQ1NjMsImV4cCI6MjA0NTM4MDU2M30.m3yuWCz0_Aaq_bBEtIzAvTs_tev1qEf21bkO0eONAl8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
