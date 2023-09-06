const inputtext=document.querySelector('#inp');

const temp=document.querySelector('#temp');
const convert=document.querySelector('.convert');
const result=document.querySelector('.result');
const Celsius=document.getElementById('Celsius');
const Fahrenheit=document.getElementById('Fahrenheit');
const Kelvin=document.getElementById('Kelvin');
var temptoconvert="";

Celsius.addEventListener('click',()=>{
    temptoconvert="Celsius";
})
Fahrenheit.addEventListener('click',()=>{
    temptoconvert="Fahrenheit";
})
Kelvin.addEventListener('click',()=>{
    temptoconvert="Kelvin";
})

convert.addEventListener('click',()=>{
    const Value=inputtext.value;
    if(temp.value==="Celsius"){
        if(temptoconvert=="Celsius"){
            result.innerHTML=`${Value} &deg;c`;
        }
        else if(temptoconvert=="Fahrenheit"){
            const f = ((eval(Value) * (9 / 5)) + 32).toFixed(3);
            result.innerHTML=`${f} &deg;F`;
        }
        else if(temptoconvert=="Kelvin"){
            const k=(eval(Value)+273.15).toFixed(3);
            result.innerHTML=`${k} K`;
        }
    }
    else if(temp.value==="Fahrenheit"){
        if(temptoconvert=="Celsius"){
            const c=((eval(Value) - 32) * 5/9).toFixed(3);
            result.innerHTML=`${c} &deg;c`;
        }
        else if(temptoconvert=="Fahrenheit"){
            result.innerHTML=`${Value} &deg;F`;
        }
        else if(temptoconvert=="Kelvin"){
            const k=(((eval(Value) - 32) * 5/9)+273.15).toFixed(3);
            result.innerHTML=`${k} K`;
        }
    }
    else if(temp.value==="Kelvin"){
        if(temptoconvert=="Celsius"){
            const c=(eval(Value)-273.15).toFixed(3);
            result.innerHTML=`${c} &deg;c`;
        }
        else if(temptoconvert=="Fahrenheit"){
            const f=((eval(Value)- 273.15) * 9 / 5 + 32).toFixed(3);
            result.innerHTML=`${f} &deg;F`;
        }
        else if(temptoconvert=="Kelvin"){
            
            result.innerHTML=`${Value} K`;
        }
    }

 
})


    


