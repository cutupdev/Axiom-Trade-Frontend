// WebSocket Configuration
export const WEBSOCKET_CONFIG = {
  // Default WebSocket URL - you can change this to your preferred service
  DEFAULT_URL: 'wss://api.raydium.io/v2/ws',
  
  // Alternative WebSocket URLs for different services:
  ALTERNATIVES: {
    BINANCE: 'wss://stream.binance.com:9443/ws/btcusdt@ticker',
    COINCAP: 'wss://ws.coincap.io/prices?assets=bitcoin,ethereum',
    POLYGON: 'wss://api.polygon.io/ws/v2/aggs/ticker/*/prev',
    CUSTOM: process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'wss://api.raydium.io/v2/ws'
  },
  
  // Connection settings
  RECONNECT_ATTEMPTS: 5,
  RECONNECT_DELAY: 1000, // Base delay in ms
  MAX_RECONNECT_DELAY: 30000, // Max delay in ms
  
  // Message types
  MESSAGE_TYPES: {
    SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe',
    PRICE_UPDATE: 'price_update',
    MARKET_DATA: 'market_data'
  },
  
  // Channels
  CHANNELS: {
    PRICE: 'price',
    TICKER: 'ticker',
    TRADES: 'trades'
  }
};

export default WEBSOCKET_CONFIG;
