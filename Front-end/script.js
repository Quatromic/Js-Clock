const hourHand = document.getElementById("short"),
    minuteHand = document.getElementById("long"),
    secondHand = document.getElementById("second"),
    DateTag = document.getElementById("Date"),
    TimeTag = document.getElementById("Time")

const setTime = () => {
    const date = new Date()
    let seconds = date.getSeconds(),minutes = date.getMinutes(),hour = date.getHours()
    let secondAngle = (((seconds / 60) * 360) + 90)
        ,minuteAngle = (((minutes / 60) * 360) + ((seconds/60) * 60)  + 90)
        ,hourAngle = (((hour / 12) * 360) + ((minutes/60)*30) + 90);

    hourHand.style.transform = `rotate(${hourAngle}deg)`
    secondHand.style.transform = `rotate(${secondAngle}deg)`
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`

    const Minutes = () => {
        if(date.getMinutes() <= 9){
            return "0" + date.getMinutes()
        }
        else{
            return date.getMinutes()
        }
    },Seconds = () => {
        if(date.getSeconds() <= 9){
            return "0" + date.getSeconds()
        }
        else{
            return date.getSeconds()
        }
    }
    TimeTag.innerText = `${date.getHours()}:${Minutes()}:${Seconds()}`
}

setInterval(setTime,1000)

setTime()
//Date in words

const Updater = () => {
    const date = new Date()
    let months = () => {
        switch(date.getMonth() + 1){
            case 1:
                return "Jan"
            case 2:
                return "Feb"
            case 3:
                return "Mar"
            case 4:
                return "Apr"
            case 5:
                return "May"
            case 6:
                return "Jun"
            case 7:
                return "Jul"
            case 8:
                return "Aug"
            case 9:
                return "Sep"
            case 10:
                return "Oct"
            case 11:
                return "Nov"
            case 12:
                return "Dec"
        }
    }
    let Day = () => {
        switch(date.getDay()){
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case 6:
                return "Saturday"
            case 7:
                return "Sunday"
        }
    }
    DateTag.innerText = `${Day()}, ${date.getDate()} ${months()}, ${date.getFullYear()}`
}

Updater()