"use client";
import React from 'react';
import { useWebSocket } from '@/contexts/WebSocketProvider';

const WebSocketStatus: React.FC = () => {
  const { connectionStatus, isConnected } = useWebSocket();

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'bg-green-500';
      case 'connecting':
        return 'bg-yellow-500';
      case 'disconnected':
        return 'bg-gray-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'Live';
      case 'connecting':
        return 'Connecting...';
      case 'disconnected':
        return 'Disconnected';
      case 'error':
        return 'Error';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="flex items-center gap-2 bg-[#526fff]/30 px-2 rounded-full h-6">
      <div className={`w-2 h-2 rounded-full ${getStatusColor()} animate-pulse`} />
      <span className="text-textSecondary text-xs">
        {getStatusText()}
      </span>
    </div>
  );
};

export default WebSocketStatus;
