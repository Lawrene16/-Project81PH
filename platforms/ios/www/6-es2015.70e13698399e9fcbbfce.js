(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UIoA:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("pMnS"),s=t("oBZk"),o=t("ZZ/e"),r=t("s7LF"),a=t("SVse"),h=t("mrSG"),c=t("AFX/"),p=t("iqUP"),d=t("Pn9U"),b=t("gTw3"),g=t("UyNO");class m extends g.a{constructor(l,n,t,e,u,i,s,o,r,a,h,c,d){super(o,r),this.toastCtrl=l,this.zone=n,this.camera=t,this.modalController=e,this.actionSheetCtrl=u,this.alertController=i,this.events=s,this.router=o,this.route=r,this.storage=a,this.geolocation=h,this.loadingCtrl=c,this.travelAppService=d,this.name="",this.phonenumber="",this.aboutMe="",this.following="",this.followers="",this.provincesVisited="0",this.myimage="",this.showGallery=!1,this.showTrips=!0,this.showMaps=!1,this.showTripsText=!1,this.showGalleryText=!1,this.galleryimages=[],this.trips=[],this.visitedProvincesArray=[],this.ishidden=!1,this.menuHidden=!0,this.selectedOption="Recently Added",this.tabvalue="showTrips",this.useruid=p.auth().currentUser.uid,this.loadingCtrl.create({message:"Fetching your profile details"}).then(l=>{l.present(),p.database().ref("/users").child(this.useruid).once("value",l=>{this.name=l.val().name,this.phonenumber=l.val().phoneNumber,this.aboutMe=l.val().aboutMe,this.following=l.val().following,this.followers=l.val().followers,this.location=null==l.val().location?"Location not set":l.val().location,null==l.val().photoURL||""==l.val().photoURL?this.base64ProfilePhoto="../../assets/icon/user2.png":(this.base64ProfilePhoto=l.val().photoURL,l.val().photoURL.includes("graph.facebook.com")&&(this.base64ProfilePhoto=l.val().photoURL+"?height=500")),this.base64CoverPhoto=null==l.val().coverPhoto||""==l.val().coverPhoto?"../../assets/backg2.png":l.val().coverPhoto,this.storage.set("loadmap","yes")}).then(()=>{l.dismiss()}).catch(n=>{l.dismiss(),this.presentToast(n)})})}recentlyadded(){this.selectedOption="Recently Added",this.storage.set("order","recent"),this.fetchTrips()}latestfirst(){console.log("latest"),this.selectedOption="Latest Trip First",this.storage.set("order","latest"),this.fetchTrips()}setSortOrder(){this.storage.get("order").then(l=>{switch(l){case"recent":this.trips.sort((l,n)=>l.postedtimetimestamp<n.postedtimetimestamp?1:-1);break;case"latest":this.trips.sort((l,n)=>l.timestamp<n.timestamp?1:-1)}})}openMenu(){this.menuHidden=!this.menuHidden}hideIt(){this.ishidden=!0,this.storage.set("showTutorials","no"),this.dynamicColor="light"}editPage(){var l=this.location;"Location not set"==this.location&&(l=""),this.router.navigate(["editprofile"],{state:{name:this.name,location:l,aboutMe:this.aboutMe}})}openProfileAndCoverPhoto(l){var n,t;0==l?(n="Cover Photo",t=this.base64CoverPhoto):1==l&&(n="Profile Photo",t=this.base64ProfilePhoto),this.router.navigate(["imagedetails"],{state:{title:n,image:t}}),this.storage.set("index","1")}openModal(l,n){var t,e;console.log(l),console.log(n),2==n&&(t=this.trips[l].eventTitle,e=this.galleryimages[l]),this.router.navigate(["imagedetails"],{state:{title:t,image:e}}),this.storage.set("index","1")}fetchTrips(){this.galleryimages=[],this.travelAppService.fetchTrips().then(l=>{this.trips=l,this.setSortOrder(),this.checkTripsArray(),this.trips.forEach(l=>{this.galleryimages.push(l.photo),this.checkGalleryArray()}),this.travelAppService.fetchVisitedProvicesArray().then(l=>{this.visitedProvincesArray=l,this.provincesVisited=""+this.visitedProvincesArray.length,setTimeout(()=>{null==this.map&&(this.map=$("#map").ezClickableMap({})),this.map.setSelectedAreaNames(l)},100)}).catch(l=>{console.log(l)})}).catch(l=>{console.log(l)})}ionViewWillLeave(){this.updateVisitedProvinces(),this.storage.set("loadmap","no")}doRefresh(l){1==this.showGallery||1==this.showMaps?l.target.complete():(this.galleryimages=[],this.showTrips=!0,this.showMaps=!1,this.showGallery=!1,this.travelAppService.fetchTrips().then(n=>{console.log(n),this.trips=n,this.setSortOrder(),0==n.length?l.target.complete():this.trips.forEach(n=>{this.galleryimages.push(n.photo),l.target.complete()})}).catch(l=>{console.log(l)}))}onEnter(){this.route.queryParams.subscribe(l=>{this.router.getCurrentNavigation().extras.state?(this.data=this.router.getCurrentNavigation().extras.state.showTutorials,console.log(this.data),this.ishidden=!1,this.dynamicColor="secondary"):(console.log("Came from another"),this.ishidden=!0)}),this.fetchTrips(),this.events.subscribe("name",l=>{null!=l&&(this.name=l)}),this.events.subscribe("location",l=>{null!=l&&(this.location=l)}),this.events.subscribe("aboutMe",l=>{null!=l&&(this.aboutMe=l)})}onDestroy(){super.ngOnDestroy()}showTripDetails(l){let n={state:{trip:this.trips[l]}};console.log(l),this.router.navigate(["tripdetails"],n)}segmentChanged(l){"showTrips"==l.detail.value?this.zone.run(()=>{this.showTrips=!0,this.showGallery=!1,this.showMaps=!1}):"showMaps"==l.detail.value?this.zone.run(()=>{this.showMaps=!0,this.showGallery=!1,this.showTrips=!1}):"showGallery"==l.detail.value&&this.zone.run(()=>{this.showGallery=!0,this.showMaps=!1,this.showTrips=!1})}updateVisitedProvinces(){}checkTripsArray(){this.trips!=[]&&null!=this.trips||(this.showTripsText=!0)}checkGalleryArray(){this.galleryimages!=[]&&null!=this.galleryimages||(this.showGalleryText=!0)}AccessCamera(l){this.camera.getPicture({targetWidth:512,targetHeight:512,correctOrientation:!0,sourceType:this.camera.PictureSourceType.CAMERA,destinationType:this.camera.DestinationType.DATA_URL}).then(n=>{this.loadingCtrl.create({message:"Uploading photo"}).then(t=>{t.present(),0==l?(this.base64CoverPhoto="data:image/jpeg;base64,"+n,this.travelAppService.uploadCoverPhoto(this.useruid,this.base64CoverPhoto).then(()=>{this.presentToast("Cover Photo Uploaded Successfully"),t.dismiss()}).catch(l=>{this.presentToast("Cover Photo Not Uploaded"),t.dismiss()})):1==l&&(this.base64ProfilePhoto="data:image/jpeg;base64,"+n,this.travelAppService.uploadProfilePic(this.useruid,this.base64ProfilePhoto).then(()=>{this.presentToast("Profile Photo Uploaded Successfully"),t.dismiss()}).catch(l=>{this.presentToast("Profile Photo Not Uploaded"),t.dismiss()}))})},l=>{console.log(l)})}AccessGallery(l){this.camera.getPicture({quality:50,targetWidth:600,targetHeight:800,allowEdit:!0,sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM,destinationType:this.camera.DestinationType.DATA_URL}).then(n=>{this.loadingCtrl.create({message:"Uploading photo"}).then(t=>{t.present(),0==l?(this.base64CoverPhoto="data:image/jpeg;base64,"+n,this.travelAppService.uploadCoverPhoto(this.useruid,this.base64CoverPhoto).then(()=>{this.presentToast("Cover Photo Uploaded Successfully"),t.dismiss()}).catch(l=>{this.presentToast("Cover Photo Not Uploaded"),t.dismiss()})):1==l&&(this.base64ProfilePhoto="data:image/jpeg;base64,"+n,this.travelAppService.uploadProfilePic(this.useruid,this.base64ProfilePhoto).then(()=>{this.presentToast("Profile Photo Uploaded Successfully"),t.dismiss()}).catch(l=>{this.presentToast("Profile Photo Not Uploaded"),t.dismiss()}))})},l=>{console.log(l)})}presentToast(l){return h.a(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:l,duration:6e3,color:"dark"})).present()}))}presentToast2(l){return h.a(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:l,duration:1e3,color:"dark"})).present()}))}}var f=t("iInd"),v=t("xgBC"),y=e.qb({encapsulation:0,styles:[[".userimg[_ngcontent-%COMP%]{-webkit-border-radius:50%;height:120px;width:120px;border:2px solid #fff;border-radius:50%;display:inline-block;-o-object-fit:cover;object-fit:cover}.eachgalleryimage[_ngcontent-%COMP%]{width:32vw;height:31vw;margin:1px;float:left;background-color:#d8d8d8}#map[_ngcontent-%COMP%]{max-width:500px;max-height:600px;margin:0 auto;background:#faf9f9}.mapcover[_ngcontent-%COMP%]{height:70vh;width:100vw;position:absolute;z-index:7;bottom:-400px;background:0 0}"]],data:{}});function x(l){return e.Kb(0,[(l()(),e.sb(0,0,null,null,1,"p",[["align","center"],["style","margin: 20px; font-size: 16px; opacity: 0.7;"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["You havent added any trips yet. Click on add trips to add one"]))],null,null)}function w(l){return e.Kb(0,[(l()(),e.sb(0,0,null,null,16,"ion-card",[["padding",""],["style","background-color: white; height: 350px;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showTripDetails(l.context.index)&&e),e}),s.M,s.e)),e.rb(1,49152,null,0,o.p,[e.h,e.k,e.x],null,null),e.rb(2,16384,null,0,o.f,[e.k],null,null),(l()(),e.sb(3,0,null,0,0,"img",[["height","200px"],["style","object-fit: cover;"]],[[8,"src",4]],null,null,null,null)),(l()(),e.sb(4,0,null,0,1,"p",[["style","font-weight: 600; margin: 0px; padding-top: 20px; font-size: 16px;"]],null,null,null,null,null)),(l()(),e.Jb(5,null,["",""])),(l()(),e.sb(6,0,null,0,4,"div",[["style","width: 100%; margin-top: 10px;"]],null,null,null,null,null)),(l()(),e.sb(7,0,null,null,1,"div",[["style","width: 25px; float: left;"]],null,null,null,null,null)),(l()(),e.sb(8,0,null,null,0,"img",[["height","25px"],["src","../../assets/icon/pin.png"],["style","width: 30px;"]],null,null,null,null,null)),(l()(),e.sb(9,0,null,null,1,"div",[["style","float: left; padding-left: 5px; font-size: 15px; margin-top: 2px;"]],null,null,null,null,null)),(l()(),e.Jb(10,null,[" ",", "," "])),(l()(),e.sb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.sb(12,0,null,0,4,"div",[["style","width: 100%; margin-top: 12px;"]],null,null,null,null,null)),(l()(),e.sb(13,0,null,null,1,"div",[["style","width: 25px; float: left;"]],null,null,null,null,null)),(l()(),e.sb(14,0,null,null,0,"img",[["height","18px"],["src","../../assets/icon/appointment-2.png"],["style","width: 20px;"]],null,null,null,null,null)),(l()(),e.sb(15,0,null,null,1,"div",[["style","float: left; padding-left: 5px; font-size: 14px; margin-top: 2px;"]],null,null,null,null,null)),(l()(),e.Jb(16,null,[" "," - "," "]))],null,(function(l,n){l(n,3,0,e.wb(1,"",n.context.$implicit.photo,"")),l(n,5,0,n.context.$implicit.eventTitle),l(n,10,0,n.context.$implicit.city,n.context.$implicit.province),l(n,16,0,n.context.$implicit.fromDate2,n.context.$implicit.toDate2)}))}function P(l){return e.Kb(0,[(l()(),e.sb(0,0,null,null,1,"p",[["align","center"],["style","margin: 20px; font-size: 16px; opacity: 0.7;"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["You havent added any trips yet. Click on add trips to add one"]))],null,null)}function k(l){return e.Kb(0,[(l()(),e.sb(0,0,null,null,1,"div",[["class","eachgalleryimage"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openModal(l.context.index,2)&&e),e}),null,null)),(l()(),e.sb(1,0,null,null,0,"img",[["style","width: 100%; height: 100%; object-fit: cover;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,1,0,e.wb(1,"",n.context.$implicit,""))}))}function C(l){return e.Kb(0,[(l()(),e.sb(0,0,null,null,10,"ion-header",[],null,null,null,s.T,s.l)),e.rb(1,49152,null,0,o.E,[e.h,e.k,e.x],null,null),(l()(),e.sb(2,0,null,0,8,"ion-toolbar",[],null,null,null,s.pb,s.H)),e.rb(3,49152,null,0,o.Fb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.sb(4,0,null,0,2,"ion-title",[["style","color: black"]],null,null,null,s.ob,s.G)),e.rb(5,49152,null,0,o.Db,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Profile "])),(l()(),e.sb(7,0,null,0,3,"ion-buttons",[["slot","end"],["style","margin-right: 10px"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.editPage()&&e),e}),s.L,s.d)),e.rb(8,49152,null,0,o.o,[e.h,e.k,e.x],null,null),(l()(),e.sb(9,0,null,0,1,"div",[["style","font-size: 15px; font-weight: 300; color:black"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Edit"])),(l()(),e.sb(11,0,null,null,106,"ion-content",[],null,null,null,s.Q,s.i)),e.rb(12,49152,null,0,o.x,[e.h,e.k,e.x],null,null),(l()(),e.sb(13,0,null,0,11,"div",[["style","width: 100vw; \n  height: 100vh; background-color: rgba(41, 41, 41, 0.3);\n  position: absolute;\n  top: 0px;\n  z-index: 7;\n  padding-top: 20px;\n  position: absolute;\n  text-align: center"]],[[8,"hidden",0]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.hideIt()&&e),e}),null,null)),(l()(),e.sb(14,0,null,null,10,"div",[["style","width: 100vw; position: absolute; bottom: 20px;"]],null,null,null,null,null)),(l()(),e.sb(15,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),e.sb(16,0,null,null,1,"span",[["style","font-family: shintaku; font-size: 30px; color: #FF7C0B "]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Start adding"])),(l()(),e.sb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(19,0,null,null,1,"span",[["style","font-family: shintaku; font-size: 30px; color: #FF7C0B "]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Your trip here!"])),(l()(),e.sb(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(22,0,null,null,1,"div",[["style","width: 100vw; margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),e.sb(23,0,null,null,0,"img",[["height","100px"],["src","../../assets/icon/arrow.png"],["style","padding-left: 55px;"]],null,null,null,null,null)),(l()(),e.sb(24,0,null,null,0,"img",[["height","80px"]],null,null,null,null,null)),(l()(),e.sb(25,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,t){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.doRefresh(t)&&e),e}),s.fb,s.w)),e.rb(26,49152,null,0,o.gb,[e.h,e.k,e.x],null,null),(l()(),e.sb(27,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,s.eb,s.x)),e.rb(28,49152,null,0,o.hb,[e.h,e.k,e.x],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),e.sb(29,0,null,0,88,"div",[],null,null,null,null,null)),(l()(),e.sb(30,0,null,null,3,"div",[["style","height: 150px;"]],null,null,null,null,null)),(l()(),e.sb(31,0,null,null,0,"img",[["style","height: 150px; object-fit: cover; width: 100vw;"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openProfileAndCoverPhoto(0)&&e),e}),null,null)),(l()(),e.sb(32,0,null,null,1,"ion-icon",[["color","light"],["name","camera"],["style","position: absolute; top: 110px; font-size: 34px; right: 10px; z-index: 4;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.AccessGallery(0)&&e),e}),s.U,s.m)),e.rb(33,49152,null,0,o.F,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.sb(34,0,null,null,6,"div",[["style","position: absolute;\n      top: 90px; width: 100vw;"]],null,null,null,null,null)),(l()(),e.sb(35,0,null,null,3,"div",[["style","position: absolute;\n      height: 40px;\n      top: 90px; width: 100vw;"]],null,null,null,null,null)),(l()(),e.sb(36,0,null,null,2,"div",[["style","margin-left: 55vw; height: 30px; width: 30px; border-radius: 50%; padding: 1px;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.AccessGallery(1)&&e),e}),null,null)),(l()(),e.sb(37,0,null,null,1,"ion-icon",[["color","light"],["name","camera"],["style","font-size: 26px;"]],null,null,null,s.U,s.m)),e.rb(38,49152,null,0,o.F,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.sb(39,0,null,null,1,"p",[["align","center"],["style","margin: 0px;"]],null,null,null,null,null)),(l()(),e.sb(40,0,null,null,0,"img",[["class","userimg"],["height","30"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openProfileAndCoverPhoto(1)&&e),e}),null,null)),(l()(),e.sb(41,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(42,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(43,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(45,0,null,null,2,"p",[["align","center"],["style","margin: 0px; font-size: 22px; opacity: 0.7; font-family: montserat-bold; font-weight: 600;"]],null,null,null,null,null)),(l()(),e.sb(46,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(47,null,["",""])),(l()(),e.sb(48,0,null,null,5,"div",[["style","width: 100%; margin-top: 7px; text-align: center; height: 27px;"]],null,null,null,null,null)),(l()(),e.sb(49,0,null,null,4,"div",[["style","display: inline-block; margin: 0 auto;\n        padding: 3px;"]],null,null,null,null,null)),(l()(),e.sb(50,0,null,null,1,"div",[["style","width: 25px; float: left;"]],null,null,null,null,null)),(l()(),e.sb(51,0,null,null,0,"img",[["height","25px"],["src","../../assets/icon/location-pointer.png"],["style","width: 16px;"]],null,null,null,null,null)),(l()(),e.sb(52,0,null,null,1,"div",[["style","float: left; padding-left: 5px; font-size: 15px; opacity: 0.6; margin-top: 2px;"]],null,null,null,null,null)),(l()(),e.Jb(53,null,[" "," "])),(l()(),e.sb(54,0,null,null,5,"div",[["style","width: 100%; text-align: center; height: 27px;"]],null,null,null,null,null)),(l()(),e.sb(55,0,null,null,4,"div",[["style","display: inline-block; margin: 0 auto;\n        padding: 3px;"]],null,null,null,null,null)),(l()(),e.sb(56,0,null,null,1,"div",[["style","width: 25px; float: left;"]],null,null,null,null,null)),(l()(),e.sb(57,0,null,null,0,"img",[["height","25px"],["src","../../assets/icon/human-footprint.png"],["style","width: 18px;"]],null,null,null,null,null)),(l()(),e.sb(58,0,null,null,1,"div",[["style","float: left; padding-left: 5px; opacity: 0.6; font-size: 15px; margin-top: 2px;"]],null,null,null,null,null)),(l()(),e.Jb(59,null,[" ","/81 Provinces Visited "])),(l()(),e.sb(60,0,null,null,1,"p",[["align","center"],["style","font-size: 14px; opacity: 0.6; margin: 8px;"]],null,null,null,null,null)),(l()(),e.Jb(61,null,[""," "])),(l()(),e.sb(62,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(63,0,null,null,21,"ion-segment",[["style","z-index: 9;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Eb(l,65)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Eb(l,65)._handleChangeEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(i.tabvalue=t)&&u),"ionChange"===n&&(u=!1!==i.segmentChanged(t)&&u),u}),s.ib,s.z)),e.rb(64,49152,null,0,o.ob,[e.h,e.k,e.x],null,null),e.rb(65,16384,null,0,o.Qb,[e.k],null,null),e.Gb(1024,null,r.d,(function(l){return[l]}),[o.Qb]),e.rb(67,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.e,null,[r.g]),e.rb(69,16384,null,0,r.f,[[4,r.e]],null,null),(l()(),e.sb(70,0,null,0,4,"ion-segment-button",[["value","showTrips"]],null,null,null,s.hb,s.A)),e.rb(71,49152,null,0,o.pb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.sb(72,0,null,0,2,"ion-label",[["style","font-weight: 700;"]],null,null,null,s.Y,s.q)),e.rb(73,49152,null,0,o.Q,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["TRIP"])),(l()(),e.sb(75,0,null,0,4,"ion-segment-button",[["value","showMaps"]],null,null,null,s.hb,s.A)),e.rb(76,49152,null,0,o.pb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.sb(77,0,null,0,2,"ion-label",[["style","font-weight: 700;"]],null,null,null,s.Y,s.q)),e.rb(78,49152,null,0,o.Q,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["MAP"])),(l()(),e.sb(80,0,null,0,4,"ion-segment-button",[["value","showGallery"]],null,null,null,s.hb,s.A)),e.rb(81,49152,null,0,o.pb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.sb(82,0,null,0,2,"ion-label",[["style","font-weight: 700;"]],null,null,null,s.Y,s.q)),e.rb(83,49152,null,0,o.Q,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["GALLERY"])),(l()(),e.sb(85,0,null,null,24,"div",[["style","background-color: rgb(250, 249, 249);"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e.sb(86,0,null,null,19,"div",[["style","width: 93vw; margin-top: 12px; margin-left: 15px; height: 40px;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openMenu()&&e),e}),null,null)),(l()(),e.sb(87,0,null,null,3,"div",[["style","float: left;"]],null,null,null,null,null)),(l()(),e.sb(88,0,null,null,0,"img",[["height","21"],["src","../../assets/icon/sort.png"]],null,null,null,null,null)),(l()(),e.sb(89,0,null,null,1,"span",[["style","font-family: montserat;"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sort By"])),(l()(),e.sb(91,0,null,null,14,"div",[["style","float: right; margin-right: 10px; margin-top: 5px;"]],null,null,null,null,null)),(l()(),e.sb(92,0,null,null,1,"span",[["style","font-size: 17px; font-family: montserat; margin-right: 10px; color: #FE551D"]],null,null,null,null,null)),(l()(),e.Jb(93,null,["",""])),(l()(),e.sb(94,0,null,null,1,"ion-icon",[["name","arrow-down"]],[[8,"hidden",0]],null,null,s.U,s.m)),e.rb(95,49152,null,0,o.F,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.sb(96,0,null,null,1,"ion-icon",[["name","arrow-up"]],[[8,"hidden",0]],null,null,s.U,s.m)),e.rb(97,49152,null,0,o.F,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.sb(98,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(99,0,null,null,6,"div",[["style","position: absolute; z-index: 6;"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e.sb(100,0,null,null,2,"ion-item",[["style","font-family: montserat;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.recentlyadded()&&e),e}),s.X,s.o)),e.rb(101,49152,null,0,o.K,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Recently Added"])),(l()(),e.sb(103,0,null,null,2,"ion-item",[["lines","none"],["style","font-family: montserat;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.latestfirst()&&e),e}),s.X,s.o)),e.rb(104,49152,null,0,o.K,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.Jb(-1,0,["Latest Trip First"])),(l()(),e.hb(16777216,null,null,1,null,x)),e.rb(107,16384,null,0,a.j,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,null,1,null,w)),e.rb(109,278528,null,0,a.i,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.sb(110,0,null,null,2,"div",[["style","background-color: rgb(245, 245, 245);"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e.sb(111,0,null,null,0,"div",[["class","mapcover"]],null,null,null,null,null)),(l()(),e.sb(112,0,null,null,0,"div",[["id","map"]],null,null,null,null,null)),(l()(),e.sb(113,0,null,null,4,"div",[["style","width: 100%;"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,P)),e.rb(115,16384,null,0,a.j,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,null,1,null,k)),e.rb(117,278528,null,0,a.i,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,3,0,t.dynamicColor),l(n,28,0,"arrow-dropdown","Pull to refresh","circles","Refreshing..."),l(n,33,0,"light","camera"),l(n,38,0,"light","camera"),l(n,67,0,t.tabvalue),l(n,71,0,"showTrips"),l(n,76,0,"showMaps"),l(n,81,0,"showGallery"),l(n,95,0,"arrow-down"),l(n,97,0,"arrow-up"),l(n,104,0,"none"),l(n,107,0,t.showTripsText),l(n,109,0,t.trips),l(n,115,0,t.showGalleryText),l(n,117,0,t.galleryimages)}),(function(l,n){var t=n.component;l(n,13,0,t.ishidden),l(n,31,0,t.base64CoverPhoto),l(n,40,0,t.base64ProfilePhoto),l(n,47,0,t.name),l(n,53,0,t.location),l(n,59,0,t.provincesVisited),l(n,61,0,t.aboutMe),l(n,63,0,e.Eb(n,69).ngClassUntouched,e.Eb(n,69).ngClassTouched,e.Eb(n,69).ngClassPristine,e.Eb(n,69).ngClassDirty,e.Eb(n,69).ngClassValid,e.Eb(n,69).ngClassInvalid,e.Eb(n,69).ngClassPending),l(n,85,0,!t.showTrips),l(n,93,0,t.selectedOption),l(n,94,0,!t.menuHidden),l(n,96,0,t.menuHidden),l(n,99,0,t.menuHidden),l(n,110,0,!t.showMaps),l(n,113,0,!t.showGallery)}))}function T(l){return e.Kb(0,[(l()(),e.sb(0,0,null,null,1,"app-profile",[],null,null,null,C,y)),e.rb(1,180224,null,0,m,[o.Sb,e.x,d.a,o.Kb,o.a,o.b,o.g,f.n,f.a,v.b,b.a,o.Jb,c.a],null,null)],null,null)}var A=e.ob("app-profile",m,T,{},{},[]);t.d(n,"ProfilePageModuleNgFactory",(function(){return M}));var M=e.pb(u,[],(function(l){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[i.a,A]],[3,e.j],e.v]),e.Cb(4608,a.l,a.k,[e.s,[2,a.t]]),e.Cb(4608,o.c,o.c,[e.x,e.g]),e.Cb(4608,o.Kb,o.Kb,[o.c,e.j,e.p]),e.Cb(4608,o.Ob,o.Ob,[o.c,e.j,e.p]),e.Cb(4608,r.i,r.i,[]),e.Cb(1073742336,a.b,a.b,[]),e.Cb(1073742336,o.Hb,o.Hb,[]),e.Cb(1073742336,r.h,r.h,[]),e.Cb(1073742336,r.c,r.c,[]),e.Cb(1073742336,f.p,f.p,[[2,f.u],[2,f.n]]),e.Cb(1073742336,u,u,[]),e.Cb(1024,f.l,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);