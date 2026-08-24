/* =========================================================
   LOUIS PASTEUR — INTERACTIVE TIMELINE
   Vanilla JavaScript
========================================================= */


/* =========================================================
   TIMELINE DATA
   EXACTLY 14 EVENTS
========================================================= */

const timelineEvents = [

    {
        year: "1822",
        title: "Birth of Louis Pasteur",

        description:
            "On 27 December 1822, Louis Pasteur was born in Dole, France. A chemist by training, he gradually turned to the life sciences while working on fermentation. He used science to improve agriculture, combat animal and human epidemics, and refute erroneous theories.",

        significance:
            "His early scientific path eventually connected chemistry with biology and led him toward the study of fermentation, microorganisms, disease, and vaccination.",

        legacy:
            "From wine diseases to silkworm pebrine, chicken cholera, sheep anthrax, and rabies, Pasteur applied science to concrete problems affecting human and animal life.",

        source:
            "https://www.cenl.org/bicentenary-of-the-birth-of-pasteur-1822-1895/"
    },


    {
        year: "1843",
        title: "Entered the École Normale Supérieure",

        description:
            "In 1843, Louis Pasteur was admitted, through a highly competitive examination, to the École Normale Supérieure in Paris, a training school for professors of colleges. There, he specialized in physics and chemistry.",

        significance:
            "His training as a chemist gave him the scientific foundation that would later support his transition toward biological research.",

        legacy:
            "At the beginning of his scientific path, Pasteur became interested in the origins of life, laying groundwork for research that would eventually contribute to microbiology.",

        source:
            "https://www.clinicalmicrobiologyandinfection.org/article/S1198-743X(14)61355-0/fulltext"
    },


    {
        year: "1847",
        title: "Research on Molecular Asymmetry",

        description:
            "After several years of research involving crystallography, chemistry, and optics, Pasteur connected the external form of crystals with their molecular structure and their effect on polarized light.",

        significance:
            "He discovered that asymmetric crystals deflect polarized light, whereas crystals with a plane of symmetry do not. His work contributed to the development of stereochemistry, or spatial chemistry.",

        legacy:
            "His research established an important scientific principle and also contributed to the emergence of synthetic chemistry.",

        source:
            "https://www.pasteur.fr/en/about-us/early-years-1847-1862"
    },


    {
        year: "1849",
        title: "Marriage to Marie Anne Laurent",

        description:
            "On 29 May 1849, Louis Pasteur married Marie Anne Laurent in Strasbourg, Bas-Rhin, France.",

        significance:
            "Marie Anne Laurent became an important part of Pasteur's personal and family life and supported him throughout his scientific career.",

        legacy:
            "Her support remained an important part of Pasteur's life as his scientific career developed and his work became increasingly influential.",

        source:
            "https://ancestors.familysearch.org/en/LHJ6-GKJ/louis-pasteur-1822-1895"
    },


    {
        year: "1854",
        title: "Appointed Dean and Chemistry Professor at Lille",

        description:
            "In 1854, Pasteur was appointed Dean and Professor of Chemistry at Lille. While working there, he worked directly with local distilleries to solve problems involving fermentation.",

        significance:
            "His work at Lille demonstrated how academic scientific research could be applied directly to practical industrial problems.",

        legacy:
            "The experience helped move his research increasingly toward fermentation and microorganisms, areas that would become central to his scientific career.",

        source:
            "https://www.britannica.com/biography/Louis-Pasteur/Spontaneous-generation"
    },


    {
        year: "1857",
        title: "Research on Fermentation",

        description:
            "In 1857, Pasteur demonstrated that yeasts and microorganisms played an important role in fermentation and putrefaction. His research showed that fermentation was connected to living microorganisms rather than being simply a chemical process.",

        significance:
            "The findings challenged existing scientific ideas and generated significant excitement and debate within the scientific community.",

        legacy:
            "Pasteur continued entering the scientific debate over the microbial origins of fermentation, helping establish microorganisms as important agents in biological processes.",

        source:
            "https://www.britannica.com/biography/Louis-Pasteur/Spontaneous-generation"
    },


    {
        year: "1862",
        title: "Disproved Spontaneous Generation",

        description:
            "Pasteur challenged the theory of spontaneous generation through experiments involving grapes, dust contamination, and his famous swan-neck flask design.",

        significance:
            "His experiments demonstrated that microorganisms did not simply appear from non-living matter. Instead, microorganisms came from contamination by pre-existing microorganisms in the environment.",

        legacy:
            "These experiments became an important foundation for modern microbiology and strengthened the scientific importance of microorganisms in research and medicine.",

        source:
            "https://www.britannica.com/biography/Louis-Pasteur/Spontaneous-generation"
    },


    {
        year: "1865",
        title: "Pasteurization and Wine Research",

        description:
            "In 1865, Pasteur realized that diseases affecting wine were caused by unwanted microorganisms. He discovered that these microorganisms could be destroyed by heating wine to temperatures between approximately 60°C and 100°C.",

        significance:
            "The heating process later became known as pasteurization. It provided a practical way of controlling microorganisms in perishable substances.",

        legacy:
            "The technique was eventually extended to other perishable substances, including milk, helping make food and beverages safer.",

        source:
            "https://www.sciencehistory.org/education/scientific-biographies/louis-pasteur/"
    },


    {
        year: "1868",
        title: "Stroke During His Silkworm Research",

        description:
            "In 1868, while conducting his research on silkworm diseases, Pasteur suffered a stroke that partially paralyzed his left side. Despite this major physical setback, he continued his scientific work.",

        significance:
            "His continued research demonstrated his determination to pursue scientific problems despite a serious personal health setback.",

        legacy:
            "Soon afterward, France experienced major political upheaval. Despite the circumstances, Pasteur continued his work and successfully concluded negotiations that he had begun with the former emperor.",

        source:
            "https://www.sciencehistory.org/education/scientific-biographies/louis-pasteur/"
    },
    {
        year: "1881",
        title: "Anthrax Vaccine",

        description:
            "In 1881, Louis Pasteur developed a vaccine against anthrax, a serious disease that affected farm animals such as sheep and cattle. He used a weakened form of the microorganism that caused the disease so that the animals could develop protection against it.",

        significance:
            "His famous experiment at Pouilly-le-Fort demonstrated that vaccinated sheep survived exposure to anthrax while the unvaccinated group did not.",

        legacy:
            "The experiment became an important milestone in the development of modern vaccines and demonstrated the practical power of preventive immunization.",

        source:
            "https://www.pasteur.fr/en/about-us/our-dna/discoveries"
    },


    {
        year: "1885",
        title: "First Human Rabies Vaccination",

        description:
            "In 1885, Pasteur successfully used his rabies treatment on Joseph Meister, a nine-year-old boy who had been bitten by a rabid dog. Joseph received the treatment over several days and did not develop rabies.",

        significance:
            "Joseph Meister became the first human successfully treated with Pasteur's rabies vaccine.",

        legacy:
            "The achievement made Pasteur internationally famous and demonstrated the potential of vaccination to protect humans from deadly diseases.",

        source:
            "https://www.pasteur.fr/en/about-us/our-dna/discoveries"
    },


    {
        year: "1888",
        title: "Institut Pasteur",

        description:
            "In 1888, the Institut Pasteur officially opened in Paris. It was created partly because people from France and other countries came to Pasteur seeking rabies treatment following his successful work in 1885.",

        significance:
            "The institute became a center for scientific research, vaccination, teaching, and infectious disease research.",

        legacy:
            "The Institut Pasteur continues to be an important scientific and medical research institution today.",

        source:
            "https://www.pasteur.fr/en/about-us/our-dna/discoveries"
    },


    {
        year: "1895",
        title: "Death and Legacy",

        description:
            "On the morning of 28 September 1895, Louis Pasteur died at his residence in Villeneuve-l'Étang, near Paris, at the age of 72.",

        significance:
            "His death marked the end of the life of one of the most influential scientists in microbiology.",

        legacy:
            "His work transformed scientific understanding of microorganisms, fermentation, infectious disease, vaccination, and immunity. His influence continues through modern microbiology, medicine, vaccination, food safety, and infectious disease research.",

        source:
            "https://thisdayinhistory.ai/event/death-of-louis-pasteur.787667"
    }

];


/* =========================================================
   IMPORTANT VALIDATION
   Ensures the project never accidentally contains a
   different number of main timeline events.
========================================================= */

if (timelineEvents.length !== 14) {
    console.error(
        `Timeline error: expected exactly 14 events, found ${timelineEvents.length}.`
    );
}


/* =========================================================
   DOM ELEMENTS
========================================================= */

const timelineContainer =
    document.getElementById("timelineContainer");

const eventCard =
    document.getElementById("eventCard");

const eventNumber =
    document.getElementById("eventNumber");

const eventYear =
    document.getElementById("eventYear");

const eventTitle =
    document.getElementById("eventTitle");

const eventDescription =
    document.getElementById("eventDescription");

const eventSignificance =
    document.getElementById("eventSignificance");

const eventLegacy =
    document.getElementById("eventLegacy");

const sourceButton =
    document.getElementById("sourceButton");

const progressYear =
    document.getElementById("progressYear");

const progressFill =
    document.getElementById("progressFill");

const timelineLineProgress =
    document.getElementById("timelineLineProgress");

const navbar =
    document.getElementById("navbar");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


/* =========================================================
   CURRENT EVENT
========================================================= */

let currentEventIndex = 0;


/* =========================================================
   GENERATE TIMELINE
========================================================= */

function createTimeline() {

    /*
        Remove any previously generated events while keeping
        the timeline line.
    */

    const existingEvents =
        timelineContainer.querySelectorAll(".timeline-event");

    existingEvents.forEach(event => event.remove());


    timelineEvents.forEach((event, index) => {

        const eventElement =
            document.createElement("button");

        eventElement.type = "button";

        eventElement.className = "timeline-event";

        eventElement.setAttribute(
            "role",
            "tab"
        );

        eventElement.setAttribute(
            "aria-selected",
            index === 0 ? "true" : "false"
        );

        eventElement.setAttribute(
            "aria-label",
            `${event.year}: ${event.title}`
        );

        eventElement.setAttribute(
            "tabindex",
            index === 0 ? "0" : "-1"
        );


        eventElement.innerHTML = `
            <span class="timeline-node" aria-hidden="true"></span>

            <span class="timeline-year">
                ${event.year}
            </span>

            <span class="timeline-title">
                ${getShortTitle(event.title)}
            </span>
        `;


        eventElement.addEventListener(
            "click",
            () => selectEvent(index)
        );


        /*
            Keyboard support:
            Arrow keys move between timeline events.
        */

        eventElement.addEventListener(
            "keydown",
            handleTimelineKeyboard
        );


        timelineContainer.appendChild(eventElement);

    });


    updateTimelineVisuals();
}


/* =========================================================
   SHORT TITLES
========================================================= */

function getShortTitle(title) {

    const shortTitles = {

        "Birth of Louis Pasteur":
            "Birth",

        "Entered the École Normale Supérieure":
            "École Normale",

        "Research on Molecular Asymmetry":
            "Molecular Asymmetry",

        "Marriage to Marie Anne Laurent":
            "Marriage",

        "Appointed Dean and Chemistry Professor at Lille":
            "Lille",

        "Research on Fermentation":
            "Fermentation",

        "Disproved Spontaneous Generation":
            "Spontaneous Generation",

        "Pasteurization and Wine Research":
            "Pasteurization",

        "Stroke During His Silkworm Research":
            "Stroke",

        "Continued Scientific Work Despite Political Upheaval":
            "Persistence",

        "Anthrax Vaccine":
            "Anthrax Vaccine",

        "First Human Rabies Vaccination":
            "Rabies",

        "Institut Pasteur":
            "Institut Pasteur",

        "Death and Legacy":
            "Legacy"

    };

    return shortTitles[title] || title;
}


/* =========================================================
   SELECT EVENT
========================================================= */

function selectEvent(index, shouldScroll = false) {

    if (
        index < 0 ||
        index >= timelineEvents.length
    ) {
        return;
    }


    const changed =
        currentEventIndex !== index;


    currentEventIndex = index;


    /*
        Update event card.
        If the selected event is different, use a subtle
        fade transition.
    */

    if (changed) {

        eventCard.classList.add("changing");

        setTimeout(() => {

            updateEventCard(index);

            eventCard.classList.remove("changing");

        }, 180);

    } else {

        updateEventCard(index);

    }


    updateTimelineVisuals();


    if (shouldScroll) {

        const selectedEvent =
            timelineContainer.querySelectorAll(
                ".timeline-event"
            )[index];

        if (selectedEvent) {

            selectedEvent.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });

        }

    }

}


/* =========================================================
   UPDATE EVENT CARD
========================================================= */

function updateEventCard(index) {

    const event =
        timelineEvents[index];


    eventNumber.textContent =
        String(index + 1).padStart(2, "0");

    eventYear.textContent =
        event.year;

    eventTitle.textContent =
        event.title;

    eventDescription.textContent =
        event.description;

    eventSignificance.textContent =
        event.significance;

    eventLegacy.textContent =
        event.legacy;


    /*
        Important:
        The source is inserted directly into the anchor's
        href. It opens in a new tab through the HTML
        target="_blank" and rel attributes.
    */

    sourceButton.href =
        event.source;


    progressYear.textContent =
        event.year;
}


/* =========================================================
   UPDATE TIMELINE VISUALS
========================================================= */

function updateTimelineVisuals() {

    const events =
        timelineContainer.querySelectorAll(
            ".timeline-event"
        );


    events.forEach((eventElement, index) => {

        const isActive =
            index === currentEventIndex;

        eventElement.classList.toggle(
            "active",
            isActive
        );

        eventElement.setAttribute(
            "aria-selected",
            isActive ? "true" : "false"
        );

        eventElement.setAttribute(
            "tabindex",
            isActive ? "0" : "-1"
        );

    });


    /*
        Calculate progress.

        First event = 0%
        Last event = 100%
    */

    const progress =
        timelineEvents.length <= 1
            ? 0
            : (currentEventIndex /
                (timelineEvents.length - 1)) * 100;


    progressFill.style.width =
        `${progress}%`;


    /*
        Desktop:
        horizontal progress line.

        Mobile:
        vertical progress line.
    */

    if (window.innerWidth <= 700) {

        timelineLineProgress.style.width = "100%";
        timelineLineProgress.style.height = `${progress}%`;

    } else {

        timelineLineProgress.style.height = "100%";
        timelineLineProgress.style.width = `${progress}%`;

    }

}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

function handleTimelineKeyboard(event) {

    let nextIndex =
        currentEventIndex;


    switch (event.key) {

        case "ArrowRight":
        case "ArrowDown":

            nextIndex =
                Math.min(
                    currentEventIndex + 1,
                    timelineEvents.length - 1
                );

            break;


        case "ArrowLeft":
        case "ArrowUp":

            nextIndex =
                Math.max(
                    currentEventIndex - 1,
                    0
                );

            break;


        case "Home":

            nextIndex = 0;

            break;


        case "End":

            nextIndex =
                timelineEvents.length - 1;

            break;


        default:
            return;
    }


    event.preventDefault();


    selectEvent(
        nextIndex,
        true
    );


    const timelineButtons =
        timelineContainer.querySelectorAll(
            ".timeline-event"
        );


    if (timelineButtons[nextIndex]) {

        timelineButtons[nextIndex].focus();

    }

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

function updateNavbar() {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const isOpen =
        mobileMenu.classList.toggle("open");

    mobileMenuButton.classList.toggle(
        "active",
        isOpen
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

}


mobileMenuButton.addEventListener(
    "click",
    toggleMobileMenu
);


/*
    Close mobile menu when a navigation item is selected.
*/

mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove("open");

                mobileMenuButton.classList.remove(
                    "active"
                );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(element)
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a, .mobile-menu a"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const sectionId =
                    entry.target.id;


                navigationLinks.forEach(link => {

                    const matches =
                        link.getAttribute("href") ===
                        `#${sectionId}`;

                    link.classList.toggle(
                        "active",
                        matches
                    );

                });

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(
    section =>
        sectionObserver.observe(section)
);


/* =========================================================
   RESIZE HANDLER
========================================================= */

window.addEventListener(
    "resize",
    updateTimelineVisuals
);


/* =========================================================
   INITIALIZATION
========================================================= */

createTimeline();

updateEventCard(0);

updateNavbar();

updateTimelineVisuals();
