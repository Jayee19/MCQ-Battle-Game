const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  badges: {
    firstQuiz: { achieved: { type: Boolean, default: false }, achievedAt: Date },
    perfectScore: { achieved: { type: Boolean, default: false }, achievedAt: Date, count: { type: Number, default: 0 } },
    streakOf5: { achieved: { type: Boolean, default: false }, achievedAt: Date },
    speedDemon: { achieved: { type: Boolean, default: false }, achievedAt: Date },
    masterLogic: { achieved: { type: Boolean, default: false }, achievedAt: Date },
    mathGenius: { achieved: { type: Boolean, default: false }, achievedAt: Date },
    wordSmith: { achieved: { type: Boolean, default: false }, achievedAt: Date },
    allRounder: { achieved: { type: Boolean, default: false }, achievedAt: Date },
    topRanker: { achieved: { type: Boolean, default: false }, achievedAt: Date }
  },
  totalQuizzesAttempted: { type: Number, default: 0 },
  totalScoreEarned: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Achievement', AchievementSchema);
