import './style.css'
import {differenceInDays, ifBirthday, differenceInWeeks } from './functions.js'
import dayjs from 'dayjs'

const date = document.getElementById("datepicker");
const form = document.getElementById("form");
const dialog = document.getElementById("info-dialog")
const closeButtonX = document.getElementById("close-dialog");
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const dateInp = date.value;
    const answerInDays = differenceInDays(dateInp)
    if(!isNaN(answerInDays)){
      if(answerInDays>0 || ifBirthday(dateInp)){
        document.getElementById("dialog-days-result").innerHTML="Twoje urodziny były " + answerInDays + " dni temu."
        if(ifBirthday(dateInp)){
        document.getElementById("dialog-days-result").innerHTML+=" Wszystkiego najlepszego!!!"
        }
      }
      else{
        document.getElementById("dialog-days-result").innerHTML="Twoje urodziny będą za " + (-answerInDays+1) + " dni.";
        if(answerInDays<=0 && !ifBirthday(dateInp)){
            const answerInWeeks = differenceInWeeks(dateInp);
            document.getElementById("dialog-weeks-result").innerHTML="Masz urodziny za " + answerInWeeks + " tygodnie."
            if(answerInWeeks==0){
              document.getElementById("dialog-weeks-result").innerHTML+=" Masz urodziny w tym tygodniu!"
            }
          }
      }
    }else{
      document.getElementById("dialog-days-result").innerHTML="Musisz wybrać datę!"
    }
    dialog.showModal();
});
closeButtonX.addEventListener("click", () => {
  dialog.close();
});
