export default function factorCalculator(
  ticketsNum,
  prices,
  commentsNum,
  ticketPrice,
  ticketTime
) {
  let factor = 0;
  if (ticketsNum === 1) {
    factor += 10;
    console.log("first ticke + 10");
  }

  const difference = average(prices, ticketPrice);
  if (difference < 0) {
    factor += Math.abs(difference);
    console.log("Cheaper than avg by " + difference);
  } else {
    difference <= 10 ? (factor -= difference) : (factor -= 10);
    console.log("higher than avg by " + difference);
  }

  const hour = new Date(ticketTime).getHours();
  if (hour >= 9 && hour <= 17) {
    factor -= 10;
    console.log("during work hour -10");
  } else {
    factor += 10;
    console.log("not during work hour +10");
  }

  if (commentsNum > 3) {
    factor += 5;
    console.log("comments > 3 +5");
  }

  if (factor < 5) {
    console.log("total risk is lower than 5 " + factor);
    return 5;
  } else if (factor > 95) {
    console.log("total risk is lower than 5 " + factor);
    return 95;
  }
  return factor;
}

function average(prices, ticketPrice) {
  let sum = 0;
  prices.forEach(price => {
    sum += price;
  });
  const avg = sum / prices.length;
  return ((ticketPrice - avg) / avg) * 100;
}
