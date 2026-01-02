import { Component, inject, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';
import { Result } from 'postcss';
import { Router, RouterLink,RouterLinkActive } from "@angular/router"; 
import { ToastService } from '../../../core/services/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected accountService=inject(AccountService);
   private router =inject(Router);
  protected creds:any ={}
  protected loggedIn = signal(false)
  private toast= inject(ToastService);
 

  login(){
    this.accountService.login(this.creds).subscribe({
      next: Result => {
          this.router.navigateByUrl('/members');
          this.toast.success('Logged in succesfully');
          console.log(Result);
          this.loggedIn.set(true);
      },
      error: error =>{
        this.toast.error(error.error);
      }
    })
  }

  logOut(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
