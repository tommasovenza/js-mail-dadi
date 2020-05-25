var arrayMail = ['tommasovenza@gmail.com', 'pippo-mail@mail.com', 'franchino_dj@email.it', 'paolinopaperino@gmail.com' ];


var utenteEmail = prompt('inserisci la tua email');
console.log(utenteEmail);

// dichiaro di partenza la variabile falsa perchè non so se questa email la troverò nella lista di email
paperinoPresente = false;
console.log(paperinoPresente);

paperinoPresente = 'paolinopaperino@gmail.com';

// vado a leggere l'array con un ciclo
for (var i = 0; i < arrayMail.length; i++ ) {
  console.log(arrayMail[i]);

  if ( utenteEmail === paperinoPresente) {
    alert(paperinoPresente);
    paperinoPresente = true;
    console.log(paperinoPresente);
  }
}
