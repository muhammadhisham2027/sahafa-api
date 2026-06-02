-- Run this in Supabase SQL editor
ALTER TABLE articles ADD COLUMN IF NOT EXISTS summary TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

-- Index for summary backfill query
CREATE INDEX IF NOT EXISTS articles_summary_null_idx ON articles (created_at) WHERE summary IS NULL;
