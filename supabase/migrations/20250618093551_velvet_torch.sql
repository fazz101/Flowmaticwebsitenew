/*
  # Create consultations table for form submissions

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the person
      - `email` (text, required) - Email address
      - `company` (text, optional) - Company name
      - `message` (text, optional) - Message/inquiry details
      - `created_at` (timestamp) - When the consultation was requested
      - `status` (text) - Status of the consultation (pending, contacted, completed)

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for public insert (anyone can submit a consultation request)
    - Add policy for authenticated users to read all consultations (for admin access)
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation requests
CREATE POLICY "Anyone can submit consultation requests"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all consultations (for admin purposes)
CREATE POLICY "Authenticated users can read all consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update consultation status
CREATE POLICY "Authenticated users can update consultations"
  ON consultations
  FOR UPDATE
  TO authenticated
  USING (true);