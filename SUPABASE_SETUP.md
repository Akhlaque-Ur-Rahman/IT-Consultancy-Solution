# Supabase Contact Form Setup

## 1. Environment Variables

Add to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://ylixeaqfhybwnksxuibr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-publishable-key-here
```

## 2. Create Table in Supabase

In **Supabase Dashboard → SQL Editor**, run:

```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  company TEXT,
  source TEXT DEFAULT 'contact_page',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "No public read" ON contact_submissions
  FOR SELECT USING (false);
```

View submissions in **Table Editor → contact_submissions**.
