import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profesor-listar',
  templateUrl: './profesor-listar.component.html',
  styleUrls: ['./profesor-listar.component.css']
})
export class ProfesorListarComponent implements OnInit {

  lista:Profesor[] = [];
  public page = 1;
  public pageSize = 10;

  constructor(public dataService: DataService) { 
  }

  ngOnInit(): void {
  }

}
