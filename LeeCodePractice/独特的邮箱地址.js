/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let mailArr=[]
  emails.forEach(el=>{
      let emailSplit=el.split('@');
      emailSplit[0]=emailSplit[0].replace(/\./g,'').replace(/\+\S*/,'');
      let emailNew=emailSplit.join('@')
      console.log(emailNew)
      mailArr.push(emailNew)
  })
  
  
  
  return [...new Set(mailArr)].length;
};