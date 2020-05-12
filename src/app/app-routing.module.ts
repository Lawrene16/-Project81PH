import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'discover', loadChildren: './discover/discover.module#DiscoverPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'addtrip', loadChildren: './addtrip/addtrip.module#AddtripPageModule' },
  { path: 'more', loadChildren: './more/more.module#MorePageModule' },
  { path: 'tripdetails', loadChildren: './tripdetails/tripdetails.module#TripdetailsPageModule' },
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' },
  { path: 'edittrip', loadChildren: './edittrip/edittrip.module#EdittripPageModule' },
  { path: 'imagemodal', loadChildren: './imagemodal/imagemodal.module#ImagemodalPageModule' },
  { path: 'imagedetails', loadChildren: './imagedetails/imagedetails.module#ImagedetailsPageModule' },
  { path: 'linkedaccounts', loadChildren: './linkedaccounts/linkedaccounts.module#LinkedaccountsPageModule' },
  { path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangepasswordPageModule' },
  { path: 'changeemail', loadChildren: './changeemail/changeemail.module#ChangeemailPageModule' },
  { path: 'deactivateaccount', loadChildren: './deactivateaccount/deactivateaccount.module#DeactivateaccountPageModule' },
  { path: 'helpcentre', loadChildren: './helpcentre/helpcentre.module#HelpcentrePageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'givefeedback', loadChildren: './givefeedback/givefeedback.module#GivefeedbackPageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
