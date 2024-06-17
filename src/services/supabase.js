import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://soluujxhngtpoqanjkjl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvbHV1anhobmd0cG9xYW5qa2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTczNjIsImV4cCI6MjAzMjQ5MzM2Mn0.sisf38shF9dJ7oxFKhPpxQhRxNGwDg1h-q0QtC71t0E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
