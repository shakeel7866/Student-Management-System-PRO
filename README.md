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

    Username: admin
    Password: admin123
    <img width="353" height="296" alt="Screenshot 2026-06-28 040347" src="https://github.com/user-attachments/assets/3e777ba1-07eb-42da-9aa9-932f295727ab" />


**Change this password (or create a new admin and remove this one) before
using the app for real data.**

## Creating other accounts
Log in as admin → **Admin Panel** (sidebar) → fill in the "Create Account" form.
- Role: Admin / Teacher / Student / Parent
- Display Size (format): Small or Medium — controls table/row density for that account
- For Student or Parent roles, link the account to an existing student's Roll No.
  (add the student first under **Students** if needed)
<img width="638" height="340" alt="Screenshot 2026-06-28 033112" src="https://github.com/user-attachments/assets/002b03fe-1893-4f68-8abb-c6ec88a79441" />

## Features
- Role-based access: Admin, Teacher, Student, Parent each see different menus
- Students: scrollable list & forms, search, Save / Clear / Skip / Edit / Delete
  
- <img width="638" height="291" alt="Screenshot 2026-06-28 034830" src="https://github.com/user-attachments/assets/a2dc8c11-f866-4442-8d58-e822df2c6b5e" />
Subjects: add / rename / delete                                                                                                 <img width="632" height="292" alt="Screenshot 2026-06-28 034932" src="https://github.com/user-attachments/assets/2d7d1bcb-a528-4fed-946f-3368bbbf7c00" />
- Attendance tracking (scrollable list)
- Exams & Results: scrollable table with ▲▼ scroll buttons, per-student marks modal
- <img width="640" height="275" alt="Screenshot 2026-06-28 034911" src="https://github.com/user-attachments/assets/768338e4-323c-4651-8c78-738e727e2eec" />

- Fees management
- <img width="631" height="272" alt="Screenshot 2026-06-28 035012" src="https://github.com/user-attachments/assets/0b15c46f-3e1f-498e-ad43-93ce1ab912d0" />

- Teacher Management: profiles, subject assignment, salary
- Parent Portal: view each linked child's attendance/results, message the teacher
- Export to Excel (.xlsx) and PDF (class report or single student report card)
- Urdu / English language toggle (top right)
- 
- Small / Medium display density toggle (top right) — also settable per-account
  by the admin when creating accounts
- Fully responsive: sidebar becomes a slide-out drawer on mobile
  <img width="625" height="293" alt="Screenshot 2026-06-28 035043" src="https://github.com/user-attachments/assets/f6711601-691f-476a-85bb-231a59b144f4" />

## Data
All data is stored in `school.db` (SQLite), created automatically on first run.
