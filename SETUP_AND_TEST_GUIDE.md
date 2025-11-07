# MCQ 1vs1 Battle Game - Setup & Testing Guide

## Project Overview
This is a full-stack **MCQ (Multiple Choice Questions) 1v1 Battle Game** built during an AZ Hackathon.

**Tech Stack:**
- **Frontend:** React 18, Bootstrap 5, Socket.IO Client, Chart.js
- **Backend:** Node.js/Express, MongoDB Atlas, Mongoose
- **Real-time:** Socket.IO & Pusher for live game updates

## Prerequisites
- Node.js (v14+) and npm
- MongoDB Atlas account (for cloud database)
- Git

## Step 1: Install Dependencies

### Frontend Setup
```bash
cd Frontend
npm install
```

### Backend Setup
```bash
cd Backend
npm install
```

## Step 2: Environment Configuration

The backend needs a `.env` file. Create it in the Backend directory:

```bash
cd Backend
touch .env
```

Add the following to `.env`:
```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

**Get MongoDB URI:**
1. Create a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Create a database user
4. Copy the connection string
5. Replace `<password>` with your database password

## Step 3: Run the Application

### Terminal 1 - Start Backend Server
```bash
cd Backend
npm run dev  # Uses nodemon for auto-reload
# Or: npm start
# Server runs on http://localhost:5000
```

### Terminal 2 - Start Frontend React App
```bash
cd Frontend
npm start
# Opens at http://localhost:3000
```

## Step 4: Testing the Application

### Frontend Testing
```bash
cd Frontend
npm test  # Runs Jest test suite
npm run build  # Creates production build
```

### Manual Testing Checklist
- [ ] App loads at http://localhost:3000
- [ ] User can sign up/register
- [ ] User can login
- [ ] Can start a new game
- [ ] Real-time updates work (Socket.IO)
- [ ] Can play against opponents
- [ ] Score calculation works
- [ ] Dashboard displays stats correctly
- [ ] Responsive design on mobile

## Project Structure

### Frontend (/Frontend)
```
src/
├── components/      # Reusable React components
├── pages/          # Page components
├── services/       # API calls (axios)
├── hooks/          # Custom React hooks
├── styles/         # CSS/Bootstrap styles
└── App.js          # Main app component
```

### Backend (/Backend)
```
├── routes/         # API endpoints
├── Controller/     # Business logic
├── models/         # MongoDB schemas
├── Middleware/     # Auth & validation
├── Utils/          # Helper functions
└── server.js       # Express server entry point
```

## Common Issues & Solutions

### 1. MongoDB Connection Error
**Problem:** "Cannot connect to MongoDB"
**Solution:**
- Verify MONGODB_URI in .env
- Check IP whitelist in MongoDB Atlas
- Ensure database user credentials are correct

### 2. CORS Error
**Problem:** Frontend can't communicate with backend
**Solution:**
- Backend has CORS enabled, verify both services are running
- Check network in browser DevTools

### 3. Socket.IO Connection Failed
**Problem:** Real-time features not working
**Solution:**
- Ensure backend is running on correct port
- Check firewall settings
- Verify Socket.IO middleware is configured

## Deployment Options

### Frontend Deployment
- **Vercel:** `npm run build` → Deploy to Vercel
- **Netlify:** Connect GitHub repo directly
- **AWS S3 + CloudFront**

### Backend Deployment
- **Heroku:** (Git push deployment)
- **Railway:** Easy Node.js hosting
- **AWS EC2:** More control, DIY setup
- **DigitalOcean:** Simple VPS option

## Portfolio Enhancement Tips

1. **Add Features:**
   - Leaderboard system
   - User profiles
   - Different quiz categories
   - Difficulty levels

2. **Improve UI/UX:**
   - Modern animations
   - Dark mode
   - Mobile optimization
   - Accessibility improvements

3. **Documentation:**
   - Add API documentation (Swagger)
   - Create architecture diagrams
   - Write component documentation

4. **Performance:**
   - Optimize bundle size
   - Add caching strategies
   - Database indexing

5. **Testing:**
   - Add unit tests
   - Integration tests
   - E2E tests with Cypress

## Next Steps
1. ✅ Clone repository
2. ✅ Install dependencies
3. ✅ Configure environment
4. ✅ Run locally and test
5. → Deploy to production
6. → Add to portfolio with live link
7. → Document your improvements

---
**Repository:** https://github.com/yogeshlakwal3114/MCQ-Battle-Game
**License:** MIT
