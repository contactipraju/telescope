export class Filter {
  born: Date;
  died: string;
  bornCountry: string;
  bornCountryCode: string;
  bornCity: string;
  diedCountry: string;
  diedCountryCode: string;
  diedCity: string;

  gender: object;

  year: number;
  category: string;
  share: number;

  name: string;
  city: string;
  country: string;

  area: string;
  sortOn: any;

  constructor() {
    this.DefaultValues();
  }

  Reset() {
    this.DefaultValues();
  }

  DefaultValues() {
    this.born = null;
    this.died = null;
    this.bornCountry = null;
    this.bornCountryCode = null;
    this.bornCity = null;
    this.diedCountry = null;
    this.diedCountryCode = null;
    this.diedCity = null;

    // Show all genders by default
    this.gender = {
      male: false,
      female: false,
      org: false
    };
  
    this.year = null;
    this.category = null;
    this.share = null;
  
    this.name = null;
    this.city = null;
    this.country = null;

    this.area = '';

    // make the Year Awarded as the default sorting order
    this.sortOn = this.allOptions().sortOn.year;
  }

  allOptions() {
    return {
      name:    { id: 'name',    label: 'Name',             image: 'nobel-firstname' },
      born:    { id: 'born',    label: 'Born between',     image: 'nobel-dob' },
      died:    { id: 'died',    label: 'Died between',     image: 'nobel-dod' },
      awarded: { id: 'awarded', label: 'Awarded in',       image: 'nobel-awarded' },
      count:   { id: 'count',   label: 'Number of Awards', image: 'nobel-awards' },

      sortOn: {
        born:  { id: 'sortOn', field: 'born',  key: 'born',  label: 'Birth Year' },
        year:  { id: 'sortOn', field: 'year',  key: 'year',  label: 'Year Awarded' },
        count: { id: 'sortOn', field: 'count', key: 'count', label: 'No. Awards' },
        age:   { id: 'sortOn', field: 'age',   key: 'age',   label: 'Awarded Age' }
      },

      gender: {
        id: 'gender',
        title: 'Gender:',
        buttonsInRow: 3,
        multiselect: true,
        options: [
          { value: 'male',    text: 'Male',           image: 'fa fa-male' },
          { value: 'female',  text: 'Female',         image: 'fa fa-female' },
          { value: 'org',     text: 'Organization',   image: 'fa fa-atom' }
        ]
      },

      area: {
        id: 'area',
        title: 'Field:',
        buttonsInRow: 2,
        multiselect: true,
        options: [
          { value: 'physics',    text: 'Physics' },
          { value: 'chemistry',  text: 'Chemistry' },
          { value: 'medicine',   text: 'Medicine' },
          { value: 'peace',      text: 'Peace' },
          { value: 'literature', text: 'Literature' },
          { value: 'economics',  text: 'Economics' }
        ]
      }
    };
  }
}
