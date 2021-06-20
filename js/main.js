$(function () {
    LoadJobs();
    LoadContributions();
});

function LoadJobs() {
    var template = '';
    for (let job = 0; job < jobs.length; job++) {
        const element = jobs[job];
        const inverted = job % 2 == 0 ? true : false;
        template += BuildHtml(inverted, element);
    }
    AppendHtml(template, '#job-timeline');
}

function LoadContributions() {
    var template = '';
    for (let contribution = 0; contribution < contributions.length; contribution++) {
        const element = contributions[contribution];
        const inverted = contribution % 2 == 0 ? true : false;
        template += BuildContributionHtml(inverted, element);
    }
    AppendHtml(template, '#contribution-timeline');
}

function BuildHtml(inverted, job) {
    var template = inverted ? '<li class="timeline-inverted">' : '<li>';
    template += GetJobHtml(job);
    template += '</li>';
    return template;
}
function BuildContributionHtml(inverted, job) {
    var template = inverted ? '<li class="timeline-inverted">' : '<li>';
    template += GetContributionHtml(job);
    template += '</li>';
    return template;
}

function GetJobHtml(job) {
    var template =
        `   <div class="posted-date">
            <span class="month">${job.Year}</span>
        </div>
        <div class="timeline-panel wow fadeInUp">
            <div class="timeline-content">
                <div class="timeline-heading">
                    <h3>${job.Title}</h3>
                    <span>${job.Company}</span>
                </div>
                <div class="timeline-body">
                    <p>
                        <b>Scope:</b> ${job.Scope}
                        <br><b>Technologies:</b> ${job.Technologies}
                        <br><b>Contribution:</b> ${job.Contribution}
                    </p>
                </div>
            </div>
        </div>`;
    return template;
}

function GetContributionHtml(contribution) {
    var template =
        `   <div class="posted-date">
            <span class="month">${contribution.Year}</span>
        </div>
        <div class="timeline-panel wow fadeInUp">
            <div class="timeline-content">
                <div class="timeline-heading">
                    <span>${contribution.Company}</span>
                </div>
                <div class="timeline-body">
                    <p>
                        <b>Scope:</b> ${contribution.Scope}
                        <br><b>Technologies:</b> ${contribution.Technologies}
                        <br><b>Contributions:</b> ${contribution.Contributions}
                        <br><b>Repo:</b> <a href="${contribution.Repo}" class="contribution-link"> Intrigue.io github</a>
                    </p>
                </div>
            </div>
        </div>`;
    return template;
}

function AppendHtml(template, target) {
    $(target).append(template);
}