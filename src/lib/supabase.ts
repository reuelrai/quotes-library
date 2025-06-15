import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://upgxpasuoyqerftwjnzf.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZ3hwYXN1b3lxZXJmdHdqbnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMDE0OTIsImV4cCI6MjA2NTU3NzQ5Mn0.qDanqKlancuJir0meBuw18hKABgUZZMRyEcv2907Kfc"

export const supabase = createClient(supabaseUrl, supabaseKey)
