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

  // Carga inicial de todos los registros de puntos
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('points') || '[]');
    setEntries(stored);
  }, []);

  // Recalcula el ranking cada vez que cambian las entradas o el período
  useEffect(() => {
    const now = new Date();
    let filtered = entries;

    if (period === 'weekly') {
      const cutoff = subDays(now, 7);
      filtered = entries.filter(e => new Date(e.date) >= cutoff);
    } else if (period === 'monthly') {
      const cutoff = subMonths(now, 1);
      filtered = entries.filter(e => new Date(e.date) >= cutoff);
    }

    // Sumar puntos por usuario
    const tally: Record<string, number> = {};
    filtered.forEach(e => {
      tally[e.email] = (tally[e.email] || 0) + e.points;
    });

    // Convertir a array y ordenar de mayor a menor
    const list = Object.entries(tally)
      .map(([email, total]) => ({ email, total }))
      .sort((a, b) => b.total - a.total);

    setScores(list);
  }, [entries, period]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Leaderboard</h2>

      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="period">Período:&nbsp;</label>
        <select
          id="period"
          value={period}
          onChange={e => setPeriod(e.target.value as any)}
        >
          <option value="all">Total</option>
          <option value="weekly">Semanal</option>
          <option value="monthly">Mensual</option>
        </select>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #000', padding: '0.5rem' }}>Posición</th>
            <th style={{ borderBottom: '2px solid #000', padding: '0.5rem' }}>Usuario</th>
            <th style={{ borderBottom: '2px solid #000', padding: '0.5rem' }}>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {scores.length > 0 ? (
            scores.map((s, idx) => (
              <tr key={s.email}>
                <td style={{ borderBottom: '1px solid #ccc', padding: '0.5rem', textAlign: 'center' }}>
                  {idx + 1}
                </td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>
                  {s.email}
                </td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '0.5rem', textAlign: 'center' }}>
                  {s.total}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} style={{ padding: '1rem', textAlign: 'center' }}>
                No hay puntuaciones aún.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
