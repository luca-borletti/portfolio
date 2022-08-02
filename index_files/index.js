window.onload = function() {
    const toolbelt = document.getElementById('toolbelt');
    const toolbeltg = document.getElementById('toolbeltg');
    const allElements = toolbeltg.children;

    const gPencils = document.getElementById('g_pencils');
    const pencil1 = document.getElementById('g_pencil_1');
    const pencil2 = document.getElementById('g_pencil_2');
    const blueprint = document.getElementById('g_bp');
    const hammer = document.getElementById('g_hammer');
    const wrench = document.getElementById('g_wrench');

    const schoolPath = document.getElementById('school_path');
    const workPath = document.getElementById('work_path');
    const projectsPath = document.getElementById('projects_path');
    const projectsText = document.getElementById('projects_text');
    const schoolText = document.getElementById('school_text');
    const workText = document.getElementById('work_text');
    const gProjects = document.getElementById('g_projects');
    const gSchool = document.getElementById('g_school');
    const gWork = document.getElementById('g_work');

    var schoolOn = false;

    function returnTools() {
        pencil1.classList.remove("pencil_1_active");
        pencil2.classList.remove("pencil_2_active");
        blueprint.classList.remove("blueprint_active");
        hammer.classList.remove("hammer_active");
        wrench.classList.remove("wrench_active");
        
        schoolPath.classList.remove("school_path_active");
        schoolPath.classList.add("school_path_inactive");

        workPath.classList.remove("work_path_active");
        workPath.classList.add("work_path_inactive");

        projectsPath.classList.remove("projects_path_active");
        projectsPath.classList.add("projects_path_inactive");
        
        projectsText.classList.add("projects_text_inactive");
        workText.classList.add("work_text_inactive");
        schoolText.classList.add("school_text_inactive");
    }


    gPencils.addEventListener("mouseover", () => {
        returnTools();
        gSchool.style.display = "unset";
        pencil1.classList.add("pencil_1_active");
        pencil2.classList.add("pencil_2_active");
        
        schoolPath.classList.remove("school_path_inactive");
        schoolPath.classList.add("school_path_active");

        schoolText.classList.remove("school_text_inactive");
    });

    blueprint.addEventListener("mouseover", () => {
        returnTools();
        gProjects.style.display = "unset";

        blueprint.classList.add("blueprint_active");
        
        projectsPath.classList.remove("projects_path_inactive");
        projectsPath.classList.add("projects_path_active");

        projectsText.classList.remove("projects_text_inactive");

    });

    wrench.addEventListener("mouseover", () => {
        returnTools();
        gWork.style.display = "unset";

        hammer.classList.add("hammer_active");
        wrench.classList.add("wrench_active");
        
        workPath.classList.remove("work_path_inactive");
        workPath.classList.add("work_path_active");
        
        workText.classList.remove("work_text_inactive");

    });

    hammer.addEventListener("mouseover", () => {
        returnTools();
        gWork.style.display = "unset";

        hammer.classList.add("hammer_active");
        wrench.classList.add("wrench_active");
        
        workPath.classList.remove("work_path_inactive");
        workPath.classList.add("work_path_active");

        workText.classList.remove("work_text_inactive");

    });

    // projectsText.addEventListener("mouseover", () => {

    // });

    // schoolText.addEventListener("mouseover", () => {

    // });
    
    // workText.addEventListener("mouseover", () => {

    // });
    
    
    function openSchool() {
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_pencils" || id == "g_school")) {
                elem.classList.add("invisible");
                console.log(elem);
            }
            else {

            }
        }
        schoolOn = true;
    }

    function closeSchool() {
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_pencils" || id == "g_school")) {
                elem.classList.remove("invisible");
            }
            else {

            }
        }
        schoolOn = false;
    }

    projectsText.addEventListener("click", () => {
        // one of two choices… we re-reoute to another page
        // or we erase content and move svg 
    });

    schoolText.addEventListener("click", () => {

    });
    
    workText.addEventListener("click", () => {

    });




    gPencils.addEventListener("click", () => {
        if (schoolOn) {
            closeSchool()
        }
        else {
            openSchool()
        }
    });

    blueprint.addEventListener("click", () => {

    });

    wrench.addEventListener("click", () => {

    });

    hammer.addEventListener("click", () => {

    });
    
}