# Crowdfunding Platform - JavaScript Project

A full-stack crowdfunding simulation using **Vanilla JavaScript (ES6+)** + **JSON Server** as a mock REST API backend.

**Technologies used:**

- HTML5
- CSS3
- JavaScript (ES6+ only)
- JSON Server (mock backend)

## Features (according to requirements)

- **Guest users**: Browse approved campaigns only + basic search/filter
- **Registered users**: Register / Login, create campaigns, pledge to campaigns, view own campaigns & pledge history
- **Admin users**: Dashboard to manage users (ban/unban) and moderate campaigns (approve/reject/delete)

## How to Run the Project Locally

### Prerequisites

- Node.js (already installed)
- Git (recommended)

### Steps

1. Clone the repository

   ```bash
   git clone https://github.com/YOUR-USERNAME/crowdfunding-platform.git
   cd crowdfunding-platform
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the mock backend (JSON Server)

   ```bash
   npm start
   ```

   → Opens on: http://localhost:3000  
   → Available endpoints:
   - http://localhost:3000/users
   - http://localhost:3000/campaigns
   - http://localhost:3000/pledges

4. Open the frontend
   - Use **Live Server** extension in VS Code (recommended)
   - Or simply open `index.html` in your browser
   - Main entry points:
     - `index.html`
     - `login.html`
     - `register.html`

## Common Issues & Solutions

| Issue                                                                    | Cause                                                | Solution                                                                                     |
| ------------------------------------------------------------------------ | ---------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `npm : ... npm.ps1 cannot be loaded because running scripts is disabled` | PowerShell Execution Policy set to Restricted        | Run as Administrator: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` |
| Windows Firewall blocks Node.js / json-server                            | First time opening port 3000                         | Click **Allow access** and check **Public networks** (or Private)                            |
| json-server shows default README page                                    | Normal behavior when no custom index.html in /public | No issue – API is working. Test directly: `/users`, `/campaigns` etc.                        |
| Data not appearing in browser after `npm start`                          | Missing or invalid db.json                           | Make sure `db.json` exists in root and is valid JSON                                         |

## Current Project Structure

```
crowdfunding-platform/
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   └── ... (more files will be added)
├── db.json
├── package.json
├── .gitignore
├── index.html
├── login.html
├── register.html
└── README.md
```

## Next Steps / To-Do

- [ ] Display approved campaigns on index.html (Guest view)
- [ ] Complete login/register + localStorage session
- [ ] Campaign creation page + image upload (Base64)
- [ ] User dashboard (My Campaigns + My Pledges)
- [ ] Admin dashboard (Ban users, Approve/Reject/Delete campaigns)
- [ ] Basic search & filters using JSON Server query params
- [ ] Mock payment confirmation dialog

## Important Notes

- All data operations use native `fetch` API
- Passwords are stored in plain text (educational project only – not production-ready)
- Campaign images are stored as Base64 strings in db.json

---

Created as part of Client Side 2 course – ITI Zagazig

```

## Contributors

- Mo Samir (MoSamir70)
```

