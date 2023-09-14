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
        console.log(jobListing);
        return jobListing;
      }
    });
    return filterLanguages;
  },
  filterTools(tools) {
    const filterTools = this.jobListingData.filter((jobListing) => {
      if (jobListing.tools.includes(tools)) {
        console.log(jobListing);
        return jobListing;
      }
    });
    return filterTools;
  },
};

// console.log(jobsData.jobs());
console.log(jobsData.filterTools("React"));
