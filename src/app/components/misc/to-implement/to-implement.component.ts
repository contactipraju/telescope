import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-implement',
  templateUrl: './to-implement.component.html',
  styleUrls: ['./to-implement.component.scss']
})
export class ToImplementComponent implements OnInit {
  @Input() page: string;

  toImplement = {
    home: [
      { text: "New Posts" },
      { text: "Activity Log" },
      { text: "Current Affairs" },
      { text: "Upcoming Events" },
      { text: "Recent Events" }
    ],
    newsletter: [
      { text: "This Month" },
      { text: "Archives", children: [
        { text: "October 2019" },
        { text: "September 2019" },
        { text: "August 2019" },
        { text: "July 2019" },
        { text: "June 2019" },
        { text: "May 2019" },
        { text: "April 2019" },
        { text: "March 2019" },
        { text: "February 2019" },
        { text: "January 2019" },
        { text: "Older...", children: [
          { text: "2018" },
          { text: "2017" }
        ]}
      ]}
    ],
    qanda: [
      { text: "General Science", children: [
        { text: "Astronomy" },
        { text: "Physics" },
        { text: "Chemistry" },
        { text: "Geography" },
        { text: "Geology" },
        { text: "Psychology" }
      ]},
      { text: "Life Sciences", children: [
        { text: "Biology" },
        { text: "Botany" },
        { text: "Zoology" }
      ]},
      { text: "Social Sciences", children: [
        { text: "History" },
        { text: "Economics" },
        { text: "Politics" },
        { text: "Socialogy" },
        { text: "Economics" },
        { text: "Law and Constitution" }
      ]},
      { text: "Misc", children: [
        { text: "Culture" },
        { text: "Languages" },
        { text: "Literature" },
        { text: "Philosophy" },
        { text: "People" },
        { text: "Events" },
        { text: "Quotes" }
      ]},
      { text: "Non-Science (Non-sense)", children: [
        { text: "PseudoScience" },
        { text: "Superstition" },
        { text: "Myth" },
        { text: "Hoax" },
        { text: "Quakery" }
      ]}
    ],
    events: [
    ],
    archives: [
      { text: "On Telugu Radio", children: [
        { text: "Tori - Science Hour" },
        { text: "Tori - Humanist Hour" },
        { text: "YouTube - Manavavaani" },
        { text: "YouTube - Vignaanavaani" },
        { text: "What's coming..." }
      ]},
      { text: "Visual Media", children: [
        { text: "Debates" },
        { text: "Speeches" },
        { text: "Interviews" }
      ]},
      { text: "Major Events", children: [
        { text: "Selfie with Ghost" },
        { text: "SAHA and SfS Launch at NSW Parliament House, Sydney" },
        { text: "Babu Gogineni's Keynote at Humanist House, for NSW Humanists" },
        { text: "Why I'm a Humanist" },
        { text: "Humanist Cartoon Competition" },
        { text: "Ride for Reason" }
      ]}
    ],
    resources: [
      { text: "Reading", children: [
        { text: "Books" },
        { text: "PDFs" },
        { text: "Blogs" },
        { text: "Websites" },
        { text: "Nobel Laureates", link: "resources/nobels" }
      ]},
      { text: "Infotainment", children: [
        { text: "Documentaries" },
        { text: "Feature Films" },
        { text: "The Big Question with BG" }
      ]},
      { text: "Resources", children: [
        { text: "Social Media" },
        { text: "Glossary" }
      ]},
      { text: "మంచి", children: [
        { text: "పుస్తకం" },
        { text: "కవిత" },
        { text: "సినిమా" },
        { text: "పాట" },
        { text: "ప్రయత్నం" }
      ]}
    ],
    team: [
      { text: "Science for Society (SfS)" },
      { text: "South Asian Humanist Association (SAHA)" },
      { text: "Jana Vignaana Vedika" },
      { text: "Rationalist Forum" },
      { text: "Indian Humanists" },
      { text: "NSW Humanists" }
    ]
  };

  constructor() {
  }

  ngOnInit() {
    //console.log("ToImplementComponent - ngOnInit: ", this.page);
  }
}
