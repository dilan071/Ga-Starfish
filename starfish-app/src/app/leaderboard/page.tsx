// src/app/leaderboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { subDays, subMonths } from 'date-fns';

interface PointsEntry {
  email: string;
  type: string;
  date: string;
  points: number;
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<PointsEntry[]>([]);
  const [period, setPeriod] = useState<'all' | 'weekly' | 'monthly'>('all');
  const [scores, setScores] = useState<{ email: string; total: number }[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('points') || '[]');
    setEntries(stored);
  }, []);

  useEffect(() => {
    const now = new Date();
    let filtered = entries;

    if (period === 'weekly') {
      const cutoff = subDays(now, 7);
      filtered = entries.filter(entry => new Date(entry.date) >= cutoff);
    } else if (period === 'monthly') {
      const cutoff = subMonths(now, 1);
      filtered = entries.filter(entry => new Date(entry.date) >= cutoff);
    }

    const summary: Record<string, number> = {};

    filtered.forEach(entry => {
      summary[entry.email] = (summary[entry.email] || 0) + entry.points;
    });

    const sortedScores = Object.entries(summary)
      .map(([email, total]) => ({ email, total }))
      .sort((a, b) => b.total - a.total);

    setScores(sortedScores);
  }, [entries, period]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>

      <div className="mb-4">
        <label htmlFor="period" className="mr-2 font-medium">Período:</label>
        <select
          id="period"
          value={period}
          onChange={e => setPeriod(e.target.value as any)}
          className="border px-2 py-1 rounded"
        >
          <option value="all">Total</option>
          <option value="weekly">Semanal</option>
          <option value="monthly">Mensual</option>
        </select>
      </div>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b p-2">#</th>
            <th className="border-b p-2">Usuario</th>
            <th className="border-b p-2">Puntos</th>
          </tr>
        </thead>
        <tbody>
          {scores.length > 0 ? (
            scores.map((entry, index) => (
              <tr key={entry.email} className="hover:bg-gray-50">
                <td className="border-b p-2 text-center">{index + 1}</td>
                <td className="border-b p-2">{entry.email}</td>
                <td className="border-b p-2 text-center">{entry.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-500">No hay puntuaciones aún.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
