// Initialize Firebase
var config = {
    apiKey: "AIzaSyABsC9SdzfbrJ4HNtRuWJ7vKYeS84X-v7M",
    authDomain: "myproject-cdc78.firebaseapp.com",
    databaseURL: "https://myproject-cdc78.firebaseio.com",
    projectId: "myproject-cdc78",
    storageBucket: "myproject-cdc78.appspot.com",
    messagingSenderId: "382821997063"
};
firebase.initializeApp(config);
document.getElementById('contactForm').addEventListener('submit', submitForm);

function getInputVal(id) {
    return document.getElementById(id).value;
}
function submitForm(e) {
    e.preventDefault();
    // Get values
    var name = getInputVal('nom');
    var prenom = getInputVal('prenom');
    var email = getInputVal('email');
    var phone = getInputVal('tel');
    var country = getInputVal('country');
    var color = getInputVal("color")
    var date = getInputVal('date');
    saveMessage(name,prenom,tel,email,phone,country,color,date);
    document.getElementById('contactForm').reset();
    document.querySelector('.alert').style.display = 'block';
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
}
var message =firebase.database().ref("3idmilad");
function saveMessage(nom,prenom,tel,email,phone,country,color,date)
{
    var newMessage = message.push();
    newMessage.set(
        {
            name:nom,
            prenom:prenom,
            tel:tel,
            email:email,
            phone:phone,
            country:country,
            color:color,
            date:date
        }
    )
}