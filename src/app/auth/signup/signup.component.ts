import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // Titre pour le navigateur (referencement)
  title = "Marathon : Création d'un compte";

  signUpForm: FormGroup;
  errorMessage : string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private titleService: Title, 
              private metaService: Meta) { }

  ngOnInit() {
    this.initForm();

    // Meta pour le referencement
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: "Marathon, Nice, Cannes, création d'un compte, détail d'un participant, 10km, 2x21.1km, 42.195km"},
      {name: 'description', content: "Site du Marathon Nice Cannes 2021, page création d'un compte utilisateur"},
      {name: 'robots', content: 'index, follow'}
    ]);

  }

  initForm() {
    this.signUpForm = this.formBuilder.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[0-9a-zA]{6,}')]], // Avant 23/04 pas de validators = password: [],
    });
  }

  onSubmit() {
    const email= this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = "Ce compte utilisateur existe déjà";
      }
    );
  }
  
}
