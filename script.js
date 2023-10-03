import data from "./data.json" assert { type: "json" };
  
  
document.addEventListener("DOMContentLoaded", () => {
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
  
  container.addEventListener("click", (event) => {
    if(event.target.getAttribute("class") === "tag-list") {
      const selectTag = event.target.innerText;
      jobsData.filterRole(selectTag);
      jobsData.filterPosition(selectTag);
      jobsData.filterLanguages(selectTag);
      jobsData.filterTools(selectTag);
      container.innerHTML = "";
      displayList(jobsData.completeFiltered());
    }
  })
  
  function displayList(allJobs) {
    allJobs.map((jobs) => {
      let html = "";
      const newPosting = jobs.new === true ? "show" : "hidden";
      const newFeatured = jobs.featured === true ? "show" : "hidden";
      const stack = [jobs.role, jobs.level, ...jobs.languages];
      // let ht = "";;
      let output = stack.map(st => {
        return `<li class="tag-list">
                  ${st}
                </li>`
      })
    
      html = `
      <section class="content">
            <div class="content-img-style">
              <img src=${jobs.logo} alt='${jobs.company} logo' />
             <div class="card-title">
               <span class="card-title-comp">${jobs.company}</span>
               <span class="new ${newPosting}">NEW</span>
               <span class="featured ${newFeatured}">FEATURED</span>
               <h1 class="title">${jobs.position}</h1>
               <ul class="timeline">
                 <li class="timeline-list">${jobs.postedAt}</li>
                 <li class="timeline-list">${jobs.contract}</li>
                 <li class="timeline-list">${jobs.location}</li>
               </ul>
             </div>
             </div>
              <hr />
              <ul class="tech">
                ${output.join(" ")}
              </ul>
            </section>
      `;
      container.innerHTML += html;
    });
  }

  jobsData.jobListingData.map((jobs) => {
    let html = "";
    const newPosting = jobs.new === true ? "show" : "hidden";
    const newFeatured = jobs.featured === true ? "show" : "hidden";
    const stack = [jobs.role, jobs.level, ...jobs.languages];
    // let ht = "";;
    let output = stack.map(st => {
      return `<li class="tag-list">
                ${st}
              </li>`
    })
  
    html = `
    <section class="content">
          <div class="content-img-style">
            <img src=${jobs.logo} alt='${jobs.company} logo' />
           <div class="card-title">
             <span class="card-title-comp">${jobs.company}</span>
             <span class="new ${newPosting}">NEW</span>
             <span class="featured ${newFeatured}">FEATURED</span>
             <h1 class="title">${jobs.position}</h1>
             <ul class="timeline">
               <li class="timeline-list">${jobs.postedAt}</li>
               <li class="timeline-list">${jobs.contract}</li>
               <li class="timeline-list">${jobs.location}</li>
             </ul>
           </div>
           </div>
            <hr />
            <ul class="tech">
              ${output.join(" ")}
            </ul>
          </section>
    `;
    container.innerHTML += html;
  });
  
  // displayList(jobsData.jobListingData);
})
