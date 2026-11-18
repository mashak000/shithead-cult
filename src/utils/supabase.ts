import { createClient } from '@supabase/supabase-js';

// TO DO after generating types from the tables, rewrite this with types!!!!

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
