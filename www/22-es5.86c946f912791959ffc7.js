(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{EA3h:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),i=u("AFX/"),o=u("ZZ/e"),a=function(){function l(l,n,u,t,e,i){this.route=l,this.loadingCtrl=n,this.events=u,this.toastCtrl=t,this.travelAppService=e,this.router=i,this.name="",this.location="",this.aboutMe=""}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe((function(n){l.router.getCurrentNavigation().extras.state&&(l.data=l.router.getCurrentNavigation().extras.state,console.log(l.data),l.name=l.data.name,l.location=l.data.location,l.aboutMe=l.data.aboutMe)}))},l.prototype.saveProfile=function(){var l=this;""==this.name?this.presentToast("Name field cannot be left blank"):this.name.length<3?this.presentToast("Name length is too short"):""==this.location?this.presentToast("Location field cannot be left blank"):this.location.length<3?this.presentToast("Location length is too short"):""==this.aboutMe?this.presentToast("Bio field cannot be left blank"):this.aboutMe.length<3?this.presentToast("Bio length is too short"):this.loadingCtrl.create({message:"Updating your profile"}).then((function(n){n.present(),l.travelAppService.updateUserDetails(l.name,l.location,l.aboutMe).then((function(){l.events.publish("name",l.name),l.events.publish("location",l.location),l.events.publish("aboutMe",l.aboutMe),n.dismiss(),l.presentToast("Profile updated succesfully"),l.router.navigateByUrl("/tabs/profile")})).catch((function(u){l.presentToast(u),n.dismiss()}))}))},l.prototype.presentToast=function(l){return e.b(this,void 0,void 0,(function(){return e.d(this,(function(n){switch(n.label){case 0:return[4,this.toastCtrl.create({message:l,duration:6e3,color:"dark"})];case 1:return n.sent().present(),[2]}}))}))},l}(),r=function(){return function(){}}(),s=u("pMnS"),b=u("oBZk"),g=u("gIcY"),d=u("ZYCi"),h=t.sb({encapsulation:0,styles:[[""]],data:{}});function c(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,15,"ion-header",[],null,null,null,b.T,b.l)),t.tb(1,49152,null,0,o.E,[t.h,t.k,t.z],null,null),(l()(),t.ub(2,0,null,0,13,"ion-toolbar",[],null,null,null,b.pb,b.H)),t.tb(3,49152,null,0,o.Fb,[t.h,t.k,t.z],null,null),(l()(),t.ub(4,0,null,0,4,"ion-buttons",[["slot","start"],["style","margin-left: 5px"]],null,null,null,b.L,b.d)),t.tb(5,49152,null,0,o.o,[t.h,t.k,t.z],null,null),(l()(),t.ub(6,0,null,0,2,"ion-back-button",[["color","primary"],["defaultHref","/tabs/profile"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Gb(l,8).onClick(u)&&e),e}),b.J,b.b)),t.tb(7,49152,null,0,o.j,[t.h,t.k,t.z],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),t.tb(8,16384,null,0,o.k,[[2,o.lb],o.Lb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.ub(9,0,null,0,2,"ion-title",[],null,null,null,b.ob,b.G)),t.tb(10,49152,null,0,o.Db,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Edit Profile"])),(l()(),t.ub(12,0,null,0,3,"ion-buttons",[["slot","end"],["style","margin-right: 10px"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.saveProfile()&&t),t}),b.L,b.d)),t.tb(13,49152,null,0,o.o,[t.h,t.k,t.z],null,null),(l()(),t.ub(14,0,null,0,1,"div",[["style","font-size: 15px; font-weight: 300; "]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Save"])),(l()(),t.ub(16,0,null,null,41,"ion-content",[["padding",""]],null,null,null,b.Q,b.i)),t.tb(17,49152,null,0,o.x,[t.h,t.k,t.z],null,null),t.tb(18,16384,null,0,o.f,[t.k],null,null),(l()(),t.ub(19,0,null,0,1,"div",[["style","font-size: 15px; margin-top: 10px;  font-family: montserat; font-weight: 500; opacity: 0.8;"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Name"])),(l()(),t.ub(21,0,null,0,10,"div",[["style","border-radius: 10px; margin-top: 5px; height: 50px; background-color: white; border: 1.5px solid #cecece;"]],null,null,null,null,null)),(l()(),t.ub(22,0,null,null,9,"div",[["style","height: 100%"]],null,null,null,null,null)),(l()(),t.ub(23,0,null,null,7,"div",[["style","float: left; height: 100%; width: 77vw;"]],null,null,null,null,null)),(l()(),t.ub(24,0,null,null,6,"ion-input",[["style","height: 100%; margin-left: 10px;"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Gb(l,25)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Gb(l,25)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.name=u)&&e),e}),b.V,b.n)),t.tb(25,16384,null,0,o.Rb,[t.k],null,null),t.Ib(1024,null,g.d,(function(l){return[l]}),[o.Rb]),t.tb(27,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,g.e,null,[g.g]),t.tb(29,16384,null,0,g.f,[[4,g.e]],null,null),t.tb(30,49152,null,0,o.J,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.ub(31,0,null,null,0,"div",[["style","float: left; height: 100%; width: 10vw;"]],null,null,null,null,null)),(l()(),t.ub(32,0,null,0,1,"div",[["style","font-size: 15px; margin-top: 20px;  font-family: montserat; font-weight: 500; opacity: 0.8;"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Current Location"])),(l()(),t.ub(34,0,null,0,10,"div",[["style","border-radius: 10px; margin-top: 5px; height: 50px; background-color: white; border: 1.5px solid #cecece;"]],null,null,null,null,null)),(l()(),t.ub(35,0,null,null,9,"div",[["style","height: 100%"]],null,null,null,null,null)),(l()(),t.ub(36,0,null,null,7,"div",[["style","float: left; height: 100%; width: 77vw;"]],null,null,null,null,null)),(l()(),t.ub(37,0,null,null,6,"ion-input",[["style","height: 100%; margin-left: 10px;"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Gb(l,38)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Gb(l,38)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.location=u)&&e),e}),b.V,b.n)),t.tb(38,16384,null,0,o.Rb,[t.k],null,null),t.Ib(1024,null,g.d,(function(l){return[l]}),[o.Rb]),t.tb(40,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,g.e,null,[g.g]),t.tb(42,16384,null,0,g.f,[[4,g.e]],null,null),t.tb(43,49152,null,0,o.J,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.ub(44,0,null,null,0,"div",[["style","float: left; height: 100%; width: 10vw;"]],null,null,null,null,null)),(l()(),t.ub(45,0,null,0,1,"div",[["style","font-size: 15px; margin-top: 20px;  font-family: montserat; font-weight: 500; opacity: 0.8;"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Bio"])),(l()(),t.ub(47,0,null,0,10,"div",[["style","border-radius: 10px; margin-top: 5px; height: 150px; background-color: white; border: 1.5px solid #cecece;"]],null,null,null,null,null)),(l()(),t.ub(48,0,null,null,9,"div",[["style","height: 100%"]],null,null,null,null,null)),(l()(),t.ub(49,0,null,null,7,"div",[["style","float: left; height: 100%; width: 77vw;"]],null,null,null,null,null)),(l()(),t.ub(50,0,null,null,6,"ion-textarea",[["style","height: 100%; margin-left: 10px;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Gb(l,51)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Gb(l,51)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.aboutMe=u)&&e),e}),b.nb,b.F)),t.tb(51,16384,null,0,o.Rb,[t.k],null,null),t.Ib(1024,null,g.d,(function(l){return[l]}),[o.Rb]),t.tb(53,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,g.e,null,[g.g]),t.tb(55,16384,null,0,g.f,[[4,g.e]],null,null),t.tb(56,49152,null,0,o.Bb,[t.h,t.k,t.z],null,null),(l()(),t.ub(57,0,null,null,0,"div",[["style","float: left; height: 100%; width: 10vw;"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,7,0,"primary","/tabs/profile"),l(n,8,0,"/tabs/profile"),l(n,27,0,u.name),l(n,30,0,"email"),l(n,40,0,u.location),l(n,43,0,"email"),l(n,53,0,u.aboutMe)}),(function(l,n){l(n,24,0,t.Gb(n,29).ngClassUntouched,t.Gb(n,29).ngClassTouched,t.Gb(n,29).ngClassPristine,t.Gb(n,29).ngClassDirty,t.Gb(n,29).ngClassValid,t.Gb(n,29).ngClassInvalid,t.Gb(n,29).ngClassPending),l(n,37,0,t.Gb(n,42).ngClassUntouched,t.Gb(n,42).ngClassTouched,t.Gb(n,42).ngClassPristine,t.Gb(n,42).ngClassDirty,t.Gb(n,42).ngClassValid,t.Gb(n,42).ngClassInvalid,t.Gb(n,42).ngClassPending),l(n,50,0,t.Gb(n,55).ngClassUntouched,t.Gb(n,55).ngClassTouched,t.Gb(n,55).ngClassPristine,t.Gb(n,55).ngClassDirty,t.Gb(n,55).ngClassValid,t.Gb(n,55).ngClassInvalid,t.Gb(n,55).ngClassPending)}))}function p(l){return t.Mb(0,[(l()(),t.ub(0,0,null,null,1,"app-editprofile",[],null,null,null,c,h)),t.tb(1,114688,null,0,a,[d.a,o.Jb,o.g,o.Sb,i.a,d.n],null,null)],(function(l,n){l(n,1,0)}),null)}var f=t.qb("app-editprofile",a,p,{},{},[]),v=u("Ip0R");u.d(n,"EditprofilePageModuleNgFactory",(function(){return m}));var m=t.rb(r,[],(function(l){return t.Db([t.Eb(512,t.j,t.cb,[[8,[s.a,f]],[3,t.j],t.x]),t.Eb(4608,v.l,v.k,[t.u,[2,v.t]]),t.Eb(4608,g.i,g.i,[]),t.Eb(4608,o.c,o.c,[t.z,t.g]),t.Eb(4608,o.Kb,o.Kb,[o.c,t.j,t.q]),t.Eb(4608,o.Ob,o.Ob,[o.c,t.j,t.q]),t.Eb(1073742336,v.b,v.b,[]),t.Eb(1073742336,g.h,g.h,[]),t.Eb(1073742336,g.c,g.c,[]),t.Eb(1073742336,o.Hb,o.Hb,[]),t.Eb(1073742336,d.p,d.p,[[2,d.u],[2,d.n]]),t.Eb(1073742336,r,r,[]),t.Eb(1024,d.l,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);