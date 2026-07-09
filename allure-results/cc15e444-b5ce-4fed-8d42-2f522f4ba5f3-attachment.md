# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicstest.spec.js >> Additional Functions for Browser Navigations
- Location: tests\UIBasicstest.spec.js:187:5

# Error details

```
Test timeout of 15000ms exceeded.
```

```
Error: locator.click: Test timeout of 15000ms exceeded.
Call log:
  - waiting for locator('#courses-iframe').contentFrame().locator('li a[href=\'lifetime-access\']:visible')
    - locator resolved to <a href="lifetime-access" class="new-navbar-highlighter">All Access plan</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - link:
      - /url: https://www.rahulshettyacademy.com/
      - img [ref=e3] [cursor=pointer]
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e4] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - generic [ref=e5]:
      - link "Home" [ref=e6] [cursor=pointer]:
        - /url: https://www.rahulshettyacademy.com/
        - button "Home" [ref=e7]
      - button "Practice" [ref=e8] [cursor=pointer]
      - button "Login" [ref=e9] [cursor=pointer]
      - button "Signup" [ref=e10] [cursor=pointer]
  - heading "Practice Page" [level=1] [ref=e11]
  - generic [ref=e12]:
    - group "Radio Button Example" [ref=e14]:
      - generic [ref=e15]: Radio Button Example
      - generic [ref=e16] [cursor=pointer]:
        - radio [ref=e17]
        - text: Radio1
      - generic [ref=e18] [cursor=pointer]:
        - radio [ref=e19]
        - text: Radio2
      - generic [ref=e20] [cursor=pointer]:
        - radio [ref=e21]
        - text: Radio3
    - group "Suggession Class Example" [ref=e23]:
      - generic [ref=e24]: Suggession Class Example
      - textbox "Type to Select Countries" [ref=e25]
    - group "Dropdown Example" [ref=e27]:
      - generic [ref=e28]: Dropdown Example
      - combobox [ref=e29]:
        - option "Select" [selected]
        - option "Option1"
        - option "Option2"
        - option "Option3"
    - group "Checkbox Example" [ref=e31]:
      - generic [ref=e32]: Checkbox Example
      - generic [ref=e33] [cursor=pointer]:
        - checkbox [ref=e34]
        - text: Option1
      - generic [ref=e35] [cursor=pointer]:
        - checkbox [ref=e36]
        - text: Option2
      - generic [ref=e37] [cursor=pointer]:
        - checkbox [ref=e38]
        - text: Option3
  - generic [ref=e39]:
    - group "Switch Window Example" [ref=e41]:
      - generic [ref=e42]: Switch Window Example
      - button "Open Window" [ref=e43] [cursor=pointer]
    - group "Switch Tab Example" [ref=e45]:
      - generic [ref=e46]: Switch Tab Example
      - link "Open Tab" [ref=e47] [cursor=pointer]:
        - /url: https://www.qaclickacademy.com
    - group "Switch To Alert Example" [ref=e49]:
      - generic [ref=e50]: Switch To Alert Example
      - textbox "Enter Your Name" [ref=e51]
      - button "Alert" [ref=e52] [cursor=pointer]
      - button "Confirm" [active] [ref=e53] [cursor=pointer]
  - generic [ref=e54]:
    - group "Web Table Example" [ref=e56]:
      - generic [ref=e57]: Web Table Example
      - table [ref=e58]:
        - rowgroup [ref=e59]:
          - row "Instructor Course Price" [ref=e60]:
            - columnheader "Instructor" [ref=e61]
            - columnheader "Course" [ref=e62]
            - columnheader "Price" [ref=e63]
          - row "Rahul Shetty Selenium Webdriver with Java Basics + Advanced + Interview Guide 30" [ref=e64]:
            - cell "Rahul Shetty" [ref=e65]
            - cell "Selenium Webdriver with Java Basics + Advanced + Interview Guide" [ref=e66]
            - cell "30" [ref=e67]
          - row "Rahul Shetty Learn SQL in Practical + Database Testing from Scratch 25" [ref=e68]:
            - cell "Rahul Shetty" [ref=e69]
            - cell "Learn SQL in Practical + Database Testing from Scratch" [ref=e70]
            - cell "25" [ref=e71]
          - row "Rahul Shetty Appium (Selenium) - Mobile Automation Testing from Scratch 30" [ref=e72]:
            - cell "Rahul Shetty" [ref=e73]
            - cell "Appium (Selenium) - Mobile Automation Testing from Scratch" [ref=e74]
            - cell "30" [ref=e75]
          - row "Rahul Shetty WebSecurity Testing for Beginners-QA knowledge to next level 20" [ref=e76]:
            - cell "Rahul Shetty" [ref=e77]
            - cell "WebSecurity Testing for Beginners-QA knowledge to next level" [ref=e78]
            - cell "20" [ref=e79]
          - row "Rahul Shetty Learn JMETER from Scratch - (Performance + Load) Testing Tool 25" [ref=e80]:
            - cell "Rahul Shetty" [ref=e81]
            - cell "Learn JMETER from Scratch - (Performance + Load) Testing Tool" [ref=e82]
            - cell "25" [ref=e83]
          - row "Rahul Shetty WebServices / REST API Testing with SoapUI 35" [ref=e84]:
            - cell "Rahul Shetty" [ref=e85]
            - cell "WebServices / REST API Testing with SoapUI" [ref=e86]
            - cell "35" [ref=e87]
          - row "Rahul Shetty QA Expert Course :Software Testing + Bugzilla + SQL + Agile 25" [ref=e88]:
            - cell "Rahul Shetty" [ref=e89]
            - cell "QA Expert Course :Software Testing + Bugzilla + SQL + Agile" [ref=e90]
            - cell "25" [ref=e91]
          - row "Rahul Shetty Master Selenium Automation in simple Python Language 25" [ref=e92]:
            - cell "Rahul Shetty" [ref=e93]
            - cell "Master Selenium Automation in simple Python Language" [ref=e94]
            - cell "25" [ref=e95]
          - row "Rahul Shetty Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C 20" [ref=e96]:
            - cell "Rahul Shetty" [ref=e97]
            - cell "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C" [ref=e98]
            - cell "20" [ref=e99]
          - row "Rahul Shetty Write effective QA Resume that will turn to interview call 0" [ref=e100]:
            - cell "Rahul Shetty" [ref=e101]
            - cell "Write effective QA Resume that will turn to interview call" [ref=e102]
            - cell "0" [ref=e103]
    - generic [ref=e104]:
      - group "Element Displayed Example" [ref=e105]:
        - generic [ref=e106]: Element Displayed Example
        - button "Hide" [ref=e107] [cursor=pointer]
        - button "Show" [ref=e108] [cursor=pointer]
      - group "Web Table Fixed header" [ref=e109]:
        - generic [ref=e110]: Web Table Fixed header
        - table [ref=e112]:
          - rowgroup [ref=e113]:
            - row "Name Position City Amount" [ref=e114]:
              - columnheader "Name" [ref=e115]
              - columnheader "Position" [ref=e116]
              - columnheader "City" [ref=e117]
              - columnheader "Amount" [ref=e118]
          - rowgroup [ref=e119]:
            - row "Alex Engineer Chennai 28" [ref=e120]:
              - cell "Alex" [ref=e121]
              - cell "Engineer" [ref=e122]
              - cell "Chennai" [ref=e123]
              - cell "28" [ref=e124]
            - row "Ben Mechanic Bengaluru 23" [ref=e125]:
              - cell "Ben" [ref=e126]
              - cell "Mechanic" [ref=e127]
              - cell "Bengaluru" [ref=e128]
              - cell "23" [ref=e129]
            - row "Dwayne Manager Kolkata 48" [ref=e130]:
              - cell "Dwayne" [ref=e131]
              - cell "Manager" [ref=e132]
              - cell "Kolkata" [ref=e133]
              - cell "48" [ref=e134]
            - row "Ivory Receptionist Chennai 18" [ref=e135]:
              - cell "Ivory" [ref=e136]
              - cell "Receptionist" [ref=e137]
              - cell "Chennai" [ref=e138]
              - cell "18" [ref=e139]
            - row "Jack Engineer Pune 32" [ref=e140]:
              - cell "Jack" [ref=e141]
              - cell "Engineer" [ref=e142]
              - cell "Pune" [ref=e143]
              - cell "32" [ref=e144]
            - row "Joe Postman Chennai 46" [ref=e145]:
              - cell "Joe" [ref=e146]
              - cell "Postman" [ref=e147]
              - cell "Chennai" [ref=e148]
              - cell "46" [ref=e149]
            - row "Raymond Businessman Mumbai 37" [ref=e150]:
              - cell "Raymond" [ref=e151]
              - cell "Businessman" [ref=e152]
              - cell "Mumbai" [ref=e153]
              - cell "37" [ref=e154]
            - row "Ronaldo Sportsman Chennai 31" [ref=e155]:
              - cell "Ronaldo" [ref=e156]
              - cell "Sportsman" [ref=e157]
              - cell "Chennai" [ref=e158]
              - cell "31" [ref=e159]
            - row "Smith Cricketer Delhi 33" [ref=e160]:
              - cell "Smith" [ref=e161]
              - cell "Cricketer" [ref=e162]
              - cell "Delhi" [ref=e163]
              - cell "33" [ref=e164]
        - generic [ref=e165]: "Total Amount Collected: 296"
  - group "Mouse Hover Example" [ref=e168]:
    - generic [ref=e169]: Mouse Hover Example
    - button "Mouse Hover" [ref=e171] [cursor=pointer]
  - group "iFrame Example" [ref=e173]:
    - generic [ref=e174]: iFrame Example
    - iframe [ref=e175]:
      - generic [ref=f7e2]:
        - banner [ref=f7e3]:
          - generic [ref=f7e6]:
            - list [ref=f7e8]:
              - listitem [ref=f7e9]:
                - generic [ref=f7e10]: 
                - text: contact@rahulshettyacademy.com
            - generic [ref=f7e11]:
              - list [ref=f7e12]:
                - listitem [ref=f7e13]:
                  - link "" [ref=f7e14] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCgx5SDcUQWCQ_1CNneQzCRw
                    - generic [ref=f7e15]: 
                - listitem [ref=f7e16]:
                  - link "" [ref=f7e17] [cursor=pointer]:
                    - /url: https://linkedin.com/in/rahul-shetty-trainer/
                    - generic [ref=f7e18]: 
              - link " Register" [ref=f7e20] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_up
                - generic [ref=f7e21]: 
                - text: Register
              - link " Login" [ref=f7e23] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_in
                - generic [ref=f7e24]: 
                - text: Login
          - generic [ref=f7e27]:
            - link [ref=f7e30] [cursor=pointer]:
              - /url: /
            - navigation [ref=f7e32]:
              - list [ref=f7e34]:
                - listitem [ref=f7e35]:
                  - link "Home" [ref=f7e36] [cursor=pointer]:
                    - /url: /
                - listitem [ref=f7e37]:
                  - link "Courses" [ref=f7e38] [cursor=pointer]:
                    - /url: https://courses.rahulshettyacademy.com/courses
                - listitem [ref=f7e39]:
                  - link "NEW All Access plan" [ref=f7e40] [cursor=pointer]:
                    - /url: lifetime-access
                - listitem [ref=f7e41]:
                  - link "NEW Learning paths" [ref=f7e42] [cursor=pointer]:
                    - /url: learning-path
                - listitem [ref=f7e43]:
                  - link "Mentorship" [ref=f7e44] [cursor=pointer]:
                    - /url: mentorship
                - listitem [ref=f7e45]:
                  - link "Job Support" [ref=f7e46] [cursor=pointer]:
                    - /url: consulting
                - listitem [ref=f7e47]:
                  - link "Practice" [ref=f7e48] [cursor=pointer]:
                    - /url: practice-project
                - listitem [ref=f7e49]:
                  - link "Blog" [ref=f7e50] [cursor=pointer]:
                    - /url: https://rahulshettyacademy.com/blog/
                - listitem [ref=f7e51]:
                  - link "More " [ref=f7e52] [cursor=pointer]:
                    - /url: "#"
                    - text: More
                    - generic [ref=f7e53]: 
                  - text: 
        - generic [ref=f7e54]:
          - generic [ref=f7e59]:
            - img "First slide" [ref=f7e60]
            - generic [ref=f7e62]:
              - heading "An Academy to Learn Earn & Shine in your QA Career" [level=2] [ref=f7e63]:
                - generic [ref=f7e64]:
                  - text: An Academy to
                  - strong [ref=f7e65]: Learn Earn & Shine
                  - text: in your QA Career
              - heading "World-class tutorials on Selenium, Rest Assured, Cypress, Appium, Postman, Cucumber, SoapUI, Playwright, Jmeter, Jira, and many more. Join our courses now to get the best job opportunity." [level=3] [ref=f7e66]
              - link "JOIN NOW" [ref=f7e68] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_up
          - generic [ref=f7e72]:
            - generic [ref=f7e74]:
              - generic [ref=f7e76]: 
              - generic [ref=f7e77]: 600,000 +
              - heading "Students" [level=4] [ref=f7e78]
            - generic [ref=f7e80]:
              - generic [ref=f7e82]: 
              - generic [ref=f7e83]: 30 +
              - heading "Courses" [level=4] [ref=f7e84]
            - generic [ref=f7e86]:
              - generic [ref=f7e88]: 
              - generic [ref=f7e89]: 257,000 +
              - heading "Ratings" [level=4] [ref=f7e90]
            - generic [ref=f7e92]:
              - generic [ref=f7e94]: 
              - generic [ref=f7e95]: 30 +
              - heading "Projects" [level=4] [ref=f7e96]
          - generic [ref=f7e99]:
            - heading "why we are Leaders in market?!" [level=2] [ref=f7e100]
            - generic [ref=f7e101]:
              - list [ref=f7e103]:
                - listitem [ref=f7e104]: The academy is led by Rahul Shetty, a Test evangelist and Test architect with over 10+ years in the IT industry.
                - listitem [ref=f7e105]: Rahul Shetty is a pioneer and authority in software testing space.
                - listitem [ref=f7e106]: He has taught over 300,000 students in 195 countries from across the world.
                - listitem [ref=f7e107]: All our courses are based on Real Time Project based where you learn real skill which are readily transferable to your work project.
                - listitem [ref=f7e108]: Our courses are guaranteed to help you reach your career goals and develop your automation skills
                - listitem [ref=f7e109]: Life time access, Learn at your own pace and updates are Free for Life.
              - list [ref=f7e111]:
                - listitem [ref=f7e112]: Wide coverage of topics like Selenium, Appium, Cucumber BDD, Cypress, Protractor, RestAPI, SoapUI and JMeter etc.
                - listitem [ref=f7e113]: His mentorship program is most after in the software testing community with long waiting period.
                - listitem [ref=f7e114]: Once under his mentorship, you are preparing yourself for long term success with his expert guidance and support.
                - listitem [ref=f7e115]: Lot of companies have already benefited from our consulting services.
                - listitem [ref=f7e116]: We are essentially a Full Stack QA consulting and Training company and we got you covered for your test implementation and training needs.
          - generic [ref=f7e118]:
            - generic [ref=f7e119]:
              - heading "Our Students" [level=2] [ref=f7e120]
              - generic [ref=f7e121]:
                - text: See what our students say about us. We are proud to show some of best
                - text: feedback with lot of love & proud!!
            - generic [ref=f7e122]:
              - generic [ref=f7e124]:
                - generic [ref=f7e128]:
                  - text: 
                  - heading "Zubair Rowley" [level=4] [ref=f7e129]
                  - generic [ref=f7e130]: Student of software testing
                  - generic [ref=f7e131]: Guys, I was a Nervous newbie in this software testing few days ago, but by just completing my 50% course, I am now confident becoz of knowledge shared by Rahul shetty sir, that i will crack the job of Software Test Engineer. I was 0 in Technical field, but now i can say i have some rare knowledge which will help me to deal with my goals and challenges in testing. Trying my level best to explore more n more in testing due to CURIOSITY ABOUT SOFTWARE TESTING created in my mind by Rahul sir's Guidance.Thank You sir.
                  - generic [ref=f7e132]:
                    - generic [ref=f7e133]: 
                    - generic [ref=f7e134]: 
                    - generic [ref=f7e135]: 
                    - generic [ref=f7e136]: 
                    - generic [ref=f7e137]: 
                - generic [ref=f7e141]:
                  - text: 
                  - heading "Sania Wynn" [level=4] [ref=f7e142]
                  - generic [ref=f7e143]: student of selenium
                  - generic [ref=f7e144]: I am so glad I found the right course and the right instructor. The instructor is too good..knowledgeable and supportive. I always get replies on my queries within hours and that helps me become productive. And this shows the dedication of the instructor as well. Very commendable and exceptional and elaborate teaching.Studying this course has increased my confidence.
                  - generic [ref=f7e145]:
                    - generic [ref=f7e146]: 
                    - generic [ref=f7e147]: 
                    - generic [ref=f7e148]: 
                    - generic [ref=f7e149]: 
                    - generic [ref=f7e150]: 
                - generic [ref=f7e154]:
                  - text: 
                  - heading "Gruffydd Dickerson" [level=4] [ref=f7e155]
                  - generic [ref=f7e156]: Student of software testing
                  - generic [ref=f7e157]: Guys,I was a Nervous newbie in this software testing few days ago, but by just completing my 50% course, I am now confident becoz of knowledge shared by Rahul shetty sir, that i will crack the job of Software Test Engineer. I was 0 in Technical field,but now i can say i have some rare knowledge which will help me to deal with my goals and challenges in testing. Trying my level best to explore more n more in testing due to CURIOSITY ABOUT SOFTWARE TESTING created in my mind by Rahul sir's Guidance.Thank You sir.
                  - generic [ref=f7e158]:
                    - generic [ref=f7e159]: 
                    - generic [ref=f7e160]: 
                    - generic [ref=f7e161]: 
                    - generic [ref=f7e162]: 
                    - generic [ref=f7e163]: 
                - generic [ref=f7e167]:
                  - text: 
                  - heading "Jesse Shepard" [level=4] [ref=f7e168]
                  - generic [ref=f7e169]: student of selenium
                  - generic [ref=f7e170]: I am so glad I found the right course and the right instructor. The instructor is too good..knowledgeable and supportive. I always get replies on my queries within hours and that helps me become productive.And this shows the dedication of the instructor as well. Very commendable and exceptional and elaborate teaching.Studying this course has increased my confidence.
                  - generic [ref=f7e171]:
                    - generic [ref=f7e172]: 
                    - generic [ref=f7e173]: 
                    - generic [ref=f7e174]: 
                    - generic [ref=f7e175]: 
                    - generic [ref=f7e176]: 
                - generic [ref=f7e180]:
                  - text: 
                  - heading "Zubair Rowley" [level=4] [ref=f7e181]
                  - generic [ref=f7e182]: Student of software testing
                  - generic [ref=f7e183]: Guys, I was a Nervous newbie in this software testing few days ago, but by just completing my 50% course, I am now confident becoz of knowledge shared by Rahul shetty sir, that i will crack the job of Software Test Engineer. I was 0 in Technical field, but now i can say i have some rare knowledge which will help me to deal with my goals and challenges in testing. Trying my level best to explore more n more in testing due to CURIOSITY ABOUT SOFTWARE TESTING created in my mind by Rahul sir's Guidance.Thank You sir.
                  - generic [ref=f7e184]:
                    - generic [ref=f7e185]: 
                    - generic [ref=f7e186]: 
                    - generic [ref=f7e187]: 
                    - generic [ref=f7e188]: 
                    - generic [ref=f7e189]: 
                - generic [ref=f7e193]:
                  - text: 
                  - heading "Sania Wynn" [level=4] [ref=f7e194]
                  - generic [ref=f7e195]: student of selenium
                  - generic [ref=f7e196]: I am so glad I found the right course and the right instructor. The instructor is too good..knowledgeable and supportive. I always get replies on my queries within hours and that helps me become productive. And this shows the dedication of the instructor as well. Very commendable and exceptional and elaborate teaching.Studying this course has increased my confidence.
                  - generic [ref=f7e197]:
                    - generic [ref=f7e198]: 
                    - generic [ref=f7e199]: 
                    - generic [ref=f7e200]: 
                    - generic [ref=f7e201]: 
                    - generic [ref=f7e202]: 
                - generic [ref=f7e206]:
                  - text: 
                  - heading "Gruffydd Dickerson" [level=4] [ref=f7e207]
                  - generic [ref=f7e208]: Student of software testing
                  - generic [ref=f7e209]: Guys,I was a Nervous newbie in this software testing few days ago, but by just completing my 50% course, I am now confident becoz of knowledge shared by Rahul shetty sir, that i will crack the job of Software Test Engineer. I was 0 in Technical field,but now i can say i have some rare knowledge which will help me to deal with my goals and challenges in testing. Trying my level best to explore more n more in testing due to CURIOSITY ABOUT SOFTWARE TESTING created in my mind by Rahul sir's Guidance.Thank You sir.
                  - generic [ref=f7e210]:
                    - generic [ref=f7e211]: 
                    - generic [ref=f7e212]: 
                    - generic [ref=f7e213]: 
                    - generic [ref=f7e214]: 
                    - generic [ref=f7e215]: 
                - generic [ref=f7e219]:
                  - text: 
                  - heading "Jesse Shepard" [level=4] [ref=f7e220]
                  - generic [ref=f7e221]: student of selenium
                  - generic [ref=f7e222]: I am so glad I found the right course and the right instructor. The instructor is too good..knowledgeable and supportive. I always get replies on my queries within hours and that helps me become productive.And this shows the dedication of the instructor as well. Very commendable and exceptional and elaborate teaching.Studying this course has increased my confidence.
                  - generic [ref=f7e223]:
                    - generic [ref=f7e224]: 
                    - generic [ref=f7e225]: 
                    - generic [ref=f7e226]: 
                    - generic [ref=f7e227]: 
                    - generic [ref=f7e228]: 
              - text:  
          - generic [ref=f7e229]:
            - generic [ref=f7e231]:
              - heading "Featured Courses" [level=2] [ref=f7e233]
              - generic [ref=f7e236] [cursor=pointer]:
                - generic: Dollar($) Rupee(₹)
            - link "VIEW ALL COURSES" [ref=f7e239] [cursor=pointer]:
              - /url: https://courses.rahulshettyacademy.com/courses
        - generic [ref=f7e242]:
          - generic [ref=f7e243]:
            - heading "JOIN OUR ACADEMY" [level=2] [ref=f7e244]
            - generic [ref=f7e245]: Sign up today and get access to "Core Java for Testers" & "QA Resume Preparation" Courses for FREE.
          - link "JOIN NOW" [ref=f7e248] [cursor=pointer]:
            - /url: https://courses.rahulshettyacademy.com/sign_up
        - contentinfo [ref=f7e249]:
          - generic [ref=f7e252]:
            - generic [ref=f7e254]:
              - text: All Right Reserved
              - link "RahulShettyAcademy" [ref=f7e255] [cursor=pointer]:
                - /url: "#"
              - text: © 2026
            - list [ref=f7e257]:
              - listitem [ref=f7e258]:
                - link "About Us" [ref=f7e259] [cursor=pointer]:
                  - /url: /about-my-mission
              - listitem [ref=f7e260]:
                - link "Contact Us" [ref=f7e261] [cursor=pointer]:
                  - /url: contact-us
              - listitem [ref=f7e262]:
                - link "Privacy Policy" [ref=f7e263] [cursor=pointer]:
                  - /url: /privacy
        - text: 
  - table [ref=e177]:
    - rowgroup [ref=e178]:
      - row "Discount Coupons REST API SoapUI Appium JMeter Latest News Broken Link Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Contact info Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Social Media Facebook Twitter Google+ Youtube" [ref=e179]:
        - cell "Discount Coupons REST API SoapUI Appium JMeter" [ref=e180]:
          - list [ref=e181]:
            - listitem [ref=e182]:
              - heading "Discount Coupons" [level=3] [ref=e183]:
                - link "Discount Coupons" [ref=e184] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e185]:
              - link "REST API" [ref=e186] [cursor=pointer]:
                - /url: http://www.restapitutorial.com/
            - listitem [ref=e187]:
              - link "SoapUI" [ref=e188] [cursor=pointer]:
                - /url: https://www.soapui.org/
            - listitem [ref=e189]:
              - link "Appium" [ref=e190] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/p/appium-tutorial
            - listitem [ref=e191]:
              - link "JMeter" [ref=e192] [cursor=pointer]:
                - /url: https://jmeter.apache.org/
        - cell "Latest News Broken Link Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing." [ref=e193]:
          - list [ref=e194]:
            - listitem [ref=e195]:
              - heading "Latest News" [level=3] [ref=e196]:
                - link "Latest News" [ref=e197] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e198]:
              - link "Broken Link" [ref=e199] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com/brokenlink
            - listitem [ref=e200]:
              - link "Dummy Content for Testing." [ref=e201] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e202]:
              - link "Dummy Content for Testing." [ref=e203] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e204]:
              - link "Dummy Content for Testing." [ref=e205] [cursor=pointer]:
                - /url: "#"
        - cell "Contact info Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing." [ref=e206]:
          - list [ref=e207]:
            - listitem [ref=e208]:
              - heading "Contact info" [level=3] [ref=e209]:
                - link "Contact info" [ref=e210] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e211]:
              - link "Dummy Content for Testing." [ref=e212] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e213]:
              - link "Dummy Content for Testing." [ref=e214] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e215]:
              - link "Dummy Content for Testing." [ref=e216] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e217]:
              - link "Dummy Content for Testing." [ref=e218] [cursor=pointer]:
                - /url: "#"
        - cell "Social Media Facebook Twitter Google+ Youtube" [ref=e219]:
          - list [ref=e220]:
            - listitem [ref=e221]:
              - heading "Social Media" [level=3] [ref=e222]:
                - link "Social Media" [ref=e223] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e224]:
              - link "Facebook" [ref=e225] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e226]:
              - link "Twitter" [ref=e227] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e228]:
              - link "Google+" [ref=e229] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e230]:
              - link "Youtube" [ref=e231] [cursor=pointer]:
                - /url: "#"
  - generic [ref=e232]:
    - text: © 2019 Powered by
    - strong [ref=e233]:
      - link "Medianh Consulting" [ref=e234] [cursor=pointer]:
        - /url: http://www.medianhconsulting.com
  - status [ref=e235]
```

# Test source

```ts
  113 |     expect(await radioBtn.last().isChecked()).toBeTruthy();
  114 | 
  115 |     //Checkbox selection
  116 |     await checkBox.check(); //or click()
  117 | 
  118 |     //assertion to check the selection
  119 |     await expect(checkBox).toBeChecked();
  120 |     //Assertion. Notice where await is used.
  121 |     expect(await checkBox.isChecked()).toBeTruthy();
  122 | 
  123 |     //Checkbox uncheck
  124 |     await checkBox.uncheck();
  125 | 
  126 |     //assertion of uncheck. Notice where await is used.
  127 |     expect(await checkBox.isChecked()).toBeFalsy();
  128 | 
  129 |     //Playwright Inspector to debug. Not always needed. Use after the required step.
  130 |     //await page.pause();
  131 | 
  132 |     //Check the Blinking link on the webpages.
  133 |     await expect(docLink).toHaveAttribute('class', 'blinkingText');
  134 | }
  135 | );
  136 | 
  137 | 
  138 | 
  139 | test("Child Window", async ({ browser }) => //or ()=>//async function() is the same
  140 | 
  141 | {
  142 |     const context = await browser.newContext();//creates a new browser context, which is an isolated environment for testing. It allows you to run tests in parallel without interference.
  143 |     //open a new page
  144 |     const page = await context.newPage();
  145 |     //navigates to the specified URL
  146 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  147 | 
  148 |     const userName = page.locator('input#username');
  149 |     const docLink = page.locator('a[href*="documents-request"]');
  150 | 
  151 |     //click on the blinking link and goto child window
  152 |     //docLink.click();
  153 |     //Promise to run asynchronously the operations on the child window.Refer oneNote to know what are the promise types 
  154 | 
  155 |     const [newPage] = await Promise.all(
  156 |         [
  157 |             context.waitForEvent('page'),
  158 |             docLink.click()
  159 |         ]
  160 |     )
  161 | 
  162 |     const secondPageLinkText = newPage.locator('p.red');
  163 |     await expect(secondPageLinkText).toContainText("Please email us");
  164 | 
  165 |     //get the domain name / username from the text content
  166 | 
  167 |     const text = await secondPageLinkText.textContent();
  168 |     //console.log(text);
  169 | 
  170 |     //Split by @ and then by ' ' to get the domain name used
  171 |     const textArr = text.split('@')[1];
  172 |     const domain = textArr.split(' ')[0];
  173 | 
  174 |     //console.log(domain);
  175 | 
  176 |     await userName.fill(domain);
  177 | 
  178 |     //page.pause();
  179 |     await userName.inputValue().then(t => console.log(t + " is the username entered"));
  180 | 
  181 |     expect(await userName.inputValue()).toContain('rahulshettyacademy')
  182 | 
  183 | 
  184 | }
  185 | );
  186 | 
  187 | test("Additional Functions for Browser Navigations", async ({ page }) => {
  188 | 
  189 |     //move from one page to another (back and forth)
  190 |     await page.goto("https://rahulshettyacademy.com/automationPractice/");
  191 |     await page.goto("https:google.com")
  192 |     await page.goForward();
  193 |     await page.goBack();
  194 | 
  195 |     //await page.pause();
  196 | 
  197 |     //Hidden elements check
  198 |     await expect (page.getByText("Element Displayed Example")).toBeVisible();
  199 |     //await expect (page.locator("legend(has-text:'Element Displayed Example')")).toBeVisible();
  200 |     await page.locator("#hide-textbox").click();
  201 |     await expect(page.locator("#displayed-text")).toBeHidden();
  202 | 
  203 |     //Java popup check. Use JS event listener 
  204 |     await page.on('dialog',dialog=>dialog.accept());
  205 |     await page.locator("#confirmbtn").click();
  206 | 
  207 |     //Mouse hover
  208 |     await page.locator("#mousehover").hover();
  209 | 
  210 |     //Frames
  211 |     const framepage = await page.frameLocator("#courses-iframe");
  212 |     //check the call for visible element in the locator
> 213 |     await framepage.locator("li a[href='lifetime-access']:visible").click();
      |                                                                     ^ Error: locator.click: Test timeout of 15000ms exceeded.
  214 |     const subscribers = await framepage.locator(".text h2").textContent();
  215 |     console.log(subscribers.split(" ")[1]);
  216 | 
  217 | });
  218 | 
  219 | 
  220 | test("Screenshots and Visual Compares", async ({ page }) => {
  221 | 
  222 |     //move from one page to another (back and forth)
  223 |     await page.goto("https://rahulshettyacademy.com/automationPractice/");
  224 | 
  225 |     //Hidden elements check
  226 |     await expect (page.getByText("Element Displayed Example")).toBeVisible();
  227 |     //Take screenshot before element is hidden
  228 |     await page.locator("#displayed-text").screenshot({path: 'Visibletextbox.png'});
  229 |     await page.locator("#hide-textbox").click();
  230 |     //Take page's screenshot after element hidden
  231 |     await page.screenshot({path:'Hidetextbox.png'});
  232 |     await expect(page.locator("#displayed-text")).toBeHidden();
  233 | 
  234 |     await expect(await page.screenshot()).toMatchSnapshot('Hidetextbox.png');
  235 | 
  236 | 
  237 | });
  238 | 
```