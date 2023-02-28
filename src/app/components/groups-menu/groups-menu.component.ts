import { Component, Input } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups-menu',
  templateUrl: './groups-menu.component.html',
  styleUrls: ['./groups-menu.component.scss']
})
export class GroupsMenuComponent {
  @Input() groups:Group[] = [];

  constructor(private groupsService: GroupsService,
      ){
      }
  
  ngOnInit(): void {
    this.groupsService.getGroups().subscribe(
      (result: Group[]) => (this.groups = result)
    );
  }

}
