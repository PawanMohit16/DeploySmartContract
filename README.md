# 🔐 Cypher Smart Contract Deployment

A simple yet powerful Ethereum smart contract project for issuing and verifying certificates, built with **Hardhat**, **Solidity**, and **Ganache**.

---

## 📁 Project Structure

```
Cypher/
├── contracts/
│   └── CertVault.sol            # Solidity contract for certificate issuance and validation
├── scripts/
│   └── deploy.js                # Script to deploy the smart contract
├── .env.example                 # Sample environment variables file
├── .gitignore
├── hardhat.config.js            # Hardhat config (network, compiler version, etc.)
├── package.json
└── README.md
```

---

## 🚀 Features

- 🧾 **Smart Contract Logic** — Issue, store, and validate certificates via the blockchain
- 🔒 **Secure Deployment** — Uses private keys from `.env` and Hardhat network
- ⚙️ **Easy Setup** — Clear instructions for both beginners and experienced devs
- 🧪 **Test & Interaction Ready** — Use Hardhat console/scripts or front-end integrations

---

## ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- [Ganache (GUI or CLI)](https://trufflesuite.com/ganache/)

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PawanMohit16/DeploySmartContract.git
cd DeploySmartContract
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Then open `.env` and paste your Ganache account private key:

```env
PRIVATE_KEY=your_ganache_private_key_here
```

### 4. Start Ganache

You can either:

- Launch **Ganache GUI**, or
- Run **CLI** in a separate terminal:

```bash
ganache-cli
```

### 5. Compile the Smart Contract

```bash
npx hardhat compile
```

### 6. Deploy the Contract

```bash
npx hardhat run scripts/deploy.js --network ganache
```

After deployment, you'll see the contract address printed in the console.

---

## 📌 NOTE

If you came here to get the deployed contract address for the **main Cypher app**,  
just put the following in your `.env` file:

```env
VITE_CONTRACT_ADDRESS=your_deployed_contract_address_here
```

---

## 🧪 Optional Ways to Use

You can interact with the contract using the Hardhat console, scripts, or your own front-end.

### Issue Certificate

```solidity
issueCertificate(string memory recipientName, string memory courseName, string memory ipfsHash)
```

### Validate Certificate

```solidity
validateCertificate(string memory ipfsHash) → returns bool
```

### Get Certificate Details

```solidity
getCertificate(string memory ipfsHash) → returns (string memory recipientName, string memory courseName)
```

---

## 🛡️ Security Notes

- ❌ Never commit your actual `.env` file or private keys
- ✅ Only commit `.env.example` with placeholder values

---

## 💡 For Developers

- 🧾 **Contract Logic** — See `contracts/CertVault.sol`
- ⚙️ **Deployment Logic** — See `scripts/deploy.js`
- 🌐 **Network Config** — See `hardhat.config.js`

Happy building! 🎉
