import {
    Component
} from '@angular/core';
import {
    NavController
} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Register } from '../register/register';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,private sqlite: SQLite) {


    }

    loginData() {
        this.navCtrl.push(Register)
               
        
    }

onSubmit(LoginData) {
    console.log(LoginData.value);
    var email=LoginData.value.email;
    var password=LoginData.value.password;
        this.sqlite.create({
  name: "'data.db'",
  location: 'default'
})
        .then((db1: SQLiteObject) => {

    db1.executeSql('SELECT email,password FROM userData WHERE (email = "'+ email+ '" and password = "'+ password+ '" )', {})
      .then(() => this.navCtrl.push(Register))
      .catch(e => alert('Error'+JSON.stringify(e)));


  })
  //.catch(e => alert(e));
}

}