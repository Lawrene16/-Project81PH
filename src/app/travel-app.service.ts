import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';
import { ToastController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

// https://i.diawi.com/ZkUx76


@Injectable({
  providedIn: "root"
})

export class TravelAppService {
  firedata = firebase.database();
  firestore = firebase.storage();
  tripsarray = [];
  fireauth = firebase.auth();

  constructor(
    public faceBook: Facebook,
    public googlePlus: GooglePlus,
    public signInWithApple: SignInWithApple,
    public httpClient: HttpClient,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {}

  // Creates a new user
  createnewuser(email, password) {
    return new Promise((resolve, reject) => {
      this.fireauth
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Generates the initial placeholder details of the user
  generateInitialUserDetails(name, email, photo) {
    return new Promise((resolve, reject) => {
      this.firedata
        .ref("/users")
        .child(this.fireauth.currentUser.uid)
        .set({
          name: name,
          email: email,
          coverPhoto: "",
          aboutMe:
            "About me has not been set. Click on the edit icon to tell us about yourself",
          followers: "0",
          following: "0",
          photoURL: photo,
          provincesVisited: "0"
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Uploads the user profile picture
  uploadProfilePic(useruid, photoString) {
    return new Promise((resolve, reject) => {
      var storageRef = this.firestore
        .ref("/profilePhotos")
        .child(useruid + ".jpg");
      storageRef
        .putString(photoString, firebase.storage.StringFormat.DATA_URL)
        .then(res => {
          storageRef.getDownloadURL().then(url => {
            this.firedata
              .ref("/users")
              .child(useruid)
              .update({
                photoURL: url
              })
              .then(res => {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Uploads the cover photo
  uploadCoverPhoto(useruid, photoString) {
    return new Promise((resolve, reject) => {
      var storageRef = this.firestore
        .ref("/coverPhotos")
        .child(useruid + ".jpg");
      storageRef
        .putString(photoString, firebase.storage.StringFormat.DATA_URL)
        .then(res => {
          storageRef.getDownloadURL().then(url => {
            this.firedata
              .ref("/users")
              .child(useruid)
              .update({
                coverPhoto: url
              })
              .then(res => {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Upload the photo of the trip
  uploadTripPhoto(useruid, tripuid, photoString) {
    return new Promise((resolve, reject) => {
      var storageRef = this.firestore
        .ref("/trips")
        .child(useruid)
        .child(tripuid + ".jpg");
      storageRef
        .putString(photoString, firebase.storage.StringFormat.DATA_URL)
        .then(res => {
          storageRef.getDownloadURL().then(url => {
            this.firedata
              .ref("/users")
              .child(useruid)
              .child("trips")
              .child(tripuid)
              .update({
                photo: url
              })
              .then(res => {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Login with facebook
  facebookLogin() {
    return new Promise((resolve, reject) => {
      this.faceBook.getLoginStatus().then((res) =>{
        if (res.status === 'connected') {
          // Already logged in to FB so pass credentials to provider (in my case firebase)
          let credentials2 = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          firebase.auth().signInWithCredential(credentials2).then((result2) => {
            var user2 = result2.user;
            resolve(user2);
          }).catch((err) =>{
            reject(err)
          });
      } else {
          // Not already logged in to FB so sign in

          // firebase.auth().setPer
          this.faceBook.login(['public_profile', 'email'])
          .then((response: FacebookLoginResponse) => {
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
              response.authResponse.accessToken
            );

            
            firebase.auth().signInWithCredential(facebookCredential)
              .then(result => {
                var user = result.user;
                resolve(user);
              })
              .catch(err => {
                reject(err);
              });
          })
          .catch(err => {
            reject(err);
          });
      }
      });
    });
  }

    // Login with apple
    appleLogin() {
      return new Promise((resolve, reject) => {

        this.signInWithApple.signin({
          requestedScopes: [
            ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
            ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
          ]
        })
        .then((res: AppleSignInResponse) => {
          console.log('apple for verification:  ', res.identityToken);
          const appleCredential = new firebase.auth.OAuthProvider('apple.com').credential(res.identityToken);
          firebase.auth().signInWithCredential(appleCredential)
            .then(fireRes => {
              const user = {
                ...fireRes.user,
                displayName: fireRes.user.displayName || `${res.fullName.givenName} ${res.fullName.familyName}`,
                email: fireRes.user.email || res.email,
              }
              resolve(user);
            })
            .catch(error => {
              console.log(error);
              reject(error);
            });
        })
        .catch((error: AppleSignInErrorResponse) => {
          console.error('apple signin error: ', error);
          if (error.code == 1001 || error.code == 1003) {
            reject('user cancelled apple login!');
          } else {
            reject('apple login failed!');
          }
        });
      });
    }

  // Fetch all the user's trips
  fetchTrips() {
    return new Promise((resolve, reject) => {
      this.firedata
        .ref("/users")
        .child(this.fireauth.currentUser.uid)
        .child("trips")
        .orderByChild("mjbmmn")
        .once("value", snapshot => {
          this.tripsarray = [];
          let result = snapshot.val();
          for (var key in result) {
            this.tripsarray.push(result[key]);
          }
        })
        .then(() => {
          resolve(this.tripsarray);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Add new trip
  addTrip(
    useruid,
    aboutTrip,
    city,
    fromDate,
    toDate,
    fromDate2,
    toDate2,
    eventTitle,
    province,
    photoString,
    timestamp,
    postedtimetimestamp
  ) {

    return new Promise((resolve, reject) => {
      var tripuid = this.firedata.ref("/users").push().key;

      this.firedata
        .ref("/users")
        .child(useruid)
        .child("trips")
        .child(tripuid)
        .update({
          tripuid: tripuid,
          aboutTrip: aboutTrip,
          city: city,
          fromDate: fromDate,
          toDate: toDate,
          fromDate2: fromDate2,
          toDate2: toDate2,
          eventTitle: eventTitle,
          province: province,
          timestamp: timestamp,
          postedtimetimestamp: postedtimetimestamp
        })
        .then(res => {
          this.uploadTripPhoto(useruid, tripuid, photoString)
            .then(res => {
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Edit existing trip
  editTrip(
    useruid,
    tripuid,
    aboutTrip,
    city,
    fromDate,
    toDate,
    fromDate2,
    toDate2,
    eventTitle,
    province,
    photoString,
    timestamp
  ) {
    return new Promise((resolve, reject) => {
      this.firedata
        .ref("/users")
        .child(useruid)
        .child("trips")
        .child(tripuid)
        .update({
          tripuid: tripuid,
          aboutTrip: aboutTrip,
          city: city,
          fromDate: fromDate,
          toDate: toDate,
          fromDate2: fromDate2,
          toDate2: toDate2,
          eventTitle: eventTitle,
          province: province,
          timestamp: timestamp
        })
        .then(reso => {
          if(photoString.includes('.com')){
            resolve(reso)
          }else{
            this.uploadTripPhoto(useruid, tripuid, photoString)
            .then(res => {
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
          }

        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Login with google
  googleLogin() {
    return new Promise((resolve, reject) => {
      this.googlePlus
        .login({
          webClientId:
            "970318906848-ct8t889mtf21inrhvmc3j2e8v73676gh.apps.googleusercontent.com",
          scopes: "",
          offline: true
        })
        .then(
          response => {
            const googleCredential = firebase.auth.GoogleAuthProvider.credential(
              response.idToken
            );
            firebase
              .auth()
              .signInWithCredential(googleCredential)
              .then(result => {
                var user = result.user;
                resolve(user);
              });
          },
          err => {
            reject(err);
          }
        );
    });
  }

  // Login with email
  loginExistingUser(email, password) {
    return new Promise((resolve, reject) => {
      this.fireauth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          this.firedata.ref('/users').child(this.fireauth.currentUser.uid).update({
            email: email,
            password: password
          }).then(() =>{
            resolve(res);
          })
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Update the user details
  updateUserDetails(name, location, aboutMe) {
    return new Promise((resolve, reject) => {
      this.firedata
        .ref("/users")
        .child(this.fireauth.currentUser.uid)
        .update({
          name: name,
          location: location,
          aboutMe: aboutMe
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Update the user's about me
  updateAboutMe(aboutMe){
    return new Promise((resolve, reject) => {
      this.firedata
        .ref("/users")
        .child(this.fireauth.currentUser.uid)
        .update({
          aboutMe : aboutMe
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Delete the trip
  deleteTrip(tripuid){
    return new Promise((resolve, reject) => {
      this.firedata.ref('/users').child(this.fireauth.currentUser.uid).child('trips').child(tripuid).remove().then((res) =>{
        resolve(res)
      }).catch((err) =>{
        reject(err)
      })
    })
  }


  // Update visited provinces
  updateVisitedProvinces(provincesVisited, visitedProvincesArray){
    return new Promise((resolve, reject) => {
      this.firedata.ref('/users').child(this.fireauth.currentUser.uid).update({
        provincesVisited: provincesVisited,
        visitedProvincesArray: visitedProvincesArray
      }).then((res) =>{
        resolve(res);
      }).catch((err) =>{
        reject(err);
      })
    })
  }
  
// Fetch the visited provinces array
  fetchVisitedProvicesArray(){
    return new Promise((resolve, reject) => {
      this.firedata.ref('/users').child(this.fireauth.currentUser.uid)
          .once("value", snapshot => {
            if(snapshot.val().visitedProvincesArray == undefined){
              resolve([])
            }else{
              resolve(snapshot.val().visitedProvincesArray)
            }
          }).catch((err) =>{
            reject(err)
          })
    })
  }

  // Update user password
  updateUserPassword(newpassword){
    this.fireauth.currentUser.updatePassword(newpassword)
  }

// Update user email
  updateUserEmail(newemail){
      this.fireauth.currentUser.updateEmail(newemail)
  }

// Deactivate account
  deactivateAccount(reasons:any){
    return new Promise((resolve, reject) => {
      this.firedata.ref('/users').child(this.fireauth.currentUser.uid).child('deactivationReason').update({
        isdeactivated: "yes",
        isconfusing: reasons[0],
        design: reasons[1],
        justtrying: reasons[2],
        similar: reasons[3],
        others: reasons[4]
      }).then((res) =>{
        resolve(res)
      }).catch((err) =>{
        reject(err)
      })
    })
  }
}
