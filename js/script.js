var arrayMail = ['tommasovenza@gmail.com', 'pippo-mail@mail.com', 'franchino_dj@email.it', 'paolinopaperino@gmail.com' ];

var utenteEmail = prompt('inserisci la tua email');
console.log(utenteEmail);

// dichiaro di partenza la variabile falsa perchè non so se questa email la troverò nella lista di email
untenteEmail = false;
console.log(utenteEmail);

// vado a leggere l'array con un ciclo
for (var i = 0; i < arrayMail.length; i++ ) {
  console.log(arrayMail[i]);

  if ( utenteEmail == arrayMail[i]) {
    alert('la tua email è presente nella lista, puoi entrare!');
  } else {
    alert('non risulti presente nella lista. pertanto non puoi entrare');
  }
}

