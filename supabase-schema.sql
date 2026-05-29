create table articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  url text not null unique,
  description text,
  image_url text,
  source_name text not null,
  source_region text not null default 'Global',
  category text not null default 'Tech',
  published_at timestamptz not null,
  created_at timestamptz not null default now()
);

create index articles_published_idx on articles (published_at desc);
create index articles_region_idx on articles (source_region);
create index articles_category_idx on articles (category);

create table subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  active boolean not null default true,
  subscribed_at timestamptz not null default now()
);
