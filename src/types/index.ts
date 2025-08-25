// Core data types for the household dashboard

export interface UtilityData {
  id?: string;
  month: string;
  electricity: number;
  gas: number;
  water: number;
  bundle: number;
  other: number;
  splitMethod: 'equal' | 'proportional' | 'custom';
  customA: number;
  customB: number;
  created_at?: string;
  user_id?: string;
}

export interface FurnitureExpense {
  id?: string;
  item: string;
  cost: number;
  category: 'living' | 'bedroom' | 'kitchen' | 'bathroom' | 'office';
  date: string;
  paidBy: 'joint' | 'A' | 'B';
  created_at?: string;
  user_id?: string;
}

export interface GroceryExpense {
  id?: string;
  store: string;
  amount: number;
  date: string;
  paidBy: 'joint' | 'A' | 'B';
  created_at?: string;
  user_id?: string;
}

export interface CalendarEvent {
  id?: string;
  title: string;
  date: string;
  time?: string;
  category: 'rent' | 'utilities' | 'groceries' | 'furniture' | 'maintenance' | 'cleaning' | 'personal' | 'other';
  description?: string;
  recurring: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  created_at?: string;
  user_id?: string;
}

export interface RentCalculation {
  rentAmount: number;
  salaryA: number;
  salaryB: number;
  splitMethod: 'equal' | 'proportional' | 'custom';
  customRatioA?: number;
  customRatioB?: number;
}

export interface RentResult {
  shareA: number;
  shareB: number;
  percentA: number;
  percentB: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      utilities: {
        Row: UtilityData;
        Insert: Omit<UtilityData, 'id' | 'created_at'>;
        Update: Partial<Omit<UtilityData, 'id' | 'created_at'>>;
      };
      furniture: {
        Row: FurnitureExpense;
        Insert: Omit<FurnitureExpense, 'id' | 'created_at'>;
        Update: Partial<Omit<FurnitureExpense, 'id' | 'created_at'>>;
      };
      groceries: {
        Row: GroceryExpense;
        Insert: Omit<GroceryExpense, 'id' | 'created_at'>;
        Update: Partial<Omit<GroceryExpense, 'id' | 'created_at'>>;
      };
      events: {
        Row: CalendarEvent;
        Insert: Omit<CalendarEvent, 'id' | 'created_at'>;
        Update: Partial<Omit<CalendarEvent, 'id' | 'created_at'>>;
      };
    };
  };
}
