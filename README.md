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

**Change this password (or create a new admin and remove this one) before
using the app for real data.**

## Creating other accounts
Log in as admin → **Admin Panel** (sidebar) → fill in the "Create Account" form.
- Role: Admin / Teacher / Student / Parent
- Display Size (format): Small or Medium — controls table/row density for that account
- For Student or Parent roles, link the account to an existing student's Roll No.
  (add the student first under **Students** if needed)

## Features
- Role-based access: Admin, Teacher, Student, Parent each see different menus
- Students: scrollable list & forms, search, Save / Clear / Skip / Edit / Delete
- Subjects: add / rename / delete
- Attendance tracking (scrollable list)
- Exams & Results: scrollable table with ▲▼ scroll buttons, per-student marks modal
- Fees management
- Teacher Management: profiles, subject assignment, salary
- Parent Portal: view each linked child's attendance/results, message the teacher
- Export to Excel (.xlsx) and PDF (class report or single student report card)
- Urdu / English language toggle (top right)
- Small / Medium display density toggle (top right) — also settable per-account
  by the admin when creating accounts
- Fully responsive: sidebar becomes a slide-out drawer on mobile

## Data
All data is stored in `school.db` (SQLite), created automatically on first run.
