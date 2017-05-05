import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  private myData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private sqlite: SQLite) {
      
  }
    
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
    
    
    onSubmit(RegisterData) {
    if(RegisterData.valid) {
      console.log(RegisterData.value);
      this.myData = RegisterData.value;
        alert(JSON.stringify(RegisterData.value));
        var fname=RegisterData.value.fname;
        var sname=RegisterData.value.sname;
        var email=RegisterData.value.email;
        var phone=RegisterData.value.phone;
        var password=RegisterData.value.password;
        
        this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('CREATE TABLE IF NOT EXISTS userData(fname VARCHAR(10),sname VARCHAR(10),email VARCHAR(50),phone INTEGER(20),password VARCHAR(20))', {})
      .then(() => alert('Table Successfully Created!'))
      .catch(e => alert(e));
            
    db.executeSql('INSERT INTO userData (fname,sname,email,phone,password) VALUES (?,?,?,?,?)', {fname,sname,email,phone,password})
      .then(() => alert('Registered Successfully!'))
      .catch(e => alert(e));

    db.executeSql('SELECT * FROM userData', {})
      .then((results) => alert('results.rows.length:'+JSON.stringify(results)))
      .catch(e => alert(e));


  })
  .catch(e => alert(e));
        
            
     
  
       }
    }
    
    

}
