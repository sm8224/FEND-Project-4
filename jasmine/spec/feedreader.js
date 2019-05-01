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

        /* This test verifies that the URL for the feed is loaded */
         it('RSS URL Exists', function() {
            allFeeds.forEach(function(i){
                expect(i.url).toBeDefined();
                expect(i.url.length).not.toBe(0);
            });
         });

        /* This test verifies that the name of the feed is loaded */
        it('RSS Name Exists', function() {
            allFeeds.forEach(function(i){
                expect(i.name).toBeDefined();
                expect(i.name.length).not.toBe(0);
            });
         });
    });

    describe('The Menu', function() {
        /* This tests that the menu is hidden by default when the page opens*/
        it('Menu Hidden by Default', function() {
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(true);
         });
        
        /* This tests if the menu toggles back and forth properly */
        it('Menu Toggles if Clicked', function() {
            let btn = document.querySelector('.menu-icon-link');
            btn.click();
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(false);
            btn.click();
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* This test makes sure there are items loaded in the feed */
    describe('Initial Entries', function() {
        
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('Feeds are Loaded', function() {
            expect(document.querySelector('.feed').children.length > 0).toBe(true);
         });
    });

    /* This test tests if new feeds are different from existing feeds */
    describe('New Feed Selection', function() {
        let feed = document.querySelector('.feed');

        beforeEach(function(done) {
            loadFeed(0);
            first = feed.children[0].innerText;
            console.log(first);
            loadFeed(1, done);
            second = feed.children[1].innerText;
            console.log(second);
        });


        it('Feed Not the Same', function() {
            expect(first === second).toBe(false);
         });
    });

}());
