-- Extra lead details captured by the contact form
ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS company  TEXT,
  ADD COLUMN IF NOT EXISTS location TEXT,
  ADD COLUMN IF NOT EXISTS phone    TEXT;
