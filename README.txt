REIGN COMPLETE SITE
===================

This is a self-contained frontend demo site based on the Reign Operations Console design.

STRUCTURE
---------
index.html                 Public landing page
pages/login.html           Demo login
pages/register.html        Demo registration
pages/dashboard.html       User/member dashboard
pages/admin.html           Administrator operations console
pages/settings.html        Account settings
css/style.css              Complete styling
js/app.js                  Shared authentication, layout and utilities
js/data.js                 Demo operational data
js/dashboard.js            User dashboard logic
js/admin.js                Admin console logic
js/settings.js             Settings logic

DEMO LOGIN
----------
Administrator:
admin@reign.local
admin123

User:
user@reign.local
user123

FUNCTIONALITY
-------------
- Login and demo role routing
- Registration using localStorage
- Responsive public landing page
- User dashboard
- Admin operations console
- User registry search
- KYC approval workflow
- Payout approval/rejection workflow
- Risk monitor
- Audit log search
- CSV report exports
- Settings/profile editing
- Mobile navigation
- Toast notifications

IMPORTANT
---------
This is a frontend application using localStorage for demo persistence.
It is NOT a production financial platform and does not contain a real database,
payment gateway, KYC provider, identity verification service, server-side
authentication, encryption/key management, or regulatory compliance layer.

For production, connect it to a secure backend API/database and implement
server-side authorization, password hashing, sessions/tokens, MFA, audit
immutability, KYC provider integration, payment/bank integrations, validation,
rate limiting, CSRF protection, logging, backups and appropriate compliance.
