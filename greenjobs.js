/**
 * Created by mike on 9/29/2015.
 * Analystics for green jobs dataset
 */

/* globals _, countyGreenJobs */
/* exported jobswithKeyword, hasIndustry, countyGreenJobs, listIndustries, industryJobs, maxIndustryJobs, data*/

/**
 * Returns true if has industry field
 * @param record data set
 * @returns {boolean} true if industry field is present
 */
function hasIndustry(record) {
  return record.hasOwnProperty("Industry");
}
/**
 * Lists industries in the dataset
 * @param data the list of green jobs records
 * @returns {*} An object with each Industry present
 */
function listIndustries(data) {
  if (!_.every(data, hasIndustry)) {
    throw new Error("No industry field.");
  }
  if (!_.every(data, isEmptyIndustry)) {
    throw new Error("Industry field is empty.");
  }
  return _.uniq(_.pluck(data, 'Industry'));
}
/**
 * checks if the iundustry field is blank
 * @param record data record
 * @returns {boolean} returns true if industry field is not blank
 */
function isEmptyIndustry(record){
  return record["Industry"] !== "";

}
/**
 * Counts the jobs available in each county
 * @param data the list of green jobs records
 * @returns {*}  an object where the keys are County names and the values are the number of Green Jobs listed in that County
 */
function countyGreenJobs(data) {
  return _.countBy(data, function (num) {
    return num['County'];
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
    return num['Job Title'].indexOf(keyword) !== -1;
  });

  return _.pluck(jobs, 'Job Title');
}

