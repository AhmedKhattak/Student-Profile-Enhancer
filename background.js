//In case you are wondering ajax in google chrome background pages are not bound by cross origin policy
//it means you can send cookies along with ajax requests and dont have to worry about cross domain calls !


var site = "http://111.68.99.8/StudentProfile/";


var final = {
    done1: 0,
    done2: 0
};

watch(final, ["done1", "done2"], function() {
    if (final.done1 === 1 && final.done2 === 1) {
        //actually commit all data to real keys other keys are just temps if any one 
        //of the calls does not succeed all of them are considered to be failed
        //so use real keys only which have all the data though it may not be latest
        //here fail means the call could not be completed data can be null it will be handled later



        //photo
        localStorage.setItem('real_photo_100', localStorage.getItem('temp_photo_100'));
        localStorage.setItem('real_FeeChalans', localStorage.getItem('temp_FeeChalans'));
        localStorage.setItem('real_Result_Exam', localStorage.getItem('temp_Result_Exam'));
        localStorage.setItem('real_Result', localStorage.getItem('temp_Result'));
        localStorage.setItem('real_Registration', localStorage.getItem('temp_Registration'));
        localStorage.setItem('real_Transcript', localStorage.getItem('temp_Transcript'));
        localStorage.setItem('real_ExamSeatingPlan', localStorage.getItem('temp_ExamSeatingPlan'));
        localStorage.setItem('real_Home', localStorage.getItem('temp_Home'));
        localStorage.setItem('zlast_updated', Date());
        log("INFO : All requests completed", "info");
        var t = 0;
        for (var x in localStorage) {
            t += (((localStorage[x].length * 2)));
        }
        console.log(t / 1024 + " KB");
        console.log(JSON.parse(localStorage.getItem('temp_attendeces')));
    }
    if (final.done1 === 0 && final.done2 === 0) {
        console.log("reset done1 and done2 ");
    }
});


var ex1 = {
    attr1: 0
};

//defining a 'watcher' for an attribute
watch(ex1, "attr1", function() {

    if (ex1.attr1 === 1) {
        //new call when all above calls are succesfull
        //loop through each link and call the ajax and store deffered objects in array
        var table = $('#AttendenceTable_100').tableToJSON({
            allowHTML: true
        }); // Convert the table into a javascript object
        var results = [];
        for (var key in table) {
            if (table.hasOwnProperty(key)) {
                try {
                    if ($(table[key]["&nbsp;"]).attr('href') != '&nbsp;') {
                        var url = site.concat($(table[key]["&nbsp;"]).attr('href'));
                        results.push(GetClassAttendences(url));
                        console.log(url);
                    }
                } catch (e) {}
            }
        }
        var objarr = [];
        $.when.apply($, results).then(function(res) {
                for (var i = 0; i < arguments.length; i++) {
                    //here data will be extracted and stored
                    var el = document.createElement('html');
                    el.innerHTML = arguments[i][0];
                    //make object and json it and the store in local storage
                    objarr.push({
                        name: $($('table.Table.Left td', el)[3].innerHTML).html(),
                        data: arguments[i][0]
                    });

                }
                localStorage.setItem('temp_attendeces', JSON.stringify(objarr));
                final.done2 = 1;
            },
            function(res) {
                log("ERROR : One or more requests failed", "error");
            });
    } else {
        console.log("reset attr1 ");
    }
});

// Gets all the relevant data from the site 
function getsitedata() {

    ex1.attr1 = 0;
    final.done1 = 0;
    final.done2 = 0;
    console.clear();
    var one = GetExamSeatingPlanTables();
    var two = GetResultTable();
    var three = GetProvisionalResult();
    var four = GetFeeChallanTables();
    var five = GetTranscriptTables();
    var six = GetStudentProfilePhoto();
    var seven = GetAttendanceTables();
    var eight = GetHomePage();
    log("Rquests Sent", "info");
    //chaining multiple ajax calls to get all site data and then update the local storage with new data
    //the updates are done in the calls each sucessful call is handeld individually
    $.when(one, two, three, four, five, six, seven, eight).then(function(res1, res2, res3, res4, res5, res6, res7, res8) {
        //on success of all calls
        final.done1 = 1;
    }, function(res1, res2, res3, res4, res5, res6, res7, res8) {
        //on failure of any calls
        log("ERROR : One or more requests failed", "error");
    });

}


function GetHomePage() {
    return $.ajax({
        url: "http://111.68.99.8/StudentProfile/Home.aspx",
        success: function(result) {
            try {
                //document.getElementById("fack1").innerHTML = result;
                localStorage.setItem('temp_Home', result);
                log("SUCCESS : have Home.aspx", "success");
            } catch (e) {}
        }
    });

}


function GetExamSeatingPlanTables() {
    // EXAM SEATING PLAN TABLES (done)
    return $.ajax({
        url: "http://111.68.99.8/StudentProfile/ExamSeatingPlan.aspx",
        success: function(result) {
            try {
                //document.getElementById("fack1").innerHTML = result;
                localStorage.setItem('temp_ExamSeatingPlan', result);
                log("SUCCESS : have ExamSeatingPlan.aspx", "success");
            } catch (e) {}
        }
    });
}

function GetFeeChallanTables() {
    // FEE CHALLAN TABLES (done)
    return $.ajax({
        url: "http://111.68.99.8/StudentProfile/FeeChalans.aspx",
        success: function(result) {
            try {
                //document.getElementById("fack2").innerHTML = result;
                localStorage.setItem('temp_FeeChalans', result);
                log("SUCCESS : have FeeChalans.aspx", "success");
            } catch (e) {}
        }
    });
}

function GetStudentProfilePhoto() {

    // STUDENT PROFILE PHOTO (done)

    return $.ajax({
        url: "http://111.68.99.8/StudentProfile/Photo.ashx",
        dataType: "binary",
        processData: false,
        success: function(result) {
            try {
                blobToDataURL(result, function(dataurl) {
                    localStorage.setItem('temp_photo_100', dataurl);
                });
                log("SUCCESS : have Photo.aspx", "success");
            } catch (e) {}
        }
    });
}

function GetResultTable() {

    // STANDARD RESULT TABLE (done)
    return $.ajax({
        url: "http://111.68.99.8/StudentProfile/Result.aspx",
        success: function(result) {
            try {
                //document.getElementById("fack7").innerHTML = result;
                localStorage.setItem('temp_Result', result);
                log("SUCCESS : have Result.aspx", "success");
            } catch (e) {}
        }
    });
}

function GetProvisionalResult() {
    // EXAM RESULT TABLES (done) (Provisional Semester Result Notification)
    return $.ajax({
        url: "http://111.68.99.8/StudentProfile/Result_Exam.aspx",
        success: function(result) {
            try {
                //document.getElementById("fack6").innerHTML = result;
                localStorage.setItem('temp_Result_Exam', result);
                log("SUCCESS : have Result_Exam.aspx", "success");
            } catch (e) {}
        }
    });
}

function GetAttendanceTables() {
    // ATTENDENCE TABLES (in progress)

    return $.ajax({
        url: "http://111.68.99.8/StudentProfile/Registration.aspx",
        success: function(result) {
            try {
                document.getElementById("fack3").innerHTML = result;
                var Registration_tables = document.getElementsByTagName('tr');
                for (var i = 0; i < Registration_tables.length; i++) {
                    if (Registration_tables[i].innerHTML.indexOf('<th scope="col">S#</th><th scope="col">Code</th><th scope="col">Registered Course Title</th><th scope="col">Credits</th><th scope="col">Offered Course Title</th><th scope="col">Class</th><th scope="col">Teacher</th><th scope="col">Fee</th><th scope="col">&nbsp;</th>') > -1) {
                        if (Registration_tables[i].parentNode.parentNode.parentNode.parentNode.nodeName == 'FIELDSET') {
                            $(Registration_tables[i].parentNode.parentNode).attr("id", "AttendenceTable_100"); //changed id so its easier to find next time !
                            localStorage.setItem('temp_attendence100_table', Registration_tables[i].parentNode.parentNode.parentNode.parentNode.outerHTML);
                            ex1.attr1 = 1;
                            break;
                        }
                    }
                }
                localStorage.setItem('temp_Registration', result);
                log("SUCCESS : have Registration.aspx", "success");
            } catch (e) {}
        }
    });
}

function GetTranscriptTables() {
    // TRANSCRIPT TABLES (done)
    return $.ajax({
        url: "http://111.68.99.8/StudentProfile/Transcript.aspx",
        success: function(result) {
            try {
                //document.getElementById("fack5").innerHTML = result;
                //get the div which has the 'for official use only' background pic that div contains all the required tables
                localStorage.setItem('temp_Transcript', result);
                log("SUCCESS : have Transcript.aspx", "success");
            } catch (e) {}
        }
    });
}

function GetClassAttendences(urlEndpoint) {
    //only make calls but do not handle them here
    return $.ajax({
        url: urlEndpoint
    });



}


function GetPersonalInfoTables() {
    /*
    // PERSONAL INFO TABLES (may not do this since it contains personal stuff ?!)
   return $.ajax({
        url: "http://111.68.99.8/StudentProfile/PersonalInfo.aspx",
        success: function(result) {
            try {
                document.getElementById("fack4").innerHTML = result;
                var ctl00_Body_gvSP = document.getElementById('ctl00_Body_gvSP').outerHTML;
                localStorage.setItem('ctl00_Body_gvSP', ctl00_Body_gvSP);
                console.log("have PersonalInfo");
                console.log("--------------------------------------------------------");
            } catch (e) {}
        }
    });
     */
}


//calls getsitedata whenever the user logs in sucessfully to the real site
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    getsitedata();
});


// logging helper function
// url: http://stackoverflow.com/posts/25042340/revisions
function log(msg, color) {
    color = color || "black";
    bgc = "White";
    switch (color) {
        case "success":
            color = "Green";
            bgc = "LimeGreen";
            break;
        case "info":
            color = "DodgerBlue";
            bgc = "Turquoise";
            break;
        case "error":
            color = "Red";
            bgc = "Black";
            break;
        case "start":
            color = "OliveDrab";
            bgc = "PaleGreen";
            break;
        case "warning":
            color = "Tomato";
            bgc = "Black";
            break;
        case "end":
            color = "Orchid";
            bgc = "MediumVioletRed";
            break;
        default:
            color = color;
    }

    if (typeof msg == "object") {
        console.log(msg);
    } else if (typeof color == "object") {
        console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
        console.log(color);
    } else {
        console.log("%c" + msg, "color:" + color + ";font-weight:bold; display: block; background-color: " + bgc + ";");
    }
}


// url : http://stackoverflow.com/posts/30407959/revisions

// **dataurl to blob**
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}

// **blob to dataURL**
function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {
        callback(e.target.result);
    }
    a.readAsDataURL(blob);
}