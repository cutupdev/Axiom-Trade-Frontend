"use client";
import React, { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react';

interface WebSocketContextType {
  socket: WebSocket | null;
  isConnected: boolean;
  lastMessage: any;
  sendMessage: (message: any) => void;
  subscribeToToken: (tokenAddress: string) => void;
  unsubscribeFromToken: (tokenAddress: string) => void;
  priceData: { [key: string]: number[] };
  connectionStatus: 'connecting' | 'connected' | 'disconnected' | 'error';
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

interface WebSocketProviderProps {
  children: ReactNode;
  url?: string;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ 
  children, 
  url = process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'wss://api.raydium.io/v2/ws' 
}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<any>(null);
  const [priceData, setPriceData] = useState<{ [key: string]: number[] }>({});
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected' | 'error'>('disconnected');
  const [subscribedTokens, setSubscribedTokens] = useState<Set<string>>(new Set());
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttempts = useRef(0);
  const maxReconnectAttempts = 5;

  const connect = () => {
    if (socket?.readyState === WebSocket.OPEN) return;

    setConnectionStatus('connecting');
    
    try {
      const ws = new WebSocket(url);
      
      ws.onopen = () => {
        console.log('WebSocket connected');
        setIsConnected(true);
        setConnectionStatus('connected');
        reconnectAttempts.current = 0;
        
        // Re-subscribe to previously subscribed tokens
        subscribedTokens.forEach(token => {
          subscribeToToken(token);
        });
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          setLastMessage(data);
          
          // Handle different message types
          if (data.type === 'price_update' && data.tokenAddress) {
            updatePriceData(data.tokenAddress, data.price);
          } else if (data.type === 'market_data' && data.symbol) {
            updatePriceData(data.symbol, data.price);
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.onclose = (event) => {
        console.log('WebSocket disconnected:', event.code, event.reason);
        setIsConnected(false);
        setConnectionStatus('disconnected');
        setSocket(null);
        
        // Attempt to reconnect if not a manual close
        if (event.code !== 1000 && reconnectAttempts.current < maxReconnectAttempts) {
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 30000);
          reconnectTimeoutRef.current = setTimeout(() => {
            reconnectAttempts.current++;
            connect();
          }, delay);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setConnectionStatus('error');
      };

      setSocket(ws);
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error);
      setConnectionStatus('error');
    }
  };

  const disconnect = () => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }
    
    if (socket) {
      socket.close(1000, 'Manual disconnect');
    }
    
    setIsConnected(false);
    setConnectionStatus('disconnected');
    setSocket(null);
  };

  const sendMessage = (message: any) => {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not connected. Cannot send message:', message);
    }
  };

  const subscribeToToken = (tokenAddress: string) => {
    if (!tokenAddress) return;
    
    setSubscribedTokens(prev => new Set([...Array.from(prev), tokenAddress]));
    
    const subscribeMessage = {
      type: 'subscribe',
      channel: 'price',
      token: tokenAddress
    };
    
    sendMessage(subscribeMessage);
  };

  const unsubscribeFromToken = (tokenAddress: string) => {
    setSubscribedTokens(prev => {
      const newSet = new Set(prev);
      newSet.delete(tokenAddress);
      return newSet;
    });
    
    const unsubscribeMessage = {
      type: 'unsubscribe',
      channel: 'price',
      token: tokenAddress
    };
    
    sendMessage(unsubscribeMessage);
  };

  const updatePriceData = (tokenKey: string, price: number) => {
    setPriceData(prev => {
      const currentData = prev[tokenKey] || [];
      const newData = [...currentData, price];
      
      // Keep only last 100 data points to prevent memory issues
      const trimmedData = newData.slice(-100);
      
      return {
        ...prev,
        [tokenKey]: trimmedData
      };
    });
  };

  useEffect(() => {
    connect();
    
    return () => {
      disconnect();
    };
  }, [url]);

  const value: WebSocketContextType = {
    socket,
    isConnected,
    lastMessage,
    sendMessage,
    subscribeToToken,
    unsubscribeFromToken,
    priceData,
    connectionStatus
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = (): WebSocketContextType => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};
