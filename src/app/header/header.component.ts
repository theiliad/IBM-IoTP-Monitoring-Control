import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
    <header>
        <div class="container noTopPadding">
            <div class="floatLeft productTitle productTitleWide">
                <a [routerLink]="['/']">
                <img src="assets/img/iotp.png" class="floatLeft" style="width: 55px; margin-right: 15px; margin-top: -2px;">
                IBM <strong>Watson IoT</strong> Platform
                </a>
            </div>
            
            <div class="floatRight">
                <div class="userImg medium-hide">
                    <img src="assets/img/user.jpg" class="circularImg">
                </div>
                
                <p class="floatRight medium-hide">
                    Archie
                </p>
                
                <p class="floatRight medium-show large-hide">
                    <a href="#" class="btn btn-demo em-Modal-Call" rel="loginModal">
                        <i class="icon-menu"></i>
                    </a>
                </p>
            </div>
        </div>
    </header>`
})

export class HeaderComponent {}