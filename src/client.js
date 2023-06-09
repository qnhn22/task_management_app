
import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKEY = import.meta.env.VITE_SUPABASE_KEY;
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseURL, supabaseKEY)

