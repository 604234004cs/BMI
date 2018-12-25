
import { Injectable } from '@angular/core';


@Injectable()
export class BmiProvider {

  bmiCalculatr(height:number,weight:number){
    return (weight / height) /height
  }


  }

