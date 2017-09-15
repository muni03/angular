import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDceIDGwqE9L-zFO3Eawa19eyt_t_kWRU_IodW8rjOSpET3LlaBQ'),

    new Recipe('Another Test Recipe', 'This is a simply another test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDceIDGwqE9L-zFO3Eawa19eyt_t_kWRU_IodW8rjOSpET3LlaBQ')
  ];
  constructor() { }

  ngOnInit() {
  }

}
