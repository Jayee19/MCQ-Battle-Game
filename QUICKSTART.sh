#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}MCQ Battle Game - Quick Start Setup${NC}"
echo -e "${GREEN}========================================${NC}\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install it first.${NC}"
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✅ Node.js found:$(node -v)${NC}"
echo -e "${GREEN}✅ npm found:$(npm -v)${NC}\n"

# Install Frontend Dependencies
echo -e "${YELLOW}📦 Installing Frontend dependencies...${NC}"
cd Frontend
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
else
    echo -e "${RED}❌ Frontend installation failed${NC}"
    exit 1
fi

# Install Backend Dependencies
echo -e "\n${YELLOW}📦 Installing Backend dependencies...${NC}"
cd ../Backend
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backend dependencies installed${NC}"
else
    echo -e "${RED}❌ Backend installation failed${NC}"
    exit 1
fi

# Check for .env file
if [ ! -f .env ]; then
    echo -e "\n${YELLOW}⚠️  .env file not found in Backend directory${NC}"
    echo -e "${YELLOW}Creating .env template...${NC}"
    cat > .env << 'ENVEOF'
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
ENVEOF
    echo -e "${GREEN}✅ .env template created${NC}"
    echo -e "${RED}⚠️  Please update .env with your MongoDB credentials${NC}"
fi

echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}Setup Complete! 🎉${NC}"
echo -e "${GREEN}========================================${NC}\n"

echo -e "${YELLOW}Next Steps:${NC}"
echo -e "1. ${YELLOW}Update Backend/.env with MongoDB credentials${NC}"
echo -e "2. ${YELLOW}Open Terminal 1 and run:${NC}"
echo -e "   ${GREEN}cd Backend && npm run dev${NC}"
echo -e "3. ${YELLOW}Open Terminal 2 and run:${NC}"
echo -e "   ${GREEN}cd Frontend && npm start${NC}"
echo -e "4. ${YELLOW}Frontend will open at${NC} ${GREEN}http://localhost:3000${NC}\n"

