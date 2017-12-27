/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    /*will need some variables*/
    let $body = $('body');

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    });
    //created a for loop to call each URL to make sure there is something in it
    describe('allFeeds object has at least one URL', function() {
        it('are defined', function() {
            for (var x = 0; x < allFeeds.length; x++)    {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);
            }
        });
    });
        /* Wrote a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
    //another for look to make sure the name has something inside
    describe('allFeeds object has at least one name', function() {
        it('are defined', function() {
            for (var x = 0; x < allFeeds.length; x++)    {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name.length).not.toBe(0);
            };
        })
    });
        /* Wrote a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    //make sure the hamburger menu is hidden when loading the page
    describe('The menu', function() {
        let $hamburger = $body.find('.menu-icon-link');
        /* TODO: Write a new test suite named "The menu" */

            /* Wrote a test that ensures the menu element is
             * hidden by default. You'll have to analyze the HTML and
             * the CSS to determine how we're performing the
             * hiding/showing of the menu element.
             */
        it('hidden menu', function() {
            expect($body.hasClass('menu-hidden')).toBe(true);

        //end of hidden
        });
        /* Wrote a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
         it ('changes visibility when hamburger icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(true);
         });

    //end of The Menu
    });




    //declare variables
    describe('Initial Entries', function() {
          var container = $('.feed');
          var entryLink = $('.feed .entry');
          //runs loadFeed to get data
          beforeEach(function(done) {
              loadFeed(0, done);
          });
          //makes sure the .feed is not empty
          it('checks for at least one', function() {
              expect(container.children.length).not.toBe(0);
          });
          //checks to see if something loads to .feed
          it('one element loads rss to .feed after loadFeed', function(){
             expect(container.hasClass(entryLink)).toBeDefined();
          });

        });


    /* Wrote a new test suite named "Initial Entries" */

        /* Wrote a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         //set variables and run loadFeed
         describe('New Feed Selection', function() {
             let container = $('.feed');
             let zero, one;
             //make sure the text in h2 is put into said variable
             beforeEach(function(done) {
                 loadFeed(0, function() {
                     zero = $('.feed').find('h2').text();
                     loadFeed(1, function() {
                        one =  $('.feed').find('h2').text();
                        done();
                     });

                 });
             });
             //checks to make sure the h2 text is different
             it('Make sure content changes', function() {
                expect(zero).not.toEqual(one);
             });
         });

    /* Wrote a new test suite named "New Feed Selection" */

        /* Wrote a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
