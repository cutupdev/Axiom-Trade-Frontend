"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useWebSocket } from '@/contexts/WebSocketProvider';

interface SparklineChartProps {
  data?: number[];
  tokenAddress?: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  useWebSocketData?: boolean;
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  tokenAddress,
  width = 117,
  height = 40,
  color = '#22c55e',
  className = '',
  useWebSocketData = false
}) => {
  const { priceData, subscribeToToken, unsubscribeFromToken, isConnected } = useWebSocket();
  const [chartData, setChartData] = useState<number[]>(data || []);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Subscribe to WebSocket data if enabled and tokenAddress is provided
  useEffect(() => {
    if (useWebSocketData && tokenAddress && isConnected) {
      if (!isSubscribed) {
        subscribeToToken(tokenAddress);
        setIsSubscribed(true);
      }
    }

    return () => {
      if (useWebSocketData && tokenAddress && isSubscribed) {
        unsubscribeFromToken(tokenAddress);
        setIsSubscribed(false);
      }
    };
  }, [useWebSocketData, tokenAddress, isConnected, subscribeToToken, unsubscribeFromToken, isSubscribed]);

  // Update chart data from WebSocket
  useEffect(() => {
    if (useWebSocketData && tokenAddress && priceData[tokenAddress]) {
      setChartData(priceData[tokenAddress]);
    }
  }, [useWebSocketData, tokenAddress, priceData]);

  // Use static data if WebSocket data is not available
  useEffect(() => {
    if (!useWebSocketData && data) {
      setChartData(data);
    }
  }, [useWebSocketData, data]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = (typeof window !== 'undefined' && (window as any).devicePixelRatio) ? (window as any).devicePixelRatio : 1;
    // @ts-ignore fix width/height inferred as number
    canvas.width = Math.max(1, Math.floor((width as number) * dpr));
    // @ts-ignore
    canvas.height = Math.max(1, Math.floor((height as number) * dpr));
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // clear
    // @ts-ignore
    ctx.clearRect(0, 0, width as number, height as number);

    const hasData = Array.isArray(chartData) && chartData.length > 0;
    if (!hasData) return;

    const padding = 4;
    // @ts-ignore
    const innerW = (width as number) - padding * 2;
    // @ts-ignore
    const innerH = (height as number) - padding * 2;
    const min = Math.min(...chartData);
    const max = Math.max(...chartData);
    const range = max - min || 1;

    const getX = (i: number) => padding + (i / (chartData.length - 1)) * innerW;
    const getY = (v: number) => padding + innerH - ((v - min) / range) * innerH;

    // area fill
    ctx.beginPath();
    ctx.moveTo(getX(0), getY(chartData[0]));
    for (let i = 1; i < chartData.length; i++) {
      ctx.lineTo(getX(i), getY(chartData[i]));
    }
    ctx.lineTo(padding + innerW, padding + innerH);
    ctx.lineTo(padding, padding + innerH);
    ctx.closePath();
    ctx.fillStyle = `${color}20` as any;
    ctx.fill();

    // line
    ctx.beginPath();
    ctx.moveTo(getX(0), getY(chartData[0]));
    for (let i = 1; i < chartData.length; i++) {
      ctx.lineTo(getX(i), getY(chartData[i]));
    }
    ctx.strokeStyle = color as any;
    ctx.lineWidth = 1.5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.stroke();
  }, [chartData, width, height, color]);

  return (
    <div 
      className={`relative ${className}`}
      // @ts-ignore
      style={{ width, height }}
    >
      <canvas
        ref={canvasRef}
        role="img"
        className="gb-blur-image-role"
        // @ts-ignore
        style={{ display: 'block', boxSizing: 'border-box', height, width }}
      />
    </div>
  );
};

export default SparklineChart;
