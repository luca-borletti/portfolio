window.onload = function() {
    const lLetter = document.getElementById('L-letter'); 
    const uLetter = document.getElementById('U-letter'); 
    const cLetter = document.getElementById('C-letter'); 
    const aLetter = document.getElementById('A-letter'); 
    const borletti = document.getElementById('BORLETTI'); 
    const name = document.getElementById('name'); 
    const navbar = document.getElementById('header'); 

    const poundLogo = document.getElementById('pound-symbol'); 
    const pTopRight = document.getElementById('w_top_right'); 
    const pRight = document.getElementById('w_right'); 
    const pBottom = document.getElementById('w_bottom'); 
    const pLeft = document.getElementById('w_left'); 
    const pTopLeft = document.getElementById('w_top_left');  

    const toolbelt = document.getElementById('toolbelt');
    const toolbeltg = document.getElementById('toolbeltg');
    const allElements = toolbeltg.children;

    const gPencils = document.getElementById('g_pencils');
    const pencil1 = document.getElementById('w_pencil_1');
    const pencil2 = document.getElementById('w_pencil_2');
    const blueprint = document.getElementById('w_bp');
    const hammer = document.getElementById('w_hammer');
    const wrench = document.getElementById('w_wrench');
    const phone = document.getElementById('w_phone');

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

    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');

    const clickshare = document.getElementById('projects-clickshare');
    const xylo = document.getElementById('projects-xylo');
    const studynet = document.getElementById('projects-studynet');
    const pointandprove = document.getElementById('projects-pointandprove');

    const goHomeBtn = document.getElementById('gohome');

    let ageEl = document.getElementById("age");

    if (ageEl) {
        setInterval(() => {
            let time = dayjs().diff(dayjs('2003-03-28'), 'year', true);
            ageEl.innerText = time.toString().substring(0, 12);
        }, 50);
    }
    
    var hasHovered = false;

    var hover = "main";

    var mode = "main"; // "main" || "school" || "work" || "projects" || "contact"
    // either have a null variable or a bunch of booleans

    var poundOn = true;
    
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
      
    function smoothScroll(object){
        object.scrollIntoView({
            behavior: 'smooth'
        });
    }

    poundLogo.addEventListener("click", () => {
        if (poundOn) {
            pTopRight.classList.add("move-left");
            pLeft.classList.add("move-left")
            poundOn = false;
        }
        else {
            pTopRight.classList.remove("move-left");
            pLeft.classList.remove("move-left")
            poundOn = true;
        }
    });

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

            gSchool.style.display = "none";
            gWork.style.display = "none";
            gProjects.style.display = "none";
            gContact.style.display = "none";
    }

    function hoverSchool() {
        hover = "school";
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
            stopLoop();
            hoverSchool();
        }
    });

    function hoverProjects() {
        hover = "projects";
        returnTools();
        gProjects.style.display = "unset";

        blueprint.classList.add("blueprint_active");
        
        projectsPath.classList.remove("projects_path_inactive");
        projectsPath.classList.add("projects_path_active");

        projectsText.classList.remove("projects_text_inactive");
    }

    blueprint.addEventListener("mouseover", () => {
        if (mode == "main") {
            stopLoop();
            hoverProjects();
        }
    });

    function hoverWork() {
        hover = "work";
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
            stopLoop();
            hoverWork();
        }

    });

    hammer.addEventListener("mouseover", () => {
        if (mode == "main") {
            stopLoop();
            hoverWork();
        }

    });

    function hoverContact() {
        hover = "contact";
        returnTools();
        gContact.style.display = "unset";

        phone.classList.add("phone_active");
        
        contactPath.classList.remove("contact_path_inactive");
        contactPath.classList.add("contact_path_active");
        
        contactText.classList.remove("contact_text_inactive");
    }

    phone.addEventListener("mouseover", () => {
        if (mode == "main") {
            stopLoop();
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
        goHomeBtn.classList.remove("home-btn-off");
        delay(1000).then(() => toolbelt.classList.add('scale-belt-school'));
        schoolContainer.classList.remove("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_pencils" || id == "g_school")) {
                elem.classList.add("invisible");
            }
            // else {
            //     elem.classList.add("onTop");
            // }
        }
        mode = "school";
        delay(200).then(() => smoothScroll(schoolContainer));
    }

    function closeSchool() {
        goHomeBtn.classList.add("home-btn-off");
        toolbelt.classList.remove('scale-belt-school');
        schoolContainer.classList.add("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "g_pencils" || id == "g_school")) {
                elem.classList.remove("invisible");
            }
            // else {
            //     elem.classList.remove("onTop");
            // }
        }
        mode = "main";
    }

    // gPencils.addEventListener("touchend", () => {
    //     if (mode == "school") {
    //         closeSchool()
    //     }
    //     else if (mode == "main") {
    //         openSchool()
    //     }
    // });

    // gSchool.addEventListener("touchend", () => {
    //     if (mode == "school") {
    //         closeSchool()
    //     }
    //     else if (mode == "main" && hover == "school") {
    //         openSchool()
    //     }
    // });

    gPencils.addEventListener("click", () => {
        if (mode == "school") {
            closeSchool()
        }
        else if (mode == "main") {
            openSchool()
        }
    });

    gSchool.addEventListener("click", () => {
        if (mode == "school") {
            closeSchool()
        }
        else if (mode == "main" && hover == "school") {
            openSchool()
        }
    });



    function openWork() {
        goHomeBtn.classList.remove("home-btn-off");
        delay(1000).then(() => toolbelt.classList.add('scale-belt-work'));
        workContainer.classList.remove("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "w_hammer" || id == "w_wrench" || id == "g_work")) {
                elem.classList.add("invisible");
            }
        }
        mode = "work";
        delay(200).then(() => smoothScroll(workContainer));
    }

    function closeWork() {
        goHomeBtn.classList.add("home-btn-off");
        toolbelt.classList.remove('scale-belt-work');
        workContainer.classList.add("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "w_hammer" || id == "w_wrench" || id == "g_work")) {
                elem.classList.remove("invisible");
            }
        }
        mode = "main";
    }

    // wrench.addEventListener("touchend", () => {
    //     if (mode == "work") {
    //         closeWork()
    //     }
    //     else if (mode == "main") {
    //         openWork()
    //     }
    // });
    // hammer.addEventListener("touchend", () => {
    //     if (mode == "work") {
    //         closeWork()
    //     }
    //     else if (mode == "main") {
    //         openWork()
    //     }
    // });
    // gWork.addEventListener("touchend", () => {
    //     if (mode == "work") {
    //         closeWork()
    //     }
    //     else if (mode == "main" && hover == "work") {
    //         openWork()
    //     }
    // });
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
    gWork.addEventListener("click", () => {
        if (mode == "work") {
            closeWork()
        }
        else if (mode == "main" && hover == "work") {
            openWork()
        }
    });



    function openProjects() {
        goHomeBtn.classList.remove("home-btn-off");
        delay(1000).then(() => toolbelt.classList.add('scale-belt-projects'));
        projectsContainer.classList.remove("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "w_bp" || id == "g_projects")) {
                elem.classList.add("invisible");
            }
        }
        mode = "projects";
        delay(200).then(() => smoothScroll(projectsContainer));
    }

    function closeProjects() {
        goHomeBtn.classList.add("home-btn-off");
        toolbelt.classList.remove('scale-belt-projects');
        projectsContainer.classList.add("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "w_bp" || id == "g_projects")) {
                elem.classList.remove("invisible");
            }
        }
        mode = "main";
    }

    // blueprint.addEventListener("touchend", () => {
    //     if (mode == "projects") {
    //         closeProjects()
    //     }
    //     else if (mode == "main") {
    //         openProjects()
    //     }
    // });
    
    // gProjects.addEventListener("touchend", () => {
    //     if (mode == "projects") {
    //         closeProjects()
    //     }
    //     else if (mode == "main" && hover == "projects") {
    //         openProjects()
    //     }
    // });
    blueprint.addEventListener("click", () => {
        if (mode == "projects") {
            closeProjects()
        }
        else if (mode == "main") {
            openProjects()
        }
    });
    
    gProjects.addEventListener("click", () => {
        if (mode == "projects") {
            closeProjects()
        }
        else if (mode == "main" && hover == "projects") {
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
        goHomeBtn.classList.remove("home-btn-off");
        delay(1000).then(() => toolbelt.classList.add('scale-belt-contact'));
        contactContainer.classList.remove("container-off");
        for (const elem of allElements) {
            const id = elem.id;
            if (!(id == "w_contact")) {
                elem.classList.add("invisible");
            }
            // else {
                // elem.style.transform = "translate( -100px, 0px);"
                // elem.classList.add("move-contact");
            // }
        }
        mode = "contact";
        
        delay(200).then(() => smoothScroll(contactContainer));
        // delay(600).then(() => borletti.style.color = "white");
        // delay(600).then(() => navbar.style.backgroundColor = "white");
    }

    function closeContact() {
        goHomeBtn.classList.add("home-btn-off");
        toolbelt.classList.remove('scale-belt-contact');
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

    // phone.addEventListener("touchend", () => {
    //     if (mode == "contact") {
    //         closeContact()
    //     }
    //     else if (mode == "main") {
    //         openContact()
    //     }
    // });
    
    // gContact.addEventListener("touchend", () => {
    //     if (mode == "contact") {
    //         closeContact()
    //     }
    //     else if (mode == "main" && hover == "contact") {
    //         openContact()
    //     }
    // });
    phone.addEventListener("click", () => {
        if (mode == "contact") {
            closeContact()
        }
        else if (mode == "main") {
            openContact()
        }
    });
    
    gContact.addEventListener("click", () => {
        if (mode == "contact") {
            closeContact()
        }
        else if (mode == "main" && hover == "contact") {
            openContact()
        }
    });
    
    toolbelt.addEventListener("mouseleave", () => {
        if (mode == "main") {
            hover = "";
            returnTools();
        }
    });
    

    // time stuff



    toolLoopIdx = 0;
    toolLoopList = [hoverSchool, hoverProjects, hoverWork, hoverContact];
    
    var loopTools = window.setInterval(loopCallback, 2500);

    // var loopTools;

    // var loopToolsFunc = delay(5000).then(() => loopTools = window.setInterval(loopCallback, 1000));

    // loopToolsFunc();

    function loopCallback() {
        toolLoopList[toolLoopIdx]();
        toolLoopIdx = (toolLoopIdx + 1) % 4;
    }
    
    function stopLoop () {
        if (!hasHovered) {
            window.clearInterval(loopTools);
        }
        hasHovered = true;
    }

    xylo.addEventListener("click", () => {
        window.open("https://www.youtube.com/watch?v=XMbejw6Zr9w&feature=youtu.be&ab_channel=LucaBorletti", '_blank').focus();
    });

    studynet.addEventListener("click", () => {
        window.open("https://devpost.com/software/studynet", '_blank').focus();
    });
    
    clickshare.addEventListener("click", () => {
        window.open("https://www.youtube.com/watch?v=TBaPf3226Hs&ab_channel=Jack", '_blank').focus();
    });
    
    pointandprove.addEventListener("click", () => {
        window.open("http://www.pointandprove.com/", '_blank').focus();
    });

    linkedin.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/lucaborletti/", '_blank').focus();
    });

    github.addEventListener("click", () => {
        window.open("https://github.com/luca-borletti", '_blank').focus();
    });

    goHomeBtn.addEventListener("click", () => {
        goHome();
    });

    name.addEventListener("click", () => {
        goHome();
    });

    function goHome() {
        switch (mode) {
            // case 'main'
            case 'school':
                closeSchool();
            case 'work':
                closeWork();
            case 'projects':
                closeProjects();
            case 'contact':
                closeContact();
            // case 
            // default:
        }
    }

    // toolbelt.addEventListener("mouseenter", () => {
    //     hasHovered = true;
    //     window.clearInterval(loopTools);
    //     // window.clearInterval(loopToolsFunc);
    // });

    // var placeholderForMobile = true;

    // if (placeholderForMobile) {
    //     while (mode == "main") {
            
    //     }
    // }
}