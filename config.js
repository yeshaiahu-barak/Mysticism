// ==========================================
// קובץ הגדרות מרכזי למסד הנתונים (Supabase)
// ==========================================
const SUPABASE_URL = 'https://amzchhmwzxzyjqhobqia.supabase.co';       
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtemNoaG13enh6eWpxaG9icWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjN9.eyJwQ3JvYiAzMi5ta0pjMjNEb3pMM3I2WVp1SXZZSW1mRmVtbU5vYWcxM2VuaDY'; 

// יצירת מופע תקשורת גלובלי משותף
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
