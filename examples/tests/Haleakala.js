module.exports = {
  "Look for available cabins in Haleakala NP, Hawai'i" : function (browser) {
    browser

      .url('http://www.recreation.gov/permits/Haleakala_National_Park_Cabin_Permits/r/wildernessAreaDetails.do?page=detail&contractCode=NRSO&parkId=112739')
      .waitForElementVisible('body', 1000)
      .click('select[id=permitTypeId]')
      .keys(['\uE015', '\uE006'])
      // .execute('document.getElementById(\'permitTypeId\').selectedIndex=1')
      // .execute('document.getElementById(\'permitTypeId\').options[1].change()')
      // .execute('document.getElementById(\'permitTypeId\').submit()')
      // .moveToElement('select[id=permitTypeId]', 10, 10)
      // ^tried to hover
      // .waitForElementVisible('#permitTypeId option[value=1451140610]', 4000)
      // ^does not pass
      // .setValue('#permitTypeId.options[1].selected', 'true')
      // .click('select:nth-child(2)')
      // .click('select option[value=1451140610]')
      // .click('#permitTypeId option[value=1451140610]')
      // .click('#permitTypeId:nth-child(2)')
      .waitForElementVisible('#entryStartDate', 5000)
      .end();









      // after clicking on permit type:

      // .setValue('input[id=entryStartDate]', '01/25/2015')
      // .setValue('input[id=lengthOfStay]', '1')  
      // .submitForm('form[id=unifSearchForm]')
      // .waitForElementVisible('body', 5000)
  }
};


// for main page:
      // .url("http://www.recreation.gov")
      // .waitForElementVisible('body', 1000)
      // .setValue('input[id=locationCriteria]', 'HALEAKALA NATIONAL PARK')
      // .click('select[id=interest]')
      // .click('option[value=permit]')
      // .submitForm('form[id=unifSearchForm]')
      // .waitForElementVisible('body', 1000)
      // .click('option[value=permit]')
      // .waitForElementVisible('body', 1000)
      // .click('a[id=suggestion_1_2751]')
      // .waitForElementVisible('body', 1000)
      // .click('#check_avail_panel_NRSO112739 a.first')