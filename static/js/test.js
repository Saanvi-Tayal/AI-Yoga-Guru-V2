let exercises = [
    { name: 'squat', video: 'C:/Users/Saanvi Tayal/OneDrive/Documents/Visual Studio 2019/AI-Yoga-Guru-V2/static/videosssquat.mp4', instructions: ''}
    // { name: 'Exercise 2', video: '', instructions: '' },
    // { name: 'Exercise 3', video: '', instructions: '' },
];
let currentExercise= 0 ;
let exercise = exercises[currentExercise];

$(document).ready(function() {
$('#ref').html(`<video controls>
  <source src="${exercise.video}" type="video/mp4">
  Your browser does not support the video tag.</video>
`);
});