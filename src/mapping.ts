import {
  Approval,
  Borrow,
  Mint,
  Redeem,
  RepayBorrow,
} from "../generated/CErc20Delegator/CErc20Delegator";

import {
  ApprovalEntity,
  BorrowEntity,
  MintEntity,
  RedeemEntity,
  RepayEntity,
} from "../generated/schema";

export function handleApproval(event: Approval): void {
  const generatedId = `${event.transaction.from.toHex()}${
    event.block.timestamp
  }`;

  let approval = new ApprovalEntity(generatedId);
  approval.address = event.params.spender;
  approval.amount = event.params.amount;
}

export function handleBorrow(event: Borrow): void {
  const generatedId = `${event.transaction.from.toHex()}${
    event.block.timestamp
  }`;

  let borrow = new BorrowEntity(generatedId);
  borrow.address = event.params.borrower;
  borrow.amount = event.params.borrowAmount;
}

export function handleMint(event: Mint): void {
  const generatedId = `${event.transaction.from.toHex()}${
    event.block.timestamp
  }`;

  let mint = new MintEntity(generatedId);
  mint.address = event.params.minter;
  mint.amount = event.params.mintAmount;
  mint.tokens = event.params.mintTokens;
}

export function handleRedeem(event: Redeem): void {
  const generatedId = `${event.transaction.from.toHex()}${
    event.block.timestamp
  }`;

  let redeem = new RedeemEntity(generatedId);
  redeem.address = event.params.redeemer;
  redeem.amount = event.params.redeemAmount;
  redeem.tokens = event.params.redeemTokens;
}

export function handleRepayBorrow(event: RepayBorrow): void {
  const generatedId = `${event.transaction.from.toHex()}${
    event.block.timestamp
  }`;

  let repay = new RepayEntity(generatedId);
  repay.payer = event.params.payer;
  repay.borrower = event.params.borrower;
  repay.amount = event.params.repayAmount;
}
