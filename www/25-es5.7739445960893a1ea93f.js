(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{y3YU:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),i=u("ZZ/e"),o=u("iqUP"),a=function(){function l(l,n){this.loadingCtrl=l,this.toastCtrl=n,this.title="",this.message=""}return l.prototype.ngOnInit=function(){},l.prototype.sendfeedback=function(){var l=this;""==this.title?this.presentToast("Title field cannot be left blank"):""==this.message?this.presentToast("Message field cannot be left blank"):this.loadingCtrl.create({message:"Please wait"}).then((function(n){n.present(),setTimeout((function(){n.dismiss(),l.presentToast("Your feedback has been submitted successfully"),l.title="",l.message=""}),3e3),emailjs.send("gmail","feedback",{from_name:"#Project81PH",user_email:o.auth().currentUser.email,title:l.title,message:l.message})}))},l.prototype.presentToast=function(l){return t.b(this,void 0,void 0,(function(){return t.d(this,(function(n){switch(n.label){case 0:return[4,this.toastCtrl.create({message:l,duration:2e3,color:"dark"})];case 1:return n.sent().present(),[2]}}))}))},l}(),b=function(){return function(){}}(),r=u("pMnS"),s=u("oBZk"),d=u("gIcY"),g=e.sb({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Mb(0,[(l()(),e.ub(0,0,null,null,11,"ion-header",[],null,null,null,s.T,s.l)),e.tb(1,49152,null,0,i.E,[e.h,e.k,e.z],null,null),(l()(),e.ub(2,0,null,0,9,"ion-toolbar",[],null,null,null,s.pb,s.H)),e.tb(3,49152,null,0,i.Fb,[e.h,e.k,e.z],null,null),(l()(),e.ub(4,0,null,0,4,"ion-buttons",[["slot","start"],["style","margin-left: 5px"]],null,null,null,s.L,s.d)),e.tb(5,49152,null,0,i.o,[e.h,e.k,e.z],null,null),(l()(),e.ub(6,0,null,0,2,"ion-back-button",[["color","primary"],["defaultHref","/more"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Gb(l,8).onClick(u)&&t),t}),s.J,s.b)),e.tb(7,49152,null,0,i.j,[e.h,e.k,e.z],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),e.tb(8,16384,null,0,i.k,[[2,i.lb],i.Lb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.ub(9,0,null,0,2,"ion-title",[],null,null,null,s.ob,s.G)),e.tb(10,49152,null,0,i.Db,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Give Feedback"])),(l()(),e.ub(12,0,null,null,45,"ion-content",[],null,null,null,s.Q,s.i)),e.tb(13,49152,null,0,i.x,[e.h,e.k,e.z],null,null),(l()(),e.ub(14,0,null,0,43,"div",[["style","padding: 20px;"]],null,null,null,null,null)),(l()(),e.ub(15,0,null,null,5,"p",[["style","text-align: center; font-size: 20px;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["How has your experience with "])),(l()(),e.ub(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(18,0,null,null,1,"span",[["style","font-weight: 600;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["#Project81PH"])),(l()(),e.Lb(-1,null,[" app been so far?"])),(l()(),e.ub(21,0,null,null,1,"div",[["style","font-size: 15px; margin-top: 20px;  font-family: montserat; font-weight: 500; opacity: 0.8;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Title"])),(l()(),e.ub(23,0,null,null,10,"div",[["style","border-radius: 10px; margin-top: 5px; height: 50px; background-color: white; border: 1.5px solid #cecece;"]],null,null,null,null,null)),(l()(),e.ub(24,0,null,null,9,"div",[["style","height: 100%"]],null,null,null,null,null)),(l()(),e.ub(25,0,null,null,7,"div",[["style","float: left; height: 100%; width: 77vw;"]],null,null,null,null,null)),(l()(),e.ub(26,0,null,null,6,"ion-input",[["style","height: 100%; margin-left: 10px;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Gb(l,27)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Gb(l,27)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.title=u)&&t),t}),s.V,s.n)),e.tb(27,16384,null,0,i.Rb,[e.k],null,null),e.Ib(1024,null,d.d,(function(l){return[l]}),[i.Rb]),e.tb(29,671744,null,0,d.g,[[8,null],[8,null],[8,null],[6,d.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,d.e,null,[d.g]),e.tb(31,16384,null,0,d.f,[[4,d.e]],null,null),e.tb(32,49152,null,0,i.J,[e.h,e.k,e.z],{type:[0,"type"]},null),(l()(),e.ub(33,0,null,null,0,"div",[["style","float: left; height: 100%; width: 10vw;"]],null,null,null,null,null)),(l()(),e.ub(34,0,null,null,1,"div",[["style","font-size: 15px; margin-top: 20px;  font-family: montserat; font-weight: 500; opacity: 0.8;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Message"])),(l()(),e.ub(36,0,null,null,10,"div",[["style","border-radius: 10px; margin-top: 5px; height: 150px; background-color: white; border: 1.5px solid #cecece;"]],null,null,null,null,null)),(l()(),e.ub(37,0,null,null,9,"div",[["style","height: 100%"]],null,null,null,null,null)),(l()(),e.ub(38,0,null,null,7,"div",[["style","float: left; height: 100%; width: 77vw;"]],null,null,null,null,null)),(l()(),e.ub(39,0,null,null,6,"ion-textarea",[["style","height: 100%; margin-left: 10px;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Gb(l,40)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Gb(l,40)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.message=u)&&t),t}),s.nb,s.F)),e.tb(40,16384,null,0,i.Rb,[e.k],null,null),e.Ib(1024,null,d.d,(function(l){return[l]}),[i.Rb]),e.tb(42,671744,null,0,d.g,[[8,null],[8,null],[8,null],[6,d.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,d.e,null,[d.g]),e.tb(44,16384,null,0,d.f,[[4,d.e]],null,null),e.tb(45,49152,null,0,i.Bb,[e.h,e.k,e.z],null,null),(l()(),e.ub(46,0,null,null,0,"div",[["style","float: left; height: 100%; width: 10vw;"]],null,null,null,null,null)),(l()(),e.ub(47,0,null,null,3,"div",[["style","height: 48px;\twidth: 90vw;\tborder-radius: 24px; margin-top: 20px;\tbackground: #FF7C0B;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.sendfeedback()&&e),e}),null,null)),(l()(),e.ub(48,0,null,null,2,"p",[["align","center"],["style","margin: 0px; font-size: 18px; color: white; font-weight: 600; padding-top: 12px; height: 100%;"]],null,null,null,null,null)),(l()(),e.ub(49,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Send Feedback"])),(l()(),e.ub(51,0,null,null,6,"div",[["style","margin-top: 20px; font-size: 15px;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["If the form above is giving you any trouble, please shoot an email directly to "])),(l()(),e.ub(53,0,null,null,1,"span",[["style","color: #FF7C0B;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["project81pinas@gmail.com"])),(l()(),e.ub(55,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(56,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Please know that we greatly appreciate your feedback. So, a huge thanks! \ud83c\udf89\ud83e\udd17"]))],(function(l,n){var u=n.component;l(n,7,0,"primary","/more"),l(n,8,0,"/more"),l(n,29,0,u.title),l(n,32,0,"text"),l(n,42,0,u.message)}),(function(l,n){l(n,26,0,e.Gb(n,31).ngClassUntouched,e.Gb(n,31).ngClassTouched,e.Gb(n,31).ngClassPristine,e.Gb(n,31).ngClassDirty,e.Gb(n,31).ngClassValid,e.Gb(n,31).ngClassInvalid,e.Gb(n,31).ngClassPending),l(n,39,0,e.Gb(n,44).ngClassUntouched,e.Gb(n,44).ngClassTouched,e.Gb(n,44).ngClassPristine,e.Gb(n,44).ngClassDirty,e.Gb(n,44).ngClassValid,e.Gb(n,44).ngClassInvalid,e.Gb(n,44).ngClassPending)}))}function p(l){return e.Mb(0,[(l()(),e.ub(0,0,null,null,1,"app-givefeedback",[],null,null,null,c,g)),e.tb(1,114688,null,0,a,[i.Jb,i.Sb],null,null)],(function(l,n){l(n,1,0)}),null)}var h=e.qb("app-givefeedback",a,p,{},{},[]),f=u("Ip0R"),m=u("ZYCi");u.d(n,"GivefeedbackPageModuleNgFactory",(function(){return y}));var y=e.rb(b,[],(function(l){return e.Db([e.Eb(512,e.j,e.cb,[[8,[r.a,h]],[3,e.j],e.x]),e.Eb(4608,f.l,f.k,[e.u,[2,f.t]]),e.Eb(4608,d.i,d.i,[]),e.Eb(4608,i.c,i.c,[e.z,e.g]),e.Eb(4608,i.Kb,i.Kb,[i.c,e.j,e.q]),e.Eb(4608,i.Ob,i.Ob,[i.c,e.j,e.q]),e.Eb(1073742336,f.b,f.b,[]),e.Eb(1073742336,d.h,d.h,[]),e.Eb(1073742336,d.c,d.c,[]),e.Eb(1073742336,i.Hb,i.Hb,[]),e.Eb(1073742336,m.p,m.p,[[2,m.u],[2,m.n]]),e.Eb(1073742336,b,b,[]),e.Eb(1024,m.l,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);