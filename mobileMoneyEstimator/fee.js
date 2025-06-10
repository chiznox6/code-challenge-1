function estimateTransactionFee(amountToSend) {
  let fee = amountToSend * 0.015;
  fee = Math.max(10, Math.min(70, fee));
  let total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${fee}
Total amount to be debited: KES ${total}

Send Money Securely!`);
}

let amount = Number(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);
