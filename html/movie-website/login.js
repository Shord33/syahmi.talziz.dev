function onSignIn() {
   google.accounts.id.initialize({
      client_id: '689276724424-lmbg4i7ifq617f0qngvlgehjoqu3t9k2.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    google.accounts.id.prompt();
  };
  

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}