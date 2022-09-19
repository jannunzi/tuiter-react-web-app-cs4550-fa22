javascript:(function () {
    class give100AndNext {
        constructor() {
            const gradeField = $("#grading-box-extended");
            const submissionDetails = $("#submission_details");
            const commentField = $("#speed_grader_comment_textarea");
            const nextButton = $("#next-student-button");
            gradeField.val(100).trigger("change");
            submissionDetails.click();
            commentField.val('Well done');
            setTimeout(() => {
                const submitButton = $("#comment_submit_button");
                submitButton.click();
            }, 500);
            setTimeout(() => {
                const nextButton = $("#next-student-button");
                nextButton.click();
            }, 1000);
        }
    }
    window.jga_give100AndNext = new give100AndNext;
})();