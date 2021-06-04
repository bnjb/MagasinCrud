import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Parc } from 'src/app/models/parc';
import { ParcService } from 'src/app/services/parc.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public parcForm : FormGroup;

  constructor(
    private service : ParcService,
    private fb : FormBuilder,
    private router : Router
  ) {
    this.parcForm = this.fb.group({
      nom: "",
      capacite: 0
    })
   }

  ngOnInit(): void {
  }

  ajouter = () => {
    this.service.create(this.parcForm.value).subscribe(parc => {
      this.router.navigate(["/home"]);
    });
  }

}
