const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Game = require('./models/Game');

const sampleGames = [
  {
    gameId: 'game-1',
    gameName: 'Verbal Ability Quiz',
    subject: 'Verbal Ability',
    difficulty: 'easy',
    noOfQuestions: 2,
    mcqs: [
      {
        quizId: 'q1',
        question: 'What is the synonym of "Happy"?',
        options: ['Sad', 'Joyful', 'Angry', 'Tired'],
        correctAnswer: 'Joyful'
      },
      {
        quizId: 'q2',
        question: 'Choose the correct spelling:',
        options: ['Occassion', 'Occasion', 'Ocasion', 'Occassoin'],
        correctAnswer: 'Occasion'
      }
    ]
  },
  {
    gameId: 'game-2',
    gameName: 'Quantitative Aptitude Quiz',
    subject: 'Quantitative Aptitude',
    difficulty: 'easy',
    noOfQuestions: 2,
    mcqs: [
      {
        quizId: 'q3',
        question: 'What is 5 + 3?',
        options: ['7', '8', '9', '6'],
        correctAnswer: '8'
      },
      {
        quizId: 'q4',
        question: 'What is 10 × 5?',
        options: ['50', '55', '45', '60'],
        correctAnswer: '50'
      }
    ]
  },
  {
    gameId: 'game-3',
    gameName: 'Logical Reasoning Quiz',
    subject: 'Logical Reasoning',
    difficulty: 'easy',
    noOfQuestions: 2,
    mcqs: [
      {
        quizId: 'q5',
        question: 'If A > B and B > C, then A > C. This is:',
        options: ['Transitive Property', 'Commutative', 'Associative', 'Distributive'],
        correctAnswer: 'Transitive Property'
      },
      {
        quizId: 'q6',
        question: 'Complete the series: 2, 4, 6, 8, ?',
        options: ['9', '10', '12', '11'],
        correctAnswer: '10'
      }
    ]
  },
  {
    gameId: 'game-4',
    gameName: 'All Subjects Quiz',
    subject: 'All',
    difficulty: 'easy',
    noOfQuestions: 3,
    mcqs: [
      {
        quizId: 'q7',
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
      },
      {
        quizId: 'q8',
        question: 'What is 2 × 3?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '6'
      },
      {
        quizId: 'q9',
        question: 'What comes next: A, B, C, ?',
        options: ['D', 'E', 'F', 'G'],
        correctAnswer: 'D'
      }
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    
    console.log('✅ Connected to MongoDB');
    
    // Clear existing games
    await Game.deleteMany({});
    console.log('🗑️  Cleared existing games');
    
    // Insert sample games
    const result = await Game.insertMany(sampleGames);
    console.log(`✅ Successfully inserted ${result.length} sample games!`);
    
    // Show inserted data
    const allGames = await Game.find();
    console.log('\n📚 Games in database:');
    allGames.forEach((game, index) => {
      console.log(`${index + 1}. ${game.gameName} (${game.subject}) - ${game.noOfQuestions} questions`);
    });
    
    await mongoose.connection.close();
    console.log('\n✅ Database seeded successfully! You can now test the quiz!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
}

seedDatabase();
