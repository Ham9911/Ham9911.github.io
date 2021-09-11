const firebaseConfig = {
    apiKey: "AIzaSyB3xYOenL6QYUh1_xISdeqif4RNF-_0n5Y",
    authDomain: "login-e9447.firebaseapp.com",
    projectId: "login-e9447",
    storageBucket: "login-e9447.appspot.com",
    messagingSenderId: "1088374132638",
    appId: "1:1088374132638:web:5dc4f701bf8ac94180d08f"
};

firebase.initializeApp(firebaseConfig);


function Addteam(name, members) {
    this.name = name;
    this.members = members;
};

function addteams() {
    let teams = [];
    let teamname = document.getElementById('teamname').value;
    console.log(teamname);
    let members = [];
    members.push(user.innerHTML);
    console.log(members);
    let team_name = new Addteam(teamname, members);
    teams.push(team_name);
    localStorage.setItem('team', JSON.stringify(teams));
    console.log(teams);
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        document.getElementById("user").innerHTML = user.email;
        let get_teams = JSON.parse(localStorage.getItem('team'));
        console.log(get_teams);
        console.log(get_teams[0].members, user.email);
        if (get_teams[0].members === user.email) {
            console.log(get_teams[0].members, user.innerHTML);
            document.getElementById('own_team').innerHTML = get_teams[0].name;
            document.getElementById('own_members').innerHTML = get_teams[0].members;
        } else {
            document.getElementById('own_team').innerHTML = 'You Do Not Own any team';
        }
    } else {

    }
});
let teamsList = JSON.parse(localStorage.getItem('team'));
for (let a = 0; a < teamsList.length; a++) {

    document.getElementById('listofteams').innerHTML = teamsList[a].name;
    var new_button = document.createElement('button');
    new_button.innerHTML = 'Add';
    new_button.className = 'addteam'
    document.getElementById('listofteams').appendChild(new_button);
    new_button.name = teamsList[0].name;
    new_button.onclick = function() {
        for (let i = 0; i < teamsList.length; i++) {
            if (teamsList[i].name === new_button.name) {
                teamsList[i].members.push(user.innerHTML);
                localStorage.setItem('team', JSON.stringify(teamsList));
            }


        }

    }
};

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            window.location.href = "./main.html";
            const user = userCredential.user;
            // console.log(user);

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}





function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "./index.html";
    }).catch(() => {})
};

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}