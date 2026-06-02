-- Migration v3: add source_country column

ALTER TABLE articles ADD COLUMN IF NOT EXISTS source_country TEXT;

CREATE INDEX IF NOT EXISTS articles_source_country_idx ON articles (source_country);

-- Backfill based on source_name mapping
-- Update known sources with their country
UPDATE articles SET source_country = 'United States' WHERE source_name IN ('TechCrunch', 'The Verge', 'Ars Technica', 'Wired', 'MIT Technology Review', 'VentureBeat', 'Engadget', 'Mashable', 'CNET', 'ZDNet', 'PCMag', 'Tom''s Hardware', 'AnandTech', 'The Register', 'InfoWorld', 'Network World', 'ComputerWorld', 'Slashdot', 'Hacker News', 'TechRepublic', 'ReadWrite', 'Business Insider Tech', 'Fortune Tech', 'Bloomberg Technology', 'Wall Street Journal Tech', 'New York Times Tech', 'Washington Post Tech', 'Fast Company Tech', 'Inc Tech', 'Forbes Tech', 'Recode', 'Protocol', 'The Information');
UPDATE articles SET source_country = 'United Kingdom' WHERE source_name IN ('BBC Technology', 'The Guardian Technology', 'The Telegraph Technology', 'The Independent Tech');
UPDATE articles SET source_country = 'Global' WHERE source_name IN ('IEEE Spectrum', 'Science Daily', 'Nature Technology', 'Communications of the ACM');
UPDATE articles SET source_country = 'Egypt' WHERE source_name IN ('Egypt Tech', 'Masrawy Tech', 'CairoScene Tech', 'Youm7 Tech', 'Al-Ahram Tech');
UPDATE articles SET source_country = 'Saudi Arabia' WHERE source_name IN ('Arab News Tech', 'Saudi Gazette Tech', 'Argaam Tech');
