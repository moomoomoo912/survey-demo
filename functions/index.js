const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addSurvey = functions.https.onRequest((req,res) => { 
    let id = admin.database().ref("survey").push({
        name: req.query.name
    })
    res.redirect(303,"./addQuestion"+"?id="+id);
});

exports.addQuestion = functions.https.onRequest((req,res) => { 
    let id = req.query.id
    
});

