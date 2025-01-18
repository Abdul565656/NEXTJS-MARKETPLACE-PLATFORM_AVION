import { type SchemaTypeDefinition } from 'sanity';
import product from './product';
import category from './category'; // Import the category schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category], // Add category here
};

