window.onload = function() {
    // const toolbeltW = document.getElementById('drawing-wrapper'); 
    const toolbelt = document.getElementById('toolbelt');
    const toolbeltg = document.getElementById('toolbeltg');
    const allElements = toolbeltg.children;

    const gPencils = document.getElementById('g_pencils');
    const pencil1 = document.getElementById('g_pencil_1');
    const pencil2 = document.getElementById('g_pencil_2');
    const blueprint = document.getElementById('g_bp');
    const hammer = document.getElementById('g_hammer');
    const wrench = document.getElementById('g_wrench');
    const phone = document.getElementById('g_phone');

    const schoolPath = document.getElementById('school_path');
    const workPath = document.getElementById('work_path');
    const projectsPath = document.getElementById('projects_path');
    const contactPath = document.getElementById('contact_path');
    const projectsText = document.getElementById('projects_text');
    const schoolText = document.getElementById('school_text');
    const workText = document.getElementById('work_text');
    const contactText = document.getElementById('contact_text');
    const gProjects = document.getElementById('g_projects');
    const gSchool = document.getElementById('g_school');
    const gWork = document.getElementById('g_work');
    const gContact = document.getElementById('g_contact');

    const schoolContainer = document.getElementById('school-container');
    const workContainer = document.getElementById('work-container');
    const projectsContainer = document.getElementById('projects-container');
    const contactContainer = document.getElementById('contact-container');

    var mode = "main"; // "main" || "school" || "work" || "projects" || "contact"
    // either have a null variable or a bunch of booleans

    function animate({timing, draw, duration}) {

        let start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          // timeFraction goes from 0 to 1
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
      
          // calculate the current animation state
          let progress = timing(timeFraction);
      
          draw(progress); // draw it
      
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
      
        });
    }

    function returnTools() {
            pencil1.classList.remove("pencil_1_active");
            pencil2.classList.remove("pencil_2_active");
            blueprint.classList.remove("blueprint_active");
            hammer.classList.remove("hammer_active");
            wrench.classList.remove("wrench_active");
            phone.classList.remove("phone_active");
            
            schoolPath.classList.remove("school_path_active");
            schoolPath.classList.add("school_path_inactive");
    
            workPath.classList.remove("work_path_active");
            workPath.classList.add("work_path_inactive");
    
            projectsPath.classList.remove("projects_path_active");
            projectsPath.classList.add("projects_path_inactive");

            contactPath.classList.remove("contact_path_active");
            contactPath.classList.add("contact_path_inactive");
            
            projectsText.classList.add("projects_text_inactive");
            workText.classList.add("work_text_inactive");
            schoolText.classList.add("school_text_inactive");
            contactText.classList.add("contact_text_inactive");
    }


    function hoverSchool() {
        returnTools();
        gSchool.style.display = "unset";
        pencil1.classList.add("pencil_1_active");
        pencil2.classList.add("pencil_2_active");
        
        schoolPath.classList.remove("school_path_inactive");
        schoolPath.classList.add("school_path_active");

        schoolText.classList.remove("school_text_inactive");
    }

    gPencils.addEventListener("mouseover", () => {
        if (mode == "main") {
            hoverSchool();
        }
    });

    function hoverProjects() {
        returnTools();
        gProjects.style.display = "unset";

        blueprint.classList.add("blueprint_active");
        
        projectsPath.classList.remove("projects_path_inactive");
        projectsPath.classList.add("projects_path_active");

        projectsText.classList.remove("projects_text_inactive");
    }

    blueprint.addEventListener("mouseover", () => {
        if (mode == "main") {
            hoverProjects();
        }
    });

    function hoverWork() {
        returnTools();
        gWork.style.display = "unset";

        hammer.classList.add("hammer_active");
        wrench.classList.add("wrench_active");
        
        workPath.classList.remove("work_path_inactive");
        workPath.classList.add("work_path_active");
        
        workText.classList.remove("work_text_inactive");
    }

    wrench.addEventListener("mouseover", () => {
        if (mode == "main") {
            hoverWork();
        }

    });

    hammer.addEventListener("mouseover", () => {
        if (mode == "main") {
            hoverWork();
        }

    });

    function hoverContact() {
        returnTools();
        gContact.style.display = "unset";

        phone.classList.add("phone_active");
        
        contactPath.classList.remove("contact_path_inactive");
        contactPath.classList.add("contact_path_active");
        
        contactText.classList.remove("contact_text_inactive");
    }

    phone.addEventListener("mouseover", () => {
        if (mode == "main") {
            hoverContact();
        }
    });

    // projectsText.addEventListener("mouseover", () => {

    // });

    // schoolText.addEventListener("mouseover", () => {

    // });
    
    // workText.addEventListener("mouseover", () => {

    // });
    
    
    function openSchool() {
        schoolContainer.classList.remove("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_pencils" || id == "g_school")) {
                elem.classList.add("invisible");
            }
        }
        mode = "school";
    }

    function closeSchool() {
        schoolContainer.classList.add("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_pencils" || id == "g_school")) {
                elem.classList.remove("invisible");
            }
        }
        mode = "main";
    }

    gPencils.addEventListener("click", () => {
        if (mode == "school") {
            closeSchool()
        }
        else if (mode == "main") {
            openSchool()
        }
    });



    function openWork() {
        workContainer.classList.remove("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_hammer" || id == "g_wrench" || id == "g_work")) {
                elem.classList.add("invisible");
            }
        }
        mode = "work";
    }

    function closeWork() {
        workContainer.classList.add("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_hammer" || id == "g_wrench" || id == "g_work")) {
                elem.classList.remove("invisible");
            }
        }
        mode = "main";
    }

    wrench.addEventListener("click", () => {
        if (mode == "work") {
            closeWork()
        }
        else if (mode == "main") {
            openWork()
        }
    });

    hammer.addEventListener("click", () => {
        if (mode == "work") {
            closeWork()
        }
        else if (mode == "main") {
            openWork()
        }
    });



    function openProjects() {
        projectsContainer.classList.remove("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_bp" || id == "g_projects")) {
                elem.classList.add("invisible");
            }
        }
        mode = "projects";
    }

    function closeProjects() {
        projectsContainer.classList.add("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_bp" || id == "g_projects")) {
                elem.classList.remove("invisible");
            }
        }
        mode = "main";
    }

    blueprint.addEventListener("click", () => {
        if (mode == "projects") {
            closeProjects()
        }
        else if (mode == "main") {
            openProjects()
        }
    });
    
    riseContact = function() {
        animate({
          duration: 2000,
          timing: function(timeFraction) {
            return timeFraction;
          },
          draw: function(progress) {
            elem.style.width = progress * 100 + '%';
          }
        });
      };  

    function openContact() {
        contactContainer.classList.remove("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            // if (!(id == "g_phone" || id == "g_contact")) {
            if (!(id == "w_contact")) {
                elem.classList.add("invisible");
            }
            // else {
                // elem.style.transform = "translate( -100px, 0px);"
                // elem.classList.add("move-contact");
            // }
        }
        mode = "contact";
    }

    function closeContact() {
        contactContainer.classList.add("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "w_contact")) {
                elem.classList.remove("invisible");
            }
            // else {
            //     elem.classList.remove("move-contact");
            // }
        }
        mode = "main";
    }

    phone.addEventListener("click", () => {
        if (mode == "contact") {
            closeContact()
        }
        else if (mode == "main") {
            openContact()
        }
    });


    projectsText.addEventListener("click", () => {

    });

    schoolText.addEventListener("click", () => {

    });
    
    workText.addEventListener("click", () => {

    });
    
    toolbelt.addEventListener("mouseleave", () => {
        if (mode == "main") {
            returnTools();
        }
    });
}