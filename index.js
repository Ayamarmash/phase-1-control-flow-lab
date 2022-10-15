function scuberGreetingForFeet (feet) {
  if (feet <= 400) return 'This one is on me!';

  if (feet <= 2000) return 'That will be twenty bucks.';

  if (2000 < feet && feet <= 2500) return 'I will gladly take your thirty bucks.'; 

  return 'No can do.';
}

function ternaryCheckCity(City){
  if(City === 'NYC') return "Ok, sounds good."

  return "No go.";
}

function switchOnCharmFromTip(Tip){
  if(Tip === "generous") return 'Thank you so much.';

  if(Tip === "not as generous") return 'Thank you.';

  return "Bye.";
}