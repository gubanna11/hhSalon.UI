import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  groupName?: string | null;
  services: Service[] = [];

  serviceToEdit?:Service | null;

  constructor(private servicesService: ServicesService,
    private route: ActivatedRoute,
    private router: Router){

      
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const groupId = Number(routeParams.get('groupId'));
    this.groupName = routeParams.get('groupName');
    
    this.servicesService.getServices(groupId).subscribe(
      (services: Service[]) => this.services = services
    );

  }


  deleteService(service:Service){
    this.servicesService.deleteService(service).subscribe(
      (services:Service[]) => {
        this.services = services;
        //this.router.navigate([`services/${service.groupId}/${this.groupName}`])
      }
      );
  }

  updateService(service:Service){
    this.serviceToEdit = service;
  }

  updatedServicesList(services: any){
    this.services = services;
    this.serviceToEdit = null;
  }
}
