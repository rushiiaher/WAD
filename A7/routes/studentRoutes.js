const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// CREATE
router.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Student Created',
            data: student
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    const students = await Student.find();
    res.status(200).json({
        count: students.length,
        data: students
    });
});

// READ ONE
router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const updated = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    res.json({
        message: 'Student Updated',
        data: updated
    });
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);

    res.json({
        success: true,
        message: 'Student Deleted Successfully'
    });
});

module.exports = router;