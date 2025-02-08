'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { TrendChart } from '@/app/components/TrendChart';
import { ContentTable } from '@/app/components/ContentTable';
import { ScatterPlot } from '@/app/components/ScatterPlot';
import { Filters } from '@/app/components/Filters';

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