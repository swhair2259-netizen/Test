import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../lib/supabaseClient';

const router = express.Router();

// Route to create a new user
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const { user, error } = await createUser(email, password);
        if (error) throw error;
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to get user details
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUser(id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to update user details
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const { user, error } = await updateUser(id, updates);
        if (error) throw error;
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to delete a user
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { error } = await deleteUser(id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;