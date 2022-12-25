class CalculatorController{
    constructor(){   // "_" em js indica uma variável privada
        
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");

        this._currentDate = new Date();
        this.initialize();
    }

    initialize(){

    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
        
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get dateEl(){
        return this._dateEl.innerHTML;
    }

    set dateEl(value){
        this._dateEl.innerHTML = value;
    }

    get timeEl(){
        return this._timeEl.innerHTML;
    }

    set timeEl(value){
        this._timeEl.innerHTML = value;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(value){
        this._currentDate = value;
    }
}