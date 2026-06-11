"use client";

import { useEffect, useRef, useState } from "react";
import { PostCard, PostCardData } from "./PostCard";

type BlogSearchProps = {
  onSearchChange: (isSearching: boolean) => void;
};

export const BlogSearch = ({ onSearchChange }: BlogSearchProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PostCardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  // Evita que cambios en onSearchChange redisparen el effect
  const onSearchChangeRef = useRef(onSearchChange);
  useEffect(() => { onSearchChangeRef.current = onSearchChange; });

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const trimmed = query.trim();

    if (trimmed.length < 2) {
      abortRef.current?.abort();
      setResults([]);
      setSearched(false);
      setLoading(false);
      onSearchChangeRef.current(false);
      return;
    }

    onSearchChangeRef.current(true);
    setLoading(true);

    debounceRef.current = setTimeout(async () => {
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      try {
        const res = await fetch(
          `/api/blog/search?q=${encodeURIComponent(trimmed)}`,
          { signal: abortRef.current.signal }
        );
        const data = await res.json();
        setResults(data);
        setSearched(true);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setResults([]);
          setSearched(true);
        }
      } finally {
        setLoading(false);
      }
    }, 400);
  }, [query]);

  const trimmed = query.trim();
  const showResults = trimmed.length >= 2;

  return (
    <div className="w-full">
      {/* Input */}
      <div className="relative max-w-xl mx-auto mb-8">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título, tema o etiqueta..."
          className="w-full pl-12 pr-10 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-in-cyan/50 focus:border-in-cyan text-sm transition-all"
        />
        {loading && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg className="animate-spin w-4 h-4 text-in-cyan" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          </span>
        )}
      </div>

      {/* Resultados */}
      {showResults && (
        <div>
          {searched && !loading && results.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              No se encontraron artículos para &ldquo;{query}&rdquo;.
            </p>
          )}

          {results.length > 0 && (
            <>
              <p className="text-sm text-gray-500 mb-6 text-center">
                {results.length} resultado{results.length !== 1 ? "s" : ""} para &ldquo;{query}&rdquo;
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
