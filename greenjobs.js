/**
 * Created by mike on 9/29/2015.
 * Analystics for green jobs dataset
 */

/* globals _, pluck() */

test_data = greenjobs.splice(0, 10);

/**
 * Lists industries in the dataset
 * @param data the list of green jobs records
 * @returns {*} An object with each Industry present
 */
function listIndustries(data) {
  return _.uniq(_.pluck(data, 'Industry'))
}

/**
 * Counts the jobs available in each county
 * @param data the list of green jobs records
 * @returns {*}  an object where the keys are County names and the values are the number of Green Jobs listed in that County
 */
function countyGreenJobs(data) {
  return _.countBy(data, function (num) {
    return num['County']
  });
}
/**
 *
 * @param data the list of green jobs records
 * @param keyword a job keyword to look for
 * @returns {*} a list of Job Titles
 */
function jobswithKeyword(data, keyword) {
  var jobs = _.filter(data, function (num) {
    return num['Job Title'].indexOf(keyword) != -1;
  });

  return _.pluck(jobs, 'Job Title')
}

/**
 * Lists job types and available positions
 * @param data the list of green jobs records
 * * @returns {*} an object with jobs and positions
 */
function industryJobs(data) {

}

/**
 * Lists the industry and maximum amount of jobs available
 * @param data the list of green jobs records
 * @returns {*} a list of Job industries and openings
 */
function maxIndustryJobs(data) {

}