$(document).ready(
    function () {
        $("#calculateGrade").click(calculateGrade);
        $("#sortByName").click(nameSort);
        $("#sortByPercent").click(percentSort);


        var studentList = [];

        function calculateGrade(event) {
            event.preventDefault();

            //get score
            var pointsEarned = $("#pointsEarned").val();
            pointsEarned = parseFloat(pointsEarned);
            var pointsPossible = $("#pointsPossible").val();
            pointsPossible = parseFloat(pointsPossible);

            //get name
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();

            //get percent and full name
            var percentage = (pointsEarned / pointsPossible).toFixed(1) * 100;
            var fullName = firstName + " " + lastName;

            //get grade message
            var gradeOutput = "";
            if (percentage < 60) {
                //F Grade
                gradeOutput = "F, You Flunked!";
            } else if (percentage <= 70) {
                //D Grade
                gradeOutput = "D, What are you doing?";
            } else if (percentage <= 80) {
                //C Grade
                gradeOutput = "C, Study more.";
            } else if (percentage <= 90) {
                //B Grade
                gradeOutput = "B, Keep up the good work.";
            } else {
                //A Grade
                gradeOutput = "A, Awesome job! ";
            }


            //create student object

            var student = {

                name: fullName,
                percentage: percentage,
                grade: gradeOutput

            };
            //store object into array
            studentList.push(student);


            //display array

            var list = "";
            for (var i = 0; i < studentList.length; i++) {
                list += `Student Name: ${studentList[i].name} <br>
                Percent: ${studentList[i].percentage}% <br>
                Grade: ${studentList[i].grade}`;
            }

            $("#output").html(list);

            //only displays one student
            // for (var i = 0; i < studentList.length; i++) {
            //     $("#output").html(`Student Name: ${studentList[i].name} <br>
            //     Percent: ${studentList[i].percentage}% <br>
            //         Grade: ${studentList[i].grade}`);
            // }

        }


        function nameSort() {

            function sortByName(n1, n2) {

                if (n1.name < n2.name)
                    return -1;

                else if (n1.name > n2.name)
                    return 1;

                else
                    return 0;
            }

            studentList.sort(sortByName);

            var list = "";
            for (var i = 0; i < studentList.length; i++) {
                list += `Student Name: ${studentList[i].name} <br>
                Percent: ${studentList[i].percentage}% <br>
                Grade: ${studentList[i].grade}`;
            }
            $("#output").html(list);
        }


        function percentSort() {
            function sortByPercent(p1, p2) {
                if (p1.name < p2.name)
                    return -1;

                else if (p1.name > p2.name)
                    return 1;

                else
                    return 0;

            }

            var list = "";
            for (var i = 0; i < studentList.length; i++) {
                list += `Student Name: ${studentList[i].name} <br>
                Percent: ${studentList[i].percentage}% <br>
                Grade: ${studentList[i].grade}`;
            }
            $("#output").html(list);
        }
    });