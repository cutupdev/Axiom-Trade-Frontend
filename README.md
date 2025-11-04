# Axiom Trade Frontend

A comprehensive decentralized trading platform frontend fork of axiom.trade, built with Next.js 14 and integrated with Solana blockchain. This application provides a modern, responsive interface for trading perpetuals, discovering tokens, managing portfolios, and tracking market insights.


## 🚀 Features

- **Token Discovery**: Browse and discover tokens on the Solana blockchain
- **Perpetuals Trading**: Trade perpetual futures with leverage, order types (market/limit), and take-profit/stop-loss functionality
- **Pulse**: Real-time market pulse and trend analysis
- **Vision**: Track KOL (Key Opinion Leaders) and trader performance
- **Portfolio Management**: View and manage your trading positions, spot holdings, and connected wallets
- **Rewards System**: Participate in rewards programs with leaderboards and benefits
- **Solana Wallet Integration**: Connect with popular Solana wallets (Phantom, Solflare, etc.)
- **Real-time Data**: WebSocket integration for live market updates
- **Token Swapping**: Swap tokens directly from the platform


## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **Yarn**: Package manager (recommended) or npm
- **Solana Wallet**: Phantom, Solflare, or any Solana-compatible wallet


## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Axiom-Trade-Frontend-Private
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your configuration:
```env
# Add your environment variables here
# Example:
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_URL=your_rpc_url
```

4. Run the development server:
```bash
yarn dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.


## 📁 Project Structure

```
├── public/                 # Static assets (images, fonts, etc.)
│   ├── fonts/             # Custom fonts (Orbitron)
│   └── images/            # Image assets
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── discover/      # Token discovery page
│   │   ├── perpetuals/   # Perpetuals trading page
│   │   ├── pulse/         # Market pulse page
│   │   ├── vision/        # KOL/trader tracking page
│   │   ├── portfolio/     # Portfolio management page
│   │   ├── rewards/       # Rewards page
│   │   ├── layout.tsx     # Root layout
│   │   └── providers.tsx  # Context providers
│   ├── components/         # React components
│   │   ├── home/          # Home page components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── perpetuals/    # Perpetuals trading components
│   │   ├── portfolio/     # Portfolio components
│   │   ├── pulse/         # Pulse components
│   │   ├── rewards/       # Rewards components
│   │   ├── vision/        # Vision components
│   │   └── others/        # Shared components
│   ├── contexts/          # React Context providers
│   │   ├── SolanaWalletProvider.tsx
│   │   ├── WebSocketProvider.tsx
│   │   └── usercontext.tsx
│   ├── config/            # Configuration files
│   │   ├── ConfigData.tsx
│   │   └── WebSocketConfig.ts
│   └── utils/             # Utility functions
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```


## 🚀 Building for Production

1. Build the application:
```bash
yarn build
```

2. Start the production server:
```bash
yarn start
```

The application will be optimized and ready for deployment.

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Solana Network Configuration
NEXT_PUBLIC_SOLANA_NETWORK=devnet|mainnet-beta

# RPC Endpoint (optional, uses default if not provided)
NEXT_PUBLIC_RPC_URL=your_solana_rpc_url

# WebSocket Configuration (if needed)
NEXT_PUBLIC_WS_URL=your_websocket_url
```


## Contact Information

- **X (Twitter)**: [@devcutup](https://twitter.com/devcutup)
- **Telegram**: [@DevCutup](https://t.me/DevCutup)
- **WhatsApp**: [Contact via WhatsApp](https://wa.me/13137423660)
