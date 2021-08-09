function scuberGreetingForFeet(i){
  if (i <= 400) {
    return 'This one is on me!';
  } else if (i > 2000 && i < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (i > 2500) {
    return 'No can do.';
  }
}


function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
     return response = 'Thank you so much.';
      break;
    case 'not as generous':
     return response = 'Thank you.';
      break;
    default:
     return response = 'Bye.';
  }
}