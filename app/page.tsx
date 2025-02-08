'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { TrendChart } from './components/TrendChart';
import { ContentTable } from './components/ContentTable';
import { ScatterPlot } from './components/ScatterPlot';
import { Filters } from './components/Filters';

export default function Home() {
  return (
    <main>
      <Filters />
      <TrendChart />
      <ContentTable />
      <ScatterPlot />
    </main>
  )
} 