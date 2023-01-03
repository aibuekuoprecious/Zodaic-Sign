/* JavaScript program to display astrological sign
// or Zodiac sign for given date of birth

// Function to calculate sum
// digits of n*/
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
    zodiacSign(day, month, year)
    });
let day = 0
let month =0
let year =0
function zodiacSign(day, month , year)
	{
		let astroSign="";
        let date = document.getElementById("birthday").value;
        const dateOfBirth = new Date(date);
        let newYear= dateOfBirth.getFullYear();
        let newMonth = dateOfBirth.getMonth();
        let newDay = dateOfBirth.getDate();
        year += newYear
        month += newMonth +1
        day += newDay
		
		// checks month and date within the
		// valid range of a specified zodiac
		if (month == 12){
			
			if (day < 22)
			astroSign = "Sagittarius";
			else
			astroSign ="capricorn";
		}
			
		else if (month == 1){
			if (day < 20)
			astroSign = "Capricorn";
			else
			astroSign = "aquarius";
		}
			
		else if (month == 2){
			if (day < 19)
			astroSign = "Aquarius";
			else
			astroSign = "pisces";
		}
			
		else if(month == 3){
			if (day < 21)
			astroSign = "Pisces";
			else
			astroSign = "aries";
		}
		else if (month == 4){
			if (day < 20)
			astroSign = "Aries";
			else
			astroSign = "taurus";
		}
			
		else if (month == 5){
			if (day < 21)
			astroSign = "Taurus";
			else
			astroSign = "gemini";
		}
			
		else if( month == 6){
			if (day < 21)
			astroSign = "Gemini";
			else
			astroSign = "cancer";
		}
			
		else if (month == 7){
			if (day < 23)
			astroSign = "Cancer";
			else
			astroSign = "leo";
		}
			
		else if( month == 8){
			if (day < 23)
			astroSign = "Leo";
			else
			astroSign = "virgo";
		}
			
		else if (month == 9){
			if (day < 23)
			astroSign = "Virgo";
			else
			astroSign = "libra";
		}
			
		else if (month == 10){
			if (day < 23)
			astroSign = "Libra";
			else
			astroSign = "scorpio";
		}
			
		else if (month == 11){
			if (day < 22)
			astroSign = "scorpio";
			else
			astroSign = "sagittarius";
		}
        else {
            astroSign = "No sign"
        }
document.getElementById("zodaicSign").textContent = astroSign;
	}