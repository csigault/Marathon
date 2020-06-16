import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // Titre pour le navigateur (referencement)
  title = 'Marathon : Distances';

  constructor(private titleService: Title, private metaService: Meta) { // declaration pour le referencement
    }

  ngOnInit(): void {
    // Meta pour le referencement
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Marathon, Nice, Cannes, inscription, distances, 10km, 2x21.1km, 42.195km'},
      {name: 'description', content: 'Site du Marathon Nice Cannes 2021'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }



}

