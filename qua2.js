class Quartals{
    constructor(){
      this.quarters = [];
      this.StartDay = "2021-09-1";
    }
  
    generateQuartals() {
      var date = new Date('2024-09-2');
      var start_date = new Date(this.StartDay);
      var id = 1;
        while (start_date <= date) {
          var values =[];
          // const mounth = start_date.getMonth();
          const year = start_date.getFullYear();
          values = this.checkQuartals(start_date, year)
          this.quarters.push({
            id,
            date:{
              name: values[0],
              StartDate: values[1],
              EndDate: values[2]
            }
          })
          id++;
          start_date = new Date(this.addDays(values[2], 1));
        }
        return this.quarters;
    }
    checkQuartals(start_date, year){
      var quartal_1 = `${year}-12-1,${year+1}-02-${this.daysInMonth(2, year+1)}`.split(",");
      var quartal_2 = `${year}-03-1,${year}-05-31`.split(",");
      var quartal_3 = `${year}-06-1,${year}-08-31`.split(",");
      var quartal_4 = `${year}-09-1,${year}-11-30`.split(",")
      
      if (start_date >= new Date(quartal_2[0]) && start_date <= new Date(quartal_3[1])){
        if(start_date >= new Date(quartal_2[0]) && start_date <= new Date(quartal_2[1])){
          return [`2 квартал ${year}`, quartal_2[0], quartal_2[1]]; 
        }else{
          return [`3 квартал ${year}`, quartal_3[0], quartal_3[1]];
        }
      }else{
        if(start_date >= new Date(quartal_4[0]) && start_date <= new Date(quartal_4[1])){
          return [`4 квартал ${year}`, quartal_4[0], quartal_4[1]];
        }else{
          console.log(start_date)
          return [`1 квартал ${year+1}`, quartal_1[0], quartal_1[1]];
        }
      }
    }
  
    addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
    
    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }
  }
  quartals = new Quartals();
  console.log(quartals.generateQuartals())
  
  