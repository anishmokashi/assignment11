import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string 
  { 
    //create new string to hold the reverse string
    let temp:string="";
    // Iterating through the string
    for(let char of value){
      // append every character of string to the start of the reverseString
     
      temp=char+temp;
      console.log(temp);
    }
  
    return temp;
  }

}
