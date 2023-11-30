
// let string="";
let string=document.querySelector('.text1').value;
let buttons=document.querySelectorAll('button');


buttons.forEach((button)=>{
    button.addEventListener("click",((ele)=>{
        let c=ele.target.value;
        if(c== "="){
            string=eval(string);
            document.querySelector('.text1').value=string;
        }else if(c== "c"){
             
            document.querySelector('.text1').value=string="";

        }else if(c== "del"){
            string=string.slice(0,-1);
            let input=document.querySelector('.text1');
            
            input.value=string;
             

             
                 
                 
        }else{
            string=string+c;
            document.querySelector('.text1').value=string;
            
        }
    }))
})