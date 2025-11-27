import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  created_at: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  category_id: string;
  latitude: number;
  longitude: number;
  address: string;
  image_url?: string;
  is_featured: boolean;
  floor_number?: number;
  created_at: string;
  updated_at: string;
  category?: Category;
}
