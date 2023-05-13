/* сложные вложенные ветвления делают код запутанным для понимания */

"use strict";

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
  } else if (amount > balance) {
    console.log("Недостаточно средств на счету");
  } else {
    console.log("Операция снятия средств проведена успешно");
  }
}

withdraw(0, 300);
withdraw(500, 300);
withdraw(100, 300);

/* паттерн «ранний возврат» - это способ использовать возможность 
досрочного возврата из функции с помощью оператора return */

function earlyWithdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
    return;
  }
  if (amount > balance) {
    console.log("Недостаточно средств на счету");
    return;
  }
  console.log("Операция снятия средств проведена");
}

withdraw(0, 300);
withdraw(500, 300);
withdraw(100, 300);
