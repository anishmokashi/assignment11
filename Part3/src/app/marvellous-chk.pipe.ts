import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number,Param:string): any
  { let iCnt=0,iSum=0;
   

    if(Param=="Prime")
    { 
      for(iCnt=2;iCnt<=(value/2);iCnt++)
      {
        if((value%iCnt)==0)
        {
         return "It is a prime number";
        }
      }

    }
                    if(Param=="Perfect")
                    { 
                    for(iCnt=1;iCnt<=(value/2);iCnt++)
                    {
                    if((value%iCnt)==0)
                    {
                    iSum=iSum+iCnt;
                    }
                    }
                    if(iSum==value)
                    {
                      return "It is a perfect number";
                    }

                    }

                    
                    if(Param=="Even")
                    {
                      if((value%2)==0)
                      {
                        return "It is even number"
                      }
                    }

                    if(Param=="Odd")
                    {
                      if((value%2)!==0)
                      {
                        return "It is odd number"
                      }
                    }

          
  }

}
