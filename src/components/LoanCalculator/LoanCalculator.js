export default{
    name:'LoanCalculator',
    data () {
        return {
            principal:"",
            TotalAmount:"",
            Years:"",
            RateofInterest : [
                {
                    name:"SBI",
                    rate:9
                },
                {
                    name:"HDFC",
                    rate:12
                },
                {
                    name:"ICICI",
                    rate:11

                },
                {
                    name:"Axis Bank",
                    rate:10
                }
            ]

        }
    },
    methods : {
        clean () {
            this.principal='';
            this.TotalAmount='';
            this.Years='';
        },
        Calculate(Bank) {
            if(this.Years==='' && this.principal===''){
                this.principal='0'
                this.Years='0'   
            } else if (this.Years==='') {
                this.Years='0'
            } else if (this.principal==='') {
                this.principal='0'
            }       
            this.RateofInterest.forEach(element => {
                if(element.name === Bank)
                    this.TotalAmount = (parseInt(this.principal) * element.rate* parseInt(this.Years))/100
            });
        }
        

    }
}