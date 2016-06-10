function cleanmenu() {
    $("a[href='Home.aspx']").attr("href", "Home.html");
    $("a[href='PersonalInfo.aspx']").attr("href", "PersonalInfo.html");
    $("a[href='Registration.aspx']").attr("href", "Registration.html");
    $("a[href='FeeChalans.aspx']").attr("href", "FeeChalans.html");
    $("a[href='Transcript.aspx']").attr("href", "Transcript.html");
    $("a[href='Result.aspx']").attr("href", "Result.html");
    $("a[href='Result_Exam.aspx']").attr("href", "Result_Exam.html");
    $("a[href='PersonalInfo.html']").removeAttr("href");
    $("a[href='QAEval/QAHome.aspx']").removeAttr("href");
    $("a[href='ExamSeatingPlan.aspx']").attr("href", "ExamSeatingPlan.html");
    $("a[href='ChangePassword.aspx']").attr("href", "");

}