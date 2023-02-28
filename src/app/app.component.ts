import { Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Group } from './models/group';
import { GroupsService } from './services/groups.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{
  
  groups:Group[] = [];
  subscription: Subscription | undefined;

  constructor(private groupsService: GroupsService,
              private sharedService: SharedService,
              private router: Router
      ){}
 
  ngOnInit(): void {
    this.groupsService.getGroups().subscribe(
      (result: Group[]) => (this.groups = result)
    );
    
    this.subscription = this.sharedService.getData().subscribe(updatedGroups => this.groups = updatedGroups);
  }

  ngOnDestroy(): void {
   this.subscription?.unsubscribe();
  }

}
