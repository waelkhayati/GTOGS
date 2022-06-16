var counter=1;
function add_experience(){
    counter+=1

$("#experience").append(
    '<div class="card mt-3" id="experience'+counter+'">\
    <div class="card-header">\
        <div class="row">\
            <div class="col-12">\
                <h5>Job title</h5>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-10">\
                <input type="text" class="form-control">\
            </div>\
            <div class="col-2">\
                 <button id="deleteexperience" type="button" id="toggle" onclick="delete_experience()"class="btn btn-dark">delete</button>\
            </div>\
        </div>\
    </div>\
    <div class="card-body" >\
        <div>\
            <div class="row">\
                <div class="col-3">\
                    <label for=" startdate">Start Date</label>\
                    <input id="startdate" type="date" class="form-control">\
                </div>\
                <div class="col-3">\
                    <label for=" enddate">End Date</label>\
                    <input id="enddate" type="date" class="form-control">\
                </div>\
                <div class="col-6">\
                    <label for="company">Company</label>\
                    <input id="company" type="text" class="form-control">\
                </div>\
            </div>\
            <div class="row mt-3">\
                <div class="col-12">\
                    <label for="jobdescription">Description</label>\
                    <textarea class="form-control" name="job_description" id="jobdescription" rows="4" rows="2" maxlength="150"></textarea>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>'
);

}


function delete_experience(){
    counter-=1
    var elem = document.getElementById('deleteexperience');
    elem.parentElement.parentElement.parentElement.parentElement.remove();
}


function add_education(){
    counter+=1

$("#education").append(
'<div class="card mt-3" id="education'+counter+'">\
    <div class="card-header">\
        <div class="row">\
            <div class="col-12">\
                <h5>Academic Degree</h5>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-10">\
                <input type="text" class="form-control">\
            </div>\
            <div class="col-2">\
                 <button id="deleteeducation" type="button" id="toggle" onclick="delete_education()"class="btn btn-dark">delete</button>\
            </div>\
        </div>\
    </div>\
    <div class="card-body" >\
        <div>\
            <div class="row">\
                <div class="col-3">\
                    <label for=" startdate">Start Date</label>\
                    <input id="startdate" type="date" class="form-control">\
                </div>\
                <div class="col-3">\
                    <label for=" enddate">End Date</label>\
                    <input id="enddate" type="date" class="form-control">\
                </div>\
                <div class="col-6">\
                    <label for="university">University</label>\
                    <input id="university" type="text" class="form-control">\
                </div>\
            </div>\
            <div class="row mt-3">\
                <div class="col-12">\
                    <label for="educationdescription">Description</label>\
                    <textarea class="form-control" name="education_description" id="educationdescription" rows="2" maxlength="150"></textarea>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>'
);


}

function delete_education(){
    counter-=1
    var elem = document.getElementById('deleteeducation');
    elem.parentElement.parentElement.parentElement.parentElement.remove();
}


function add_skill(){
    counter+=1

$("#skill").append(
'<div class="card mt-2" id="skills'+counter+'">\
    <div class="card-body">\
        <div class="row">\
            <div class="col-12">\
                <h5>Skill</h5>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-6">\
                <input type="text" class="form-control">\
            </div>\
            <div class="col-4">\
                <select class="form-control form-select" aria-label="Default select example">\
                    <option selected disabled>Level</option>\
                    <option value="Novice">Novice</option>\
                    <option value="Beginner">Beginner</option>\
                    <option value="Skillful">Skillful</option>\
                    <option value="Experienced">Experienced</option>\
                    <option value="Expert">Expert</option>\
                </select>\
            </div>\
            <div class="col-2">\
                 <button id="deleteskill" type="button" id="toggle" onclick="delete_skill()"class="btn btn-dark">delete</button>\
            </div>\
        </div>\
    </div>\
</div>'
);

}

function delete_skill(){
    counter-=1
    var elem = document.getElementById('deleteskill');
    elem.parentElement.parentElement.parentElement.parentElement.remove();
}


function add_lang(){
    counter+=1

$("#languages").append(
'<div class="card mt-2" id="lang1">\
    <div class="card-body">\
        <div class="row">\
            <div class="col-12">\
                <h5>Language</h5>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-6">\
                <input type="text" class="form-control">\
            </div>\
            <div class="col-4">\
                <select class="form-control form-select" aria-label="Default select example">\
                    <option selected disabled>Level</option>\
                    <option value="Novice">Elementary</option>\
                    <option value="Beginner">Limited Working</option>\
                    <option value="Skillful">Professional Working</option>\
                    <option value="Experienced">Full Professional</option>\
                    <option value="Expert">Native/Bilingual</option>\
                </select>\
            </div>\
            <div class="col-2">\
                <button id="deletelang" type="button" id="toggle" onclick="delete_lang()"class="btn btn-dark">delete</button>\
            </div>\
        </div>\
    </div>\
</div>'
);

}


function delete_lang(){
    counter-=1
    var elem = document.getElementById('deletelang');
    elem.parentElement.parentElement.parentElement.parentElement.remove();
}
