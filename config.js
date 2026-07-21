// ==========================================
// קובץ הגדרות מרכזי למסד הנתונים (Supabase)
// ==========================================
const SUPABASE_URL = 'https://amzchhmwzxzyjqhobqia.supabase.co';       
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtemNoaG13enh6eWpxaG9icWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MjgzMDQsImV4cCI6MjEwMDIwNDMwNH0.xPQcYs9Fia6RYQye6IxihB8qviCdlWW3Yyg6ZJsnTw4'; 

// יצירת מופע תקשורת גלובלי משותף
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
