/**
 * App Components
 * @author    AppsPlaces <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */


import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MetaServiceService } from './services/meta-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
    private metaService: MetaServiceService) { }

  ngOnInit() {
    // Sets Meta Tags
    this.metaService.addMetaTags();
    this.metaService.setTitle();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
