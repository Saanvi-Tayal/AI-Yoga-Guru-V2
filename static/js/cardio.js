let exercises = [
    { name: 'squat', video: '/static/videos/squat.mp4', instructions: ''}
    // { name: 'Exercise 2', video: '', instructions: '' },
    // { name: 'Exercise 3', video: '', instructions: '' },
];
let currentExercise= 0 ;


function displayCurrentExercise(){
    if (currentExercise<exercises.length){
        let exercise = exercises[currentExercise];
        // $('#cam-box').html(<img src="{{ url_for('video_feed') }}" width="100%"></img>);
        $('#ref').html(<video><source src>"${exercise.video}"</source></video>)
        currentExercise++;
    }
    else{
        $('#Feedback').html('<h2>Workout Complete!</h2>');
    }
}

$(document).ready(function() {
    $('#startButton').click(function() {
        displayCurrentExercise();
    });
});