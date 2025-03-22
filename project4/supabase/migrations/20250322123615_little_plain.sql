/*
  # Create products table for WePack industrial reseller website

  1. New Tables
    - `products`
      - `id` (bigint, primary key)
      - `name` (text, not null)
      - `description` (text)
      - `quantity` (integer, not null)
      - `image_url` (text, not null)
      - `price` (numeric, not null)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
    - Add policy for authenticated users to manage products
*/

CREATE TABLE IF NOT EXISTS products (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name text NOT NULL,
  description text,
  quantity integer NOT NULL DEFAULT 0,
  image_url text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products
CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage products
CREATE POLICY "Authenticated users can manage products"
  ON products
  USING (auth.role() = 'authenticated');