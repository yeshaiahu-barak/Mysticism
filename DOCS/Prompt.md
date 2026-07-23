Act as a Senior Full-Stack Security Engineer. Your task is to generate a highly secure, modular, and performant web application for a Mystic & Numerology Report system. The system uses HTML5, vanilla JS (ES6+), and the Supabase v2 SDK. It consists of two files:

1. `index.html` (Public App):
- UI: RTL Hebrew layout. Clean inputs for First Name, Last Name, Phone, ID, Birth Date, Time, and City. Add debounce logic to the City input to fetch coordinates via the OpenStreetMap (Nominatim) API.
- Security: Implement robust XSS sanitization functions (`escapeHTML`, strict RegEx for numbers/Hebrew letters). All inputs MUST be sanitized before hitting the DOM or DB.
- Calculators: Create pure functions to calculate Gematria (Hebrew numerology), reduce numbers to single digits (1-9), calculate standard Zodiac signs, and calculate Ascendant signs based on local sunset times (fetch via sunrise-sunset.org) and birth time. Convert Gregorian to Hebrew dates using the Hebcal API.
- Data & State: Fetch dynamic description texts from a Supabase table `dynamic_texts` (columns: category, item_key, content) with a fallback to a hardcoded local dictionary. 
- Offline Support: Implement network listeners. If offline, cache form submissions in `localStorage` and sync them to the Supabase `reports_log` table upon reconnection.
- Features: Generate a nicely formatted on-screen HTML report, a WhatsApp share button, and a PDF download button that dynamically changes `document.title` to `FirstName-LastName-DD-MM-YYYY` before invoking `window.print()`.

2. `admin.html` (Secure Admin Panel):
- Security: Implement strict Google OAuth using Supabase Auth. Only grant access to the DOM if `session.user.email` exactly matches a specific authorized email constant. Show an "Access Denied" view otherwise.
- UI/UX: Display a statistics dashboard (action counts) and a data table.
- Data Handling: Fetch records from the `reports_log` table based on a datetime-local range filter. 
- Decoupled View: Render a compact HTML table showing only 6 specific columns (ID, Action Date, Time, Name, Phone, Birth Date) for readability.
- Export: Provide a CSV export function that processes the cached array and exports ALL columns from the database.

Code Requirements:
Ensure extreme modularity (separate configs, APIs, security, and UI functions). Include deep inline comments detailing QA testing points, XSS mitigation rationale, and maintainability instructions. Do not use external libraries other than the Supabase SDK.
