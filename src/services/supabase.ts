import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const auth = {
  signUp: (email: string, password: string) =>
    supabase.auth.signUp({ email, password }),
  
  signIn: (email: string, password: string) =>
    supabase.auth.signInWithPassword({ email, password }),
  
  signOut: () => supabase.auth.signOut(),
  
  getUser: () => supabase.auth.getUser(),
  
  onAuthStateChange: (callback: (event: string, session: any) => void) =>
    supabase.auth.onAuthStateChange(callback),
}

// Database helpers
export const db = {
  // Utilities
  utilities: {
    getAll: () =>
      supabase
        .from('utilities')
        .select('*')
        .order('month', { ascending: false }),
    
    create: (data: Database['public']['Tables']['utilities']['Insert']) =>
      supabase.from('utilities').insert(data).select().single(),
    
    update: (id: string, data: Database['public']['Tables']['utilities']['Update']) =>
      supabase.from('utilities').update(data).eq('id', id).select().single(),
    
    delete: (id: string) =>
      supabase.from('utilities').delete().eq('id', id),
  },

  // Furniture
  furniture: {
    getAll: () =>
      supabase
        .from('furniture')
        .select('*')
        .order('date', { ascending: false }),
    
    create: (data: Database['public']['Tables']['furniture']['Insert']) =>
      supabase.from('furniture').insert(data).select().single(),
    
    update: (id: string, data: Database['public']['Tables']['furniture']['Update']) =>
      supabase.from('furniture').update(data).eq('id', id).select().single(),
    
    delete: (id: string) =>
      supabase.from('furniture').delete().eq('id', id),
  },

  // Groceries
  groceries: {
    getAll: () =>
      supabase
        .from('groceries')
        .select('*')
        .order('date', { ascending: false }),
    
    create: (data: Database['public']['Tables']['groceries']['Insert']) =>
      supabase.from('groceries').insert(data).select().single(),
    
    update: (id: string, data: Database['public']['Tables']['groceries']['Update']) =>
      supabase.from('groceries').update(data).eq('id', id).select().single(),
    
    delete: (id: string) =>
      supabase.from('groceries').delete().eq('id', id),
  },

  // Events
  events: {
    getAll: () =>
      supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true }),
    
    create: (data: Database['public']['Tables']['events']['Insert']) =>
      supabase.from('events').insert(data).select().single(),
    
    update: (id: string, data: Database['public']['Tables']['events']['Update']) =>
      supabase.from('events').update(data).eq('id', id).select().single(),
    
    delete: (id: string) =>
      supabase.from('events').delete().eq('id', id),
  },
}
