import { Component } from '@angular/core';
//import { NgForOf } from "../../../node_modules/@angular/common/types/_common_module-chunk"; Depricated!

@Component({
  selector: 'app-listcomponent',
  imports: [/*NgForOf*/], // Depricated!
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css',
})

// List Componenet Logic
export class Listcomponent
{
  // An array of President objects
  presidents: any[] =
  [{name: "Higgins",    term:"2011-"},
  {name: "McAleese",    term:"1997-2011"},
  {name: "Robinson",    term:"1990-1997"},
  {name: "Hillery",     term:"1976-1990"},
  {name: "O Dalaigh",   term:"1974-1976"}];
}