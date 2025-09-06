# 🔢 Guess Number dApp on Algorand

Welcome to **Guess Number**, a simple and fun decentralized application (dApp) built on the Algorand blockchain. This project demonstrates how to build interactive smart contracts using TypeScript and Algorand’s secure and scalable infrastructure.

---

## 📖 Project Description

**Guess Number** is a smart contract-based game where users try to guess a secret number stored on-chain. It’s designed to be simple enough for beginners, yet practical enough to demonstrate real-world smart contract usage on Algorand.

This project is great for developers exploring Algorand, learning about global state, or wanting to build gamified blockchain experiences.

---

## 🚀 What It Does

- Stores a secret number in the smart contract's global state.
- Accepts a user’s guess as input.
- Compares the guess to the secret number.
- Returns one of the following responses:
  - ✅ `"correct"` — if the guess matches the secret
  - 🔼 `"too high"` — if the guess is greater than the secret
  - 🔽 `"too low"` — if the guess is less than the secret

---

## ✨ Features

- 🧠 **On-Chain Logic**: All validation is done by the smart contract.
- ⚡ **Fast & Efficient**: Powered by Algorand's high-speed network and low fees.
- 💬 **Immediate Feedback**: Players get a response instantly after guessing.
- 🧱 **TypeScript Smart Contract**: Built using the modern `@algorandfoundation/algorand-typescript` framework.
- 📚 **Beginner-Friendly**: Clear, simple logic perfect for learning and experimenting.

---

## 🔗 Deployed Smart Contract

🧠 Smart Contract: [**guess number**](#)  
> Replace this link with your deployed contract address, app ID, or AlgoExplorer URL once live.

---

## 🧠 Smart Contract Code

Here’s the smart contract that powers the game:

```ts


import { Contract, GlobalState, uint64 } from '@algorandfoundation/algorand-typescript'

export class GuessNumber extends Contract {
  secret = GlobalState<uint64>({ key: "secret", initialValue: 7 })

  guess(num: uint64): string {
    if (num === this.secret.value) return "correct"
    return num > this.secret.value ? "too high" : "too low"
  }
}


