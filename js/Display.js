class Display{
    constructor(displayPreviousValue,displayCurrentValue){
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.tipeOperation = undefined;
        this.previousValue = '';
        this.currentValue = '';
        this.signs = {
            add: '+',
            substract: '-',
            multiply: 'x',
            divide: '%',
        }
    }

    addNumber(number){
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number;
        this.showValues();
    }

    deleteNumber(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.showValues();
    }

    deleteAllNumber(){
        this.currentValue = '';
        this.previousValue = '';
        this.tipeOperation = undefined;
        this.showValues();
    }

    showValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.tipeOperation] || ''}`;
     
    }

    calculate(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if(isNaN(currentValue) || isNaN(previousValue)) return
        this.currentValue = this.calculator[this.tipeOperation](previousValue,currentValue);
    }

    compute(tipe){
        this.tipeOperation !== 'equal' && this.calculate();
        this.tipeOperation = tipe;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.showValues();
    }
}