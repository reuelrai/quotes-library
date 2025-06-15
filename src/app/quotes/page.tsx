import { supabase } from '@/lib/supabase'

export default async function QuotesPage() {
    const { data: quotes, error } = await supabase
        .from('quotes')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) return <p className="text-red-500">Error loading quotes</p>

    return (
        <main className="max-w-2xl mx-auto p-6 justify-center items-center">
            <h1 className="text-2xl font-bold mb-4 text-center">All Quotes</h1>
            <ul className="space-y-4">
                {quotes?.map((q) => (
                    <li key={q.id} className="border p-4 rounded shadow">
                        <p className="italic text-lg">"{q.quote}"</p>
                        <p className="text-right text-sm text-gray-500">— {q.author}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}
