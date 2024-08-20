import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component-bootstrap.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

salesPersonList: SalesPerson[] = [
  new SalesPerson("Anna", "Antis", "jwsjkd@gmail.com", 50000),
  new SalesPerson("Nicole", "Niolcis", "jwsjk4opd@gmail.com", 70000),
  new SalesPerson("Jared", "Iliion", "hebdjd@hotmail.com", 89000),
  new SalesPerson("Lori", "Lorvis", "loriijkd@gmail.com", 64000)
];

  constructor() { }

  ngOnInit(): void {
  }

}
