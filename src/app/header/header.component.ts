import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  welcomeUserName! : string
getUerName(userName: string){
   this.welcomeUserName = userName
}

greetnig!:string

getFromChild(text : any){
   this.greetnig = text
}
}
