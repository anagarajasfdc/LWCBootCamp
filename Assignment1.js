import { LightningElement} from 'lwc';

export default class Assignment1 extends LightningElement {
    firstName='';
    lastName='';
    fullName='';
    Changehandler(event){
        let value = event.target.value;;
        if(event.target.label === 'FirstName'){
            this.firstName = value;
            console.log('FirstName-->',this.firstName);
        }
        else if(event.target.label === 'LastName'){
            this.lastName = value;
            console.log('LastName-->',this.lastName);
    }
   }
   
    get fullnameinCapital(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
    }


   
    