const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Quiz = require('./models/Quiz');

const sampleQuizzes = [
  {
    topic: 'Verbal Ability',
    difficulty: 'Easy',
    question: 'What is the synonym of "Happy"?',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correctAnswer: 'Joyful',
    explanation: 'Joyful means full of joy, similar to happy'
  },
  {
    topic: 'Verbal Ability',
    difficulty: 'Easy',
    question: 'Choose the correct spelling:',
    options: ['Occassion', 'Occasion', 'Ocasion', 'Occassoin'],
    correctAnswer: 'Occasion',
    explanation: 'The correct spelling is Occasion'
  },
  {
    topic: 'Quantitative Aptitude',
    difficulty: 'Easy',
    question: 'What is 5 + 3?',
    options: ['7', '8', '9', '6'],
    correctAnswer: '8',
    explanation: '5 + 3 = 8'
  },
  {
    topic: 'Quantitative Aptitude',
    difficulty: 'Easy',
    question: 'What is 10 × 5?',
    options: ['50', '55', '45', '60'],
    correctAnswer: '50',
    explanation: '10 × 5 = 50'
  },
  {
    topic: 'Logical Reasoning',
    difficulty: 'Easy',
    question: 'If A > B and B > C, then A > C. This is:',
    options: ['Transitive Property', 'Commutative', 'Associative', 'Distributive'],
    correctAnswer: 'Transitive Property',
    explanation: 'This demonstrates the transitive property of inequalities'
  },
  {
    topic: 'Logical Reasoning',
    difficulty: 'Easy',
    question: 'Complete the series: 2, 4, 6, 8, ?',
    options: ['9', '10', '12', '11'],
    correctAnswer: '10',
    explanation: 'The series increases by 2 each time'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    
    console.log('Connected to MongoDB');
    
    // Clear existing quizzes
    await Quiz.deleteMany({});
    console.log('Cleared existing quizzes');
    
    // Insert sample quizzes
    const result = await Quiz.insertMany(sampleQuizzes);
    console.log(`✅ Successfully inserted ${result.length} sample quizzes!`);
    
    // Show inserted data
    const allQuizzes = await Quiz.find();
    console.log('\nQuizzes in database:');
    console.log(JSON.stringify(allQuizzes, null, 2));
    
    await mongoose.connection.close();
    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
