# Student Management System PRO — Flask Web Edition

A responsive (mobile + desktop) web app with role-based logins.

## Setup
```
pip install -r requirements.txt
python app.py
```
Then open http://127.0.0.1:5000 in your browser (or http://<your-ip>:5000 from
a phone on the same network, since the server binds to 0.0.0.0).

## First login

A default admin account is created automatically the first time you run the app:

    Username: admin  (given password(i will give you password )
    Password: admin123
<img width="353" height="296" alt="image" src="https://github.com/user-attachments/assets/8baadd8b-4ea7-45b7-af58-4aa7b85b2f97" />

**Change this password (or create a new admin and remove this one) before
using the app for real data.**

## Creating other accounts
Log in as admin → **Admin Panel** (sidebar) → fill in the "Create Account" form.
- Role: Admin / Teacher / Student / Parent
- Display Size (format): Small or Medium — controls table/row density for that account
- For Student or Parent roles, link the account to an existing student's Roll No.
  (add the student first under **Students** if needed)
<img width="638" height="340" alt="Screenshot 2026-06-28 033112" src="https://github.com/user-attachments/assets/81b2e306-40b6-4e92-bd94-3c869b3d9531" />

## Features
- Role-based access: Admin, Teacher, Student, Parent each see different menus
- Students: scrollable list & forms, search, Save / Clear / Skip / Edit / Delete   <img width="638" height="291" alt="Screenshot 2026-06-28 034830" src="https://github.com/user-attachments/assets/8a54832d-60ed-43c5-b5a1-5b87f08d25fb" />
<img width="640" height="275" alt="Screenshot 2026-06-28 034911" src="https://github.com/user-attachments/assets/da9dc54b-c3ea-4fbb-8b0f-7a81d06bbe68" />

- Subjects: add / rename / delete  <img width="632" height="292" alt="Screenshot 2026-06-28 034932" src="https://github.com/user-attachments/assets/71920237-d0f0-465e-8a57-d72075785133" />

- Attendance tracking (scrollable list)   
- Exams & Results: scrollable table with ▲▼ scroll buttons, per-student marks modal
- Fees management   <img width="631" height="272" alt="Screenshot 2026-06-28 035012" src="https://github.com/user-attachments/assets/ce90f65e-6395-43ce-9bc6-d3740043eb0e" />

- Teacher Management: profiles, subject assignment, salary
- Parent Portal: view each linked child's attendance/results, message the teacher
- Export to Excel (.xlsx) and PDF (class report or single student report card)
- Urdu / English language toggle (top right)
- Small / Medium display density toggle (top right) — also settable per-account
  by the admin when creating accounts   <img width="625" height="293" alt="Screenshot 2026-06-28 035043" src="https://github.com/user-attachments/assets/03ba3ae8-fec5-4466-9855-0eeea19d642b" />

- Fully responsive: sidebar becomes a slide-out drawer on mobile

## Data
All data is stored in `school.db` (SQLite), created automatically on first run.
