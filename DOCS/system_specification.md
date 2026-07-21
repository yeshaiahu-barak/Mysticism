# איפיון מערכת: הדוח המיסטי שלי (My Mystical Report)

## 1. סקירה כללית (Overview)
אפליקציית רשת מתקדמת (PWA) המפיקה דוח מיסטי אישי, מדויק ומעוצב, המשלב חישובי נומרולוגיה, גימטריה עברית ואסטרולוגיה (כולל אופק מדויק לפי שעת שקיעה ותאריכים עבריים הלכתיים).

## 2. תכונות מרכזיות (Features)
- **חישובי שם ותאריכים:** גימטריה ונומרולוגיה פרטנית לשם פרטי, שם נוסף, שם משפחה, תעודת זהות, מספר תקשורת (טלפון) ותאריך לידה.
- **אסטרולוגיה ואופק מתקדם:** שילוב APIs חיצוניים לאיתור קואורדינטות לפי עיר (ברירת מחדל: ירושלים), חישוב שעת שקיעה מדויקת, המרה לתאריך עברי הלכתי (התחשבות בשקיעה), ומציאת מזל שמש ומזל אופק עם כישרונות מולדים והתאמה זוגית.
- **חוויית משתמש מוקפדת (UI/UX):** רובריקות הזנה קומפקטיות ואחידות בעלות מראה תלת-ממדי עדין, יישור טקסט מלא (`justify`) לקריאה נוחה, ותמיכה בהיסטוריית הקלדה של הדפדפן (Autocomplete).
- **ייצוא ושיתוף:** הפקת PDF רציף מותאם להדפסה וללא שבירות עמוד מיותרות, ושיתוף ישיר של תוצאות הדוח ב-WhatsApp.
- **PWA - Progressive Web App:** אפשרות להתקנה מלאה כמסך הבית במכשירים ניידים עם לוגו וקטורי מוזהב ייחודי (`logo.svg`).

## 3. מבנה טכנולוגי (Tech Stack)
- **Frontend:** HTML5, CSS3 (Flexbox, Print Media Queries, Custom 3D Shadows).
- **Logic:** Vanilla JavaScript (ES6+), מודולרי ומבוסס פונקציות עזר מתמטיות.
- **APIs חיצוניים:** 
  - Nominatim (מיפוי ערים לקואורדינטות).
  - Sunrise-Sunset (חישוב זמני שקיעה).
  - Hebcal (המרת תאריכים לועזי-עברי).

---

# System Specification: My Mystical Report

## 1. System Overview
An advanced Progressive Web App (PWA) generating a personal, accurate, and beautifully styled mystical report combining numerology, Hebrew Gematria, and astrology (including precise ascendant calculations based on sunset time and Halachic Hebrew dates).

## 2. Core Features
- **Name & Date Calculations:** Detailed Gematria and numerology for first name, middle name, last name, ID number, phone number, and birth date.
- **Advanced Astrology & Ascendant:** Integration with external APIs for city-based coordinates (default: Jerusalem), precise sunset calculation, Halachic Hebrew date conversion, and zodiac/ascendant calculations with innate talents and romantic compatibility.
- **Polished UI/UX:** Compact, unified 3D-styled input fields, full text justification (`justify`), and clean browser autocomplete history.
- **Export & Sharing:** Continuous print-optimized PDF generation and direct WhatsApp sharing.
- **PWA Support:** Full mobile home screen installation capability with a custom golden SVG logo.

## 3. Technology Stack
- **Frontend:** HTML5, CSS3.
- **Logic:** Vanilla JavaScript (ES6+).
- **External APIs:** Nominatim, Sunrise-Sunset, Hebcal.
