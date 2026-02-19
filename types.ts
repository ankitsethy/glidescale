import type React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface MetricItem {
  value: string;
  label: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}