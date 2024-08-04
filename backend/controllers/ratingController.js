const Rating = require('../models/Rating');

// Pegar todas as avaliações
exports.getAllRatings = async (req, res) => {
    try {
        const ratings = await Rating.find();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Pegar uma avaliação por ID
exports.getRatingById = async (req, res) => {
    try {
        const rating = await Rating.findById(req.params.id);
        if (!rating) return res.status(404).json({ message: 'Avaliação não encontrada' });
        res.status(200).json(rating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Criar nova avaliação
exports.createRating = async (req, res) => {
    const rating = new Rating({
        userId: req.body.userId,
        gameId: req.body.gameId,
        score: req.body.score,
        review: req.body.review
    });

    try {
        const newRating = await rating.save();
        res.status(201).json(newRating);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Atualizar avaliação
exports.updateRating = async (req, res) => {
    try {
        const updatedRating = await Rating.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRating) return res.status(404).json({ message: 'Avaliação não encontrada' });
        res.status(200).json(updatedRating);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a avaliacao
exports.deleteRating = async (req, res) => {
    try {
        const deletedRating = await Rating.findByIdAndDelete(req.params.id);
        if (!deletedRating) return res.status(404).json({ message: 'Avaliação não encontrada' });
        res.status(200).json({ message: 'Avaliação deletada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
