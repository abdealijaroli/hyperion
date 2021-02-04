export const constants = {
  startMessage: "Hello Coder, great to have you on board! Let's get started: type \n/help to get the list of all the available websites\n",
  helpMessage: 'Here are the basic list of commands tha you can use:\n\n/sites - This command will help you get the information of upcoming & running contests for specific websites\n\n/upcoming - This command will help you get all the upcoming contests from all websites\n\n/running - This command will help you get all the upcoming contests from all websites\n\n/ac_contests - this command will help you get all the contests from AtCoder\n\n/cf_upcoming - this command will give you all the upcoming contests from CodeForces\n\n/cf_running - this command will give you all the running contests from CodeForces\n\n/cc_upcoming - this command will give you all the upcoming contests from CodeChef\n\n/cc_running - this command will give you all the running contests from CodeChef',
  sitesMessage: 'Here are the websites from which the contests will be listed from: \n\n1. Codeforces \n2. CodeChef \n3. Atcoder \n4. ICPC \n5. Google Kick Start',
  miscReply: 'All the events from the websites are listed below - ',
  codeForcesUrl: 'https://codeforces.com/api/contest.list',
  codeForcesErr: 'Oops, looks like there are no upcoming contests currently on Codeforces.',
  codeForcesReply: 'Upcoming contests on Codeforces are - ',
  codeChefUrl: 'http://cp-events-api.herokuapp.com/api/v1/codechef',
  codeChefErr: 'Oops, looks like there are no upcoming contests currently on CodeChef.',
  codeChefReply: 'Upcoming contests on CodeChef are - ',
  atCoderUrl: 'http://cp-events-api.herokuapp.com/api/v1/atcoder',
  atCoderErr: 'Oops, looks like there are no upcoming contests currently on Atcoder.',
  atCoderReply: 'Upcoming contests on Atcoder are - '
}
