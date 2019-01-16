import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  template: `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-primary">
        <li class="breadcrumb-item text-white" aria-current="page">Aprendendo Inglês</li>
      </ol>
    </nav>
  `,
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
