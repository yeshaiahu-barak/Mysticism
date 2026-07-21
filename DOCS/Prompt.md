Create a complete, responsive, and beautiful Hebrew (RTL) Progressive Web App (PWA) called "הדוח המיסטי שלי" (My Mystical Report) that generates a personal mystical, numerological, and astrological report.

### UI & Design Requirements:
1. Clean, modern container layout centered on the screen with a soft background (#f0f4f8) and white card.
2. Input Form:
   - Fields: First Name (required), Middle Name (optional), Last Name (required), Extra Last Name (optional), Mobile Phone (required), ID Number (optional), Birth Date (required), Birth Time (default "12:00", 24-hour format), Birth City (default "Jerusalem", supports Hebrew/English).
   - Input styling: Unified, sleek 3D inner-shadow inputs (height 36px, border-radius 6px, right-aligned text). Form labels must be shifted slightly to the left (-2ch) above the inputs.
   - Inputs must start empty and leverage native browser autocomplete/history.
3. Action Buttons: Two top buttons side-by-side: "הפק דוח בסיסי" (Primary blue) and "הפק דוח עמוק" (Premium orange, triggers a popup alert about upcoming paid features).
4. Results & Typography:
   - Full text justification (text-align: justify) across all description paragraphs both on screen and in print mode.
   - Color hierarchy for output cards: Dark blue background for computed Hebrew/Halachic dates, mid-blue background for zodiac signs and ascendant details, and very light blue for general numerology and Gematria cards.
   - Bottom action buttons: "שלח דוח לוואטסאפ" (WhatsApp green) and "הורד דוח כ-PDF" (Red, triggers window.print() styled cleanly via CSS media print).

### Functional & Logic Requirements:
1. Hebrew Gematria calculations using a standard Hebrew letter-to-number dictionary (Aleph=1 to Tav=400).
2. Numerological reduction to single digits (1-9) with rich interpretive texts for each number.
3. External API integrations:
   - Use Nominatim API to get latitude/longitude for the entered birth city.
   - Use Sunrise-Sunset API to determine sunset time on the birth date to accurately calculate the Hebrew Halachic date (shifting to the next day if birth is after sunset).
   - Use Hebcal API for Gregorian-to-Hebrew date conversion and tracking the next Hebrew birthday.
   - Calculate zodiac signs and ascendant signs based on birth date and birth time.
4. Fully responsive, mobile-friendly layout with print styles that hide inputs and buttons, showing only the continuous report content cleanly without awkward page breaks inside cards.
