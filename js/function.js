function isMeetingWithinWorkingHours(startOfWork, endOfWork, startOfMeeting, meetingDuration) {
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const startOfWorkMinutes = timeToMinutes(startOfWork);
  const endOfWorkMinutes = timeToMinutes(endOfWork);
  const startOfMeetingMinutes = timeToMinutes(startOfMeeting);

  const endOfMeetingMinutes = startOfMeetingMinutes + meetingDuration;

  if (startOfMeetingMinutes >= startOfWorkMinutes && endOfMeetingMinutes <= endOfWorkMinutes) {
    return true;
  } else {
    return false;
  }
}

isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90);
isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120);
isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90);
isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90);
isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900);

