import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type Article = {
  id: string;
  title: string;
  url: string;
  description: string | null;
  image_url: string | null;
  source_name: string;
  source_region: string;
  category: string;
  published_at: string;
  created_at: string;
};

export type Subscriber = {
  id: string;
  email: string;
  subscribed_at: string;
  active: boolean;
};
