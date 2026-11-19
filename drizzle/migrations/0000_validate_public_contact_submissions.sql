ALTER POLICY "Anyone can submit contact form"
ON public.contact_submissions
TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email = btrim(email)
  AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  AND char_length(btrim(message)) BETWEEN 1 AND 3000
  AND (properties IS NULL OR char_length(properties) <= 10)
  AND read = false
  AND created_at = now()
);
