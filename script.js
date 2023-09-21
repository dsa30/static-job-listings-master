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
const container = document.querySelector(".container");

jobsData.jobListingData.map((jobs) => {
  let html = "";
  const newPosting = jobs.new === true ? "show" : "hidden";
  const newFeatured = jobs.featured === true ? "show" : "hidden";
  const stack = [jobs.role, jobs.level, ...jobs.languages];
  // let ht = "";;
  let output = stack.map(st => {
    return `<li>
      ${st}
    </li>`
  })

  html = `
  <section class="content">
          <img src="" alt="" />
          <div class="card-title">
            <span class="card-title-comp">${jobs.company}</span>
            <span class="new ${newPosting}">NEW</span>
            <span class="featured ${newFeatured}">FEATURED</span>
            <h1 class="title">${jobs.position}</h1>
            <div class="timeline">
              <h4 class="days-ago">${jobs.postedAt}</h4>
              <h4 class="time">${jobs.contract}</h4>
              <h4 class="location">${jobs.location}</h4>
            </div>
          </div>
          <hr />
          <ul class="tech">
            ${output}
          </ul>
        </section>
  `;
  container.innerHTML += html;
});
