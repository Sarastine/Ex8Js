function Majority() {
    var Age = prompt('Entrez votre âge :');
    
	if (isNaN(Age) == true) {
		alert("Votre âge doit être un nombre");
	} else {
        if (Age < 18) {
            alert('Vous êtes mineur.');
        } else {
            alert('Vous êtes majeur.');
        }
   }
}