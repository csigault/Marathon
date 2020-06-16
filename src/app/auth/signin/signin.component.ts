import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // Titre pour le navigateur (referencement)
  title = 'Marathon : Page connexion';

  signInForm: FormGroup;
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
      {name: 'keywords', content: "Marathon, Nice, Cannes, connexion, détail d'un participant, 10km, 2x21.1km, 42.195km"},
      {name: 'description', content: "Site du Marathon Nice Cannes 2021, page connexion"},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

  initForm() {
    this.signInForm = this.formBuilder.group( {
      email: ['', [Validators.required, Validators.email]],
      password: [],
    });
  }

  onSubmit() {
    const email= this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = "Attention l'email ou le mot de passe n'est pas correct";
      }
    );
  }
  
}
