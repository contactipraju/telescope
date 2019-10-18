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
      { text: "Updates"},
      { text: "News & Events"},
      { text: "Radio", children: [{ text: "Recent episodes"}, { text: "What's coming"}, { text: "Archives"}]}
    ],
    newsletter: [
      { text: "This Month", children: [
        { text: "Current Affairs" },
        { text: "Physics" },
        { text: "Astronomy" },
        { text: "History" },
        { text: "Biology" },
        { text: "Chemistry" },
        { text: "Philosophy" },
        { text: "Person" },
        { text: "Quotes" },
        { text: "Law and Constitution" },
        { text: "PseudoScience/Superstition/Hoaxes" }
      ]},
      { text: "Last Month" },
      { text: "Archives"},
      { text: "Subscribe for Email Newsletter"}
    ],
    qanda: [
      { text: "Physics"},
      { text: "Chemistry"},
      { text: "Botany"}
    ],
    events: [
    ],
    archives: [
      { text: "On Telugu Radio", children: [{ text: "Tori - Science Hour"}, { text: "Tori - Humanist Hour"}, { text: "YouTube - Manavavaani"}]},
      { text: "Visual Media",  children: [{ text: "Debates"}, { text: "Speeches"}, { text: "Interviews"}]},
      { text: "Major Events", children: [
        { text: "Selfie with Ghost"},
        { text: "SAHA and SfS Launch at NSW Parliament House, Sydney"},
        { text: "Babu Gogineni's Keynote at Humanist House, for NSW Humanists"},
        { text: "Why I'm a Humanist"},
        { text: "Humanist Cartoon Competition"},
        { text: "Ride for Reason"}
      ]}
    ],
    resources: [
      { text: "Reading", children: [
        { text: "Books"},
        { text: "PDFs"},
        { text: "Blogs"},
        { text: "Websites"},
        { text: "Nobel Laureates", link: "resources/nobels"}
      ]},
      { text: "Infotainment", children: [{ text: "Documentaries"}, { text: "Feature Films"}, { text: "The Big Question with BG"}]},
      { text: "Resources",    children: [{ text: "Social Media"}, { text: "Glossary"}]}
    ],
    team: [
      { text: "Science for Society (SfS)"},
      { text: "South Asian Humanist Association (SAHA)"},
      { text: "Jana Vignaana Vedika"},
      { text: "Rationalist Forum"},
      { text: "NSW Humanists" }
    ]
  };

  constructor() {
  }

  ngOnInit() {
    //console.log("ToImplementComponent - ngOnInit: ", this.page);
  }
}
