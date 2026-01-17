const aqi = Math.floor(Math.random()*1000);
console.log(aqi);
if (aqi<50) {
    console.log('Good');
} else if (aqi>50 && aqi<100) {
    console.log('Moderate');
} else if (aqi>101 && aqi<150) {
    console.log('Unhealthy (Sensitive Groups)');
} else if (aqi> 151 && aqi< 200) {
    console.log('Unhealthy');
} else if (aqi > 201 && aqi < 300) {
    console.log('Very Unhealthy');
} else {
    console.log('Hazardous');
}