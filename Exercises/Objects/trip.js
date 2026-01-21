// Write code below 💖
const departTripTicket = {
  name: 'George DeMarco',
  from: 'Slovenia',
  to: 'England',
  businessClass: true,
  departTime: 10,
  upgrade () {
    if (this.businessClass===false) {
      this.businessClass= true;
    } else {
      console.log('Your ticket is already business class!')
    }
  }
};

const returnTripTicket = {
  name: 'George DeMarco',
  from: 'Slovenia',
  to: 'England',
  businessClass: true,
  arriveTime: 13,
  upgrade () {
    if (this.businessClass===false) {
      this.businessClass= true;
    } else {
      console.log('Your ticket is already business class!')
    }
  },
  flightTime () {
    let calculate = 0;
    calculate = this.arriveTime - departTripTicket.departTime;
    console.log(`Flight time: ${calculate} hours`);
    return calculate;
  }
};

departTripTicket.upgrade();
returnTripTicket.upgrade();
returnTripTicket.flightTime();
