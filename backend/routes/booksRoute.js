import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for save new book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});

// Route for get all books from database
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Route for get one books by id from database
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Route for update book by id from database
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
                data: null,
            });
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).send({
                message: 'Book not found',
                data: null,
            });
        } else {
            return res.status(200).send({
                message: 'Book updated successfully',
                data: result,
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Route for delete book by id from database
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({
                message: 'Book not found',
                data: null,
            });
        } else {
            return res.status(200).send({
                message: 'Book deleted successfully',
                data: result,
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

export default router;