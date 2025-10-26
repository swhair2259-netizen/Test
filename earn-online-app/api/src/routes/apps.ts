import { Router } from 'express';
import { createClient } from '@supabase/supabase-js';

const router = Router();
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Get all apps
router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('apps')
        .select('*');

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
});

// Get a single app by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('apps')
        .select('*')
        .eq('id', id)
        .single();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
});

// Create a new app
router.post('/', async (req, res) => {
    const { name, description, category } = req.body;
    const { data, error } = await supabase
        .from('apps')
        .insert([{ name, description, category }]);

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
});

// Update an app by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, category } = req.body;
    const { data, error } = await supabase
        .from('apps')
        .update({ name, description, category })
        .eq('id', id);

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
});

// Delete an app by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('apps')
        .delete()
        .eq('id', id);

    if (error) return res.status(400).json({ error: error.message });
    res.status(204).send();
});

export default router;