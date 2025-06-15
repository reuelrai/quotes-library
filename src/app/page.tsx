'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [author, setAuthor] = useState('')
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from('quotes').insert([{ author, quote }])

    if (error) alert(error.message)
    else {
      setAuthor('')
      setQuote('')
      alert('Quote uploaded!')
    }

    setLoading(false)
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Upload a Quote</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          required
        />
        <textarea
          placeholder="Quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 items-center justify-center w-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Submit Quote'}
        </button>
      </form>
    </main>
  )
}
