# ✅ PRE-DEPLOYMENT CHECKLIST

Complete this checklist before deploying to production!

## 🔧 BACKEND SETUP

### Code & Dependencies
- [x] Backend code exists in `/Backend` folder
- [x] `package.json` has all dependencies
- [x] `package-lock.json` exists
- [x] Tested with `npm run dev` locally

### Environment Configuration
- [ ] `.env` file created in Backend folder
- [ ] `MONGODB_URI` set correctly
- [ ] `JWT_SECRET` set (strong password)
- [ ] `PORT=5000` set
- [ ] `NODE_ENV=production` set
- [ ] `.env` file is NOT tracked by git (check `.gitignore`)

### Git Setup
- [ ] `.gitignore` contains `node_modules/`
- [ ] `.gitignore` contains `.env`
- [ ] `.gitignore` contains `.env.local`
- [ ] Backend folder pushed to GitHub

### Database
- [x] MongoDB Atlas cluster created
- [x] Database user created (mcqadmin)
- [x] IP whitelist set to 0.0.0.0/0 (All)
- [x] Collection exists: mcq-battle
- [ ] Test data seeded (run seedGames.js if needed)

---

## 🎨 FRONTEND SETUP

### Code & Dependencies
- [ ] Frontend code exists in `/Frontend` folder
- [ ] `package.json` has all dependencies
- [ ] `package-lock.json` exists
- [ ] `npm run build` completes without errors
- [ ] `npm start` runs locally without errors

### Environment Configuration
- [ ] `.env` file created in Frontend folder
- [ ] `REACT_APP_API_URL` set to backend URL (or leave default for dev)
- [ ] `.env` file is NOT tracked by git

### API Configuration
- [ ] API URL in `api.js` uses environment variable
- [ ] Socket.IO URL uses production URL (if needed)
- [ ] No hardcoded `http://localhost` URLs in code

### Git Setup
- [ ] `.gitignore` contains `node_modules/`
- [ ] `.gitignore` contains `.env`
- [ ] `.gitignore` contains `build/`
- [ ] Frontend folder pushed to GitHub

### Build Verification
- [ ] Run: `cd Frontend && npm run build`
- [ ] Build folder created successfully
- [ ] No build errors or warnings
- [ ] Build size is reasonable (<1MB gzipped)

---

## 🚀 DEPLOYMENT SERVICES

### GitHub
- [ ] Repository created (public)
- [ ] All code pushed to main branch
- [ ] No `.env` files in repository
- [ ] README.md updated with deployment instructions
- [ ] Branch protection enabled (optional)

### Railway (Backend)
- [ ] Railway account created at railway.app
- [ ] GitHub connected to Railway
- [ ] New project created
- [ ] Backend service added from GitHub
- [ ] Environment variables configured:
  - [ ] `MONGODB_URI`
  - [ ] `JWT_SECRET`
  - [ ] `NODE_ENV=production`
- [ ] Deployment triggered
- [ ] Railway URL obtained (save this!)

### Vercel (Frontend)
- [ ] Vercel account created at vercel.app
- [ ] GitHub connected to Vercel
- [ ] New project created
- [ ] Build settings configured:
  - [ ] Framework: React
  - [ ] Root Directory: Frontend
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `build`
- [ ] Environment variables configured:
  - [ ] `REACT_APP_API_URL=<Railway-URL>`
- [ ] Deployment triggered
- [ ] Vercel URL obtained (save this!)

---

## 🧪 TESTING

### Backend API Testing
- [ ] Test backend is accessible:
  ```bash
  curl https://your-railway-url.up.railway.app/game
  ```
  Should return a JSON array of games

- [ ] Test signup endpoint:
  ```bash
  curl -X POST https://your-railway-url.up.railway.app/users/signup \
    -H "Content-Type: application/json" \
    -d '{"username":"test","email":"test@example.com","password":"Test@123"}'
  ```

- [ ] Test login endpoint

### Frontend Testing
- [ ] Visit Vercel URL in browser
- [ ] App loads without errors
- [ ] Navigation works (all pages accessible)
- [ ] Signup creates new account
- [ ] Login works with new account
- [ ] Play Individual Quiz loads questions
- [ ] Select answer and progresses to next question
- [ ] Quiz results display correctly

### Real-time Features Testing
- [ ] Open frontend in 2 browser tabs/windows
- [ ] Both logged in with different accounts
- [ ] Click "Play with Friends" on both
- [ ] Create room on Tab 1
- [ ] Join room from Tab 2
- [ ] Both show "Ready" status
- [ ] Start quiz from Tab 1
- [ ] Both see same questions
- [ ] Socket.IO connection working (check browser console)

### Dashboard Testing
- [ ] Play a quiz and complete it
- [ ] Go to Dashboard
- [ ] Check quiz appears in history
- [ ] Accuracy displayed correctly
- [ ] Leaderboard shows players

---

## 🔐 SECURITY CHECK

- [ ] `.env` file NOT in git repository
- [ ] No hardcoded API keys in code
- [ ] MongoDB connection string only in `.env`
- [ ] JWT secret is strong (20+ characters)
- [ ] CORS configured in backend
- [ ] Input validation on backend
- [ ] Passwords hashed (bcrypt)
- [ ] No sensitive data in frontend code

---

## 📊 FINAL VERIFICATION

- [ ] All tests passed
- [ ] No console errors in browser
- [ ] No errors in Railway/Vercel logs
- [ ] Response times acceptable
- [ ] Mobile responsive (test on mobile device)
- [ ] All links working
- [ ] Social links in footer working
- [ ] Email in footer clickable

---

## 🎯 DEPLOYMENT COMPLETE!

Once all items are checked, your MCQ Battle Game is ready for:
- ✅ Production use
- ✅ Sharing with users
- ✅ Portfolio showcase
- ✅ Job applications

---

## 📝 IMPORTANT NOTES

1. **Keep `.env` files SECRET** - Never commit to git
2. **Monitor Railway logs** - Check for errors after deployment
3. **Monitor Vercel logs** - Check browser console for errors
4. **Test thoroughly** - Don't skip testing!
5. **Backup database** - Set up MongoDB backups
6. **Monitor costs** - Check Railway/Vercel billing

---

## 🆘 TROUBLESHOOTING

If something doesn't work:

1. **Check browser console** for errors (F12)
2. **Check Railway logs** at railway.app
3. **Check Vercel logs** at vercel.com
4. **Verify environment variables** are set correctly
5. **Test API directly** with curl/Postman
6. **Check MongoDB connection** in MongoDB Atlas
7. **Clear browser cache** and restart

---

## 📞 NEED HELP?

- Railway Docs: https://railway.app/docs
- Vercel Docs: https://vercel.com/docs
- MongoDB Docs: https://docs.mongodb.com
- React Docs: https://react.dev

Good luck! 🚀

