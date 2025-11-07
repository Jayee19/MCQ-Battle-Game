const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Game = require('./models/Game');

const comprehensiveGames = [
  // ===== VERBAL ABILITY =====
  {
    gameId: 'verbal-easy-1',
    gameName: 'Verbal Ability - Easy Level 1',
    subject: 'Verbal Ability',
    difficulty: 'easy',
    noOfQuestions: 5,
    mcqs: [
      {
        quizId: 've1q1',
        question: 'What is the antonym of "Bright"?',
        options: ['Dark', 'Light', 'Shiny', 'Clear'],
        correctAnswer: 'Dark'
      },
      {
        quizId: 've1q2',
        question: 'Choose the correct spelling:',
        options: ['Occassion', 'Occasion', 'Ocasion', 'Occassoin'],
        correctAnswer: 'Occasion'
      },
      {
        quizId: 've1q3',
        question: 'What does "Benevolent" mean?',
        options: ['Harmful', 'Kind and generous', 'Angry', 'Confused'],
        correctAnswer: 'Kind and generous'
      },
      {
        quizId: 've1q4',
        question: 'Select the word closest in meaning to "Diligent":',
        options: ['Lazy', 'Hardworking', 'Careless', 'Idle'],
        correctAnswer: 'Hardworking'
      },
      {
        quizId: 've1q5',
        question: 'Which sentence is grammatically correct?',
        options: ['She go to school', 'She goes to school', 'She going to school', 'She gone to school'],
        correctAnswer: 'She goes to school'
      }
    ]
  },
  {
    gameId: 'verbal-medium-1',
    gameName: 'Verbal Ability - Medium Level 1',
    subject: 'Verbal Ability',
    difficulty: 'medium',
    noOfQuestions: 5,
    mcqs: [
      {
        quizId: 'vm1q1',
        question: 'What is the meaning of "Ephemeral"?',
        options: ['Lasting forever', 'Lasting a short time', 'Permanent', 'Unchanging'],
        correctAnswer: 'Lasting a short time'
      },
      {
        quizId: 'vm1q2',
        question: 'Find the odd word out:',
        options: ['Lion', 'Tiger', 'Rose', 'Elephant'],
        correctAnswer: 'Rose'
      },
      {
        quizId: 'vm1q3',
        question: 'Complete: "As brave as a ___"',
        options: ['cat', 'lion', 'dog', 'snake'],
        correctAnswer: 'lion'
      },
      {
        quizId: 'vm1q4',
        question: 'What is a synonym for "Meticulous"?',
        options: ['Careless', 'Careful', 'Hasty', 'Quick'],
        correctAnswer: 'Careful'
      },
      {
        quizId: 'vm1q5',
        question: 'Identify the error: "Neither of the students are coming tomorrow"',
        options: ['Neither', 'of', 'are', 'No error'],
        correctAnswer: 'are'
      }
    ]
  },
  
  // ===== QUANTITATIVE APTITUDE =====
  {
    gameId: 'quant-easy-1',
    gameName: 'Quantitative Aptitude - Easy Level 1',
    subject: 'Quantitative Aptitude',
    difficulty: 'easy',
    noOfQuestions: 5,
    mcqs: [
      {
        quizId: 'qe1q1',
        question: 'What is 15 + 25?',
        options: ['35', '40', '45', '50'],
        correctAnswer: '40'
      },
      {
        quizId: 'qe1q2',
        question: 'What is 12 × 5?',
        options: ['50', '60', '70', '80'],
        correctAnswer: '60'
      },
      {
        quizId: 'qe1q3',
        question: 'What is 100 ÷ 4?',
        options: ['20', '25', '30', '35'],
        correctAnswer: '25'
      },
      {
        quizId: 'qe1q4',
        question: 'What is 20% of 80?',
        options: ['12', '14', '16', '18'],
        correctAnswer: '16'
      },
      {
        quizId: 'qe1q5',
        question: 'If a shirt costs Rs. 500 and has a 10% discount, what is the final price?',
        options: ['450', '400', '350', '500'],
        correctAnswer: '450'
      }
    ]
  },
  {
    gameId: 'quant-medium-1',
    gameName: 'Quantitative Aptitude - Medium Level 1',
    subject: 'Quantitative Aptitude',
    difficulty: 'medium',
    noOfQuestions: 5,
    mcqs: [
      {
        quizId: 'qm1q1',
        question: 'If x + 5 = 12, what is x?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7'
      },
      {
        quizId: 'qm1q2',
        question: 'What is the square root of 144?',
        options: ['10', '11', '12', '13'],
        correctAnswer: '12'
      },
      {
        quizId: 'qm1q3',
        question: 'If A:B = 2:3 and B:C = 3:4, what is A:C?',
        options: ['1:2', '2:4', '3:6', '2:3'],
        correctAnswer: '2:4'
      },
      {
        quizId: 'qm1q4',
        question: 'A train travels 120 km in 2 hours. What is its speed?',
        options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'],
        correctAnswer: '60 km/h'
      },
      {
        quizId: 'qm1q5',
        question: 'Simple Interest on Rs. 1000 at 5% per annum for 2 years is:',
        options: ['Rs. 50', 'Rs. 100', 'Rs. 150', 'Rs. 200'],
        correctAnswer: 'Rs. 100'
      }
    ]
  },
  
  // ===== LOGICAL REASONING =====
  {
    gameId: 'logic-easy-1',
    gameName: 'Logical Reasoning - Easy Level 1',
    subject: 'Logical Reasoning',
    difficulty: 'easy',
    noOfQuestions: 5,
    mcqs: [
      {
        quizId: 'le1q1',
        question: 'If all roses are flowers, and all flowers are plants, then all roses are plants. This is:',
        options: ['Inductive', 'Deductive', 'Abductive', 'Invalid'],
        correctAnswer: 'Deductive'
      },
      {
        quizId: 'le1q2',
        question: 'Complete the series: 2, 4, 6, 8, ?',
        options: ['9', '10', '12', '14'],
        correctAnswer: '10'
      },
      {
        quizId: 'le1q3',
        question: 'What comes next: A, B, C, ?',
        options: ['D', 'E', 'F', 'B'],
        correctAnswer: 'D'
      },
      {
        quizId: 'le1q4',
        question: 'If John is taller than Mary, and Mary is taller than Lisa, who is the shortest?',
        options: ['John', 'Mary', 'Lisa', 'Cannot determine'],
        correctAnswer: 'Lisa'
      },
      {
        quizId: 'le1q5',
        question: 'Which is odd one out: Cat, Dog, Rabbit, Desk?',
        options: ['Cat', 'Dog', 'Rabbit', 'Desk'],
        correctAnswer: 'Desk'
      }
    ]
  },
  {
    gameId: 'logic-medium-1',
    gameName: 'Logical Reasoning - Medium Level 1',
    subject: 'Logical Reasoning',
    difficulty: 'medium',
    noOfQuestions: 5,
    mcqs: [
      {
        quizId: 'lm1q1',
        question: 'Complete: 1, 4, 9, 16, ?',
        options: ['20', '25', '30', '35'],
        correctAnswer: '25'
      },
      {
        quizId: 'lm1q2',
        question: 'If APPLE = 1, BALL = 2, what is CAT?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3'
      },
      {
        quizId: 'lm1q3',
        question: 'Complete: 5, 10, 20, 40, ?',
        options: ['50', '60', '70', '80'],
        correctAnswer: '80'
      },
      {
        quizId: 'lm1q4',
        question: 'Which number is missing: 2, 5, 10, 17, ?, 37',
        options: ['24', '26', '28', '30'],
        correctAnswer: '26'
      },
      {
        quizId: 'lm1q5',
        question: 'If Red = 1, Blue = 2, Green = 3, what is Yellow?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
      }
    ]
  },
  
  // ===== GENERAL KNOWLEDGE =====
  {
    gameId: 'gk-easy-1',
    gameName: 'General Knowledge - Easy Level 1',
    subject: 'General Knowledge',
    difficulty: 'easy',
    noOfQuestions: 5,
    mcqs: [
      {
        quizId: 'gk1q1',
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris'
      },
      {
        quizId: 'gk1q2',
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      {
        quizId: 'gk1q3',
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Mark Twain', 'Jane Austen', 'Shakespeare', 'Charles Dickens'],
        correctAnswer: 'Shakespeare'
      },
      {
        quizId: 'gk1q4',
        question: 'What is the largest ocean?',
        options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
        correctAnswer: 'Pacific'
      },
      {
        quizId: 'gk1q5',
        question: 'In which year did World War II end?',
        options: ['1943', '1944', '1945', '1946'],
        correctAnswer: '1945'
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
    
    console.log('✅ Connected to MongoDB\n');
    
    // Clear existing games
    await Game.deleteMany({});
    console.log('🗑️  Cleared existing games\n');
    
    // Insert comprehensive games
    const result = await Game.insertMany(comprehensiveGames);
    console.log(`✅ Successfully inserted ${result.length} comprehensive quiz sets!\n`);
    
    // Show summary
    console.log('📚 NEW QUIZ LIBRARY:');
    comprehensiveGames.forEach((game) => {
      console.log(`✓ ${game.gameName} (${game.noOfQuestions} questions)`);
    });
    
    const totalQuestions = comprehensiveGames.reduce((sum, g) => sum + g.noOfQuestions, 0);
    console.log(`\n📊 TOTAL: ${comprehensiveGames.length} quiz sets with ${totalQuestions} questions!`);
    
    await mongoose.connection.close();
    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
}

seedDatabase();
