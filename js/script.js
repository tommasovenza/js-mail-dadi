// esercizio lista email

var arrayMail = ['tommasovenza@gmail.com', 'pippo-mail@mail.com', 'franchino_dj@email.it', 'paolinopaperino@gmail.com'];

var utenteEmail = prompt('inserisci la tua email');

// dichiaro di partenza la variabile falsa perchè non so se questa email la troverò nella lista di email
var accesso = false;

// vado a leggere l'array con un ciclo
for (var i = 0; i < arrayMail.length; i++) {

  // se mail inserita dall'utente è uguale ad un campo dell'array l'accesso è verficato
  if (arrayMail[i] === utenteEmail) {

    accesso = true;
  }
}

  // se l'accesso è verificato, allora se si è inserita una email già presente nella lista si può entrare, altrimenti no
  if (accesso) {
    alert('sei presente nella lista, puoi entrare');
  } else {
    alert('non sei presente nella lista, pertanto non puoi entrare!')
  }



// esercizio dadi
var dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log(dadoUtente);

var dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(dadoComputer);

if (dadoUtente > dadoComputer) {
  alert('hai Vinto!');
} else if (dadoUtente == dadoComputer) {
  alert('pareggio!');
} else {
  alert('ha vinto il computer!');
}



