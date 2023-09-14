import data from "./data.json" assert { type: "json" };

const jobsData = {
  jobListingData: data,
  positionFiltered: [],
  jobs() {
    const { jobListingData } = this;
    return jobListingData.map((jobListing) => {
      return jobListing;
    });
  },
  filterRole(role) {
    const { jobListingData } = this;
    const filtered = jobListingData.filter((jobListing) => {
      if (jobListing.role === role) {
        this.positionFiltered.push(jobListing);
        return jobListing;
      }
    });
    return filtered;
  },
  filterPosition(pos) {
    const { jobListingData, positionFiltered } = this;
    const filterPosition = jobListingData.filter((jobsListing) => {
      if (jobsListing.position.includes(pos)) {
        positionFiltered.push(jobsListing);
        return jobsListing;
      }
    });
    return filterPosition;
  },
  filterLanguages(lang) {
    const filterLanguages = this.jobListingData.filter((jobListing) => {
      if (jobListing.languages.includes(lang)) {
        this.positionFiltered.push(jobListing);
        return jobListing;
      }
    });
    return filterLanguages;
  },
  filterTools(tools) {
    const filterTools = this.jobListingData.filter((jobListing) => {
      if (jobListing.tools.includes(tools)) {
        this.positionFiltered.push(jobListing);
        return jobListing;
      }
    });
    return filterTools;
  },
  completeFiltered() {
    const compFiltered = this.positionFiltered.filter((jobs, index) => {
      return this.positionFiltered.indexOf(jobs) === index;
    });
    return compFiltered;
  },
};

console.log(jobsData.filterLanguages("HTML"));
console.log(jobsData.filterTools("React"));
console.log(jobsData.filterPosition("Junior"));
console.log(jobsData.positionFiltered);
console.log(jobsData.completeFiltered());
