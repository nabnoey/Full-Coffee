import express from 'express';
import CoffeeController from "../controllers/Coffee.controller.js"

const router = express.Router();

// Create a new coffee
router.post('/', CoffeeController.create);       

// Get all coffees
router.get('/', CoffeeController.getAll);

// Get a coffee by ID
router.get('/:id', CoffeeController.getById);

// Update a coffee by ID
router.put('/:id', CoffeeController.update);

// Delete a coffee by ID
router.delete('/:id', CoffeeController.delete);

export default router;