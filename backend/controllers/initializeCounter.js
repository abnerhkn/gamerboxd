const Counter = require("../models/Counter");

const initializeCounter = async () => {
  try {
    await Counter.findByIdAndUpdate(
      { _id: "userId" },
      { $setOnInsert: { seq: 0 } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    console.log("Counter initialized");
  } catch (err) {
    console.error("Erro ao inicializar o contador:", err);
  }
};

module.exports = initializeCounter;
