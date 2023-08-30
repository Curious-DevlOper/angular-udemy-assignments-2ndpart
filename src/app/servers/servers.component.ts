import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }
               //ActivatedRoute is used to access information about the currently activated route in your application.

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload(){
    //this.router.navigate(['servers'], {relativeTo: this.route});
    //relativeTo shows what our currently active route is 
  }

}
