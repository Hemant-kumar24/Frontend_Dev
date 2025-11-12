let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
  console.log("System Status: Secure");
} else {
  console.log("System Status: Unsafe");
}

// Try changing values to test:
isOwnerInside = false;
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
  console.log("System Status: Secure");
} else {
  
  console.log("System Status: Unsafe");
}