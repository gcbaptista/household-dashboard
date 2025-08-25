import { useState, useEffect } from 'react'
import { db } from '../services/supabase'
import type { UtilityData, FurnitureExpense, GroceryExpense, CalendarEvent } from '../types'

export const useUtilities = () => {
  const [utilities, setUtilities] = useState<UtilityData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchUtilities = async () => {
    try {
      setLoading(true)
      const { data, error } = await db.utilities.getAll()
      if (error) throw error
      setUtilities(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addUtility = async (utility: Omit<UtilityData, 'id' | 'created_at' | 'user_id'>) => {
    try {
      const { data, error } = await db.utilities.create(utility)
      if (error) throw error
      await fetchUtilities() // Refresh the list
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { data: null, error }
    }
  }

  const updateUtility = async (id: string, utility: Partial<UtilityData>) => {
    try {
      const { data, error } = await db.utilities.update(id, utility)
      if (error) throw error
      await fetchUtilities() // Refresh the list
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { data: null, error }
    }
  }

  const deleteUtility = async (id: string) => {
    try {
      const { error } = await db.utilities.delete(id)
      if (error) throw error
      await fetchUtilities() // Refresh the list
      return { error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { error }
    }
  }

  useEffect(() => {
    fetchUtilities()
  }, [])

  return {
    utilities,
    loading,
    error,
    addUtility,
    updateUtility,
    deleteUtility,
    refetch: fetchUtilities,
  }
}

export const useFurniture = () => {
  const [furniture, setFurniture] = useState<FurnitureExpense[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFurniture = async () => {
    try {
      setLoading(true)
      const { data, error } = await db.furniture.getAll()
      if (error) throw error
      setFurniture(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addFurniture = async (item: Omit<FurnitureExpense, 'id' | 'created_at' | 'user_id'>) => {
    try {
      const { data, error } = await db.furniture.create(item)
      if (error) throw error
      await fetchFurniture() // Refresh the list
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { data: null, error }
    }
  }

  const deleteFurniture = async (id: string) => {
    try {
      const { error } = await db.furniture.delete(id)
      if (error) throw error
      await fetchFurniture() // Refresh the list
      return { error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { error }
    }
  }

  useEffect(() => {
    fetchFurniture()
  }, [])

  return {
    furniture,
    loading,
    error,
    addFurniture,
    deleteFurniture,
    refetch: fetchFurniture,
  }
}

export const useGroceries = () => {
  const [groceries, setGroceries] = useState<GroceryExpense[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchGroceries = async () => {
    try {
      setLoading(true)
      const { data, error } = await db.groceries.getAll()
      if (error) throw error
      setGroceries(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addGrocery = async (item: Omit<GroceryExpense, 'id' | 'created_at' | 'user_id'>) => {
    try {
      const { data, error } = await db.groceries.create(item)
      if (error) throw error
      await fetchGroceries() // Refresh the list
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { data: null, error }
    }
  }

  const deleteGrocery = async (id: string) => {
    try {
      const { error } = await db.groceries.delete(id)
      if (error) throw error
      await fetchGroceries() // Refresh the list
      return { error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { error }
    }
  }

  useEffect(() => {
    fetchGroceries()
  }, [])

  return {
    groceries,
    loading,
    error,
    addGrocery,
    deleteGrocery,
    refetch: fetchGroceries,
  }
}

export const useEvents = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const { data, error } = await db.events.getAll()
      if (error) throw error
      setEvents(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addEvent = async (event: Omit<CalendarEvent, 'id' | 'created_at' | 'user_id'>) => {
    try {
      const { data, error } = await db.events.create(event)
      if (error) throw error
      await fetchEvents() // Refresh the list
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { data: null, error }
    }
  }

  const deleteEvent = async (id: string) => {
    try {
      const { error } = await db.events.delete(id)
      if (error) throw error
      await fetchEvents() // Refresh the list
      return { error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      return { error }
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return {
    events,
    loading,
    error,
    addEvent,
    deleteEvent,
    refetch: fetchEvents,
  }
}
