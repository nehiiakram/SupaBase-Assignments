import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = "https://qwsnqnqdwyqbarsscamr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_mXBI1idATH1LO9zNAPO9Dg_Ev0gmjCY";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
