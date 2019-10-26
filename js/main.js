$(function () {
    LoadJobs();
});

function LoadJobs() {
    var template = '';
    for (let job = 0; job < jobs.length; job++) {
        const element = jobs[job];
        const inverted = job % 2 == 0 ? true : false;
        template += BuildHtml(inverted, element);
    }
    AppendHtml(template);
}

function BuildHtml(inverted, job) {
    var template = inverted ? '<li class="timeline-inverted">' : '<li>';
    template += GetJobHtml(job);
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

function AppendHtml(template) {
    $('#job-timeline').append(template);
}