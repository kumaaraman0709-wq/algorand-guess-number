import { Contract, GlobalState, uint64 } from '@algorandfoundation/algorand-typescript'

export class GuessNumber extends Contract {
  secret = GlobalState<uint64>({ key: "secret", initialValue: 7 })

  guess(num: uint64): string {
    if (num === this.secret.value) return "correct"
    return num > this.secret.value ? "too high" : "too low"
  }
}