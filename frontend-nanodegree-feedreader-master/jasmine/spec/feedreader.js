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
        it('all feeds are defined or not', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		 it('is URL there and not empty',function(){
			 for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length > 0).toBe(true);
            }
		 });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		 it('name of each feed is defined and not null',function(){
			 for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length > 0).toBe(true);
            }
		 });
    });


    /*a new test suite named "The menu" */
		describe('The Menu',function(){

        /*Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		 it('Menu elemnts are hidden by default or not',function(){
		 		expect($('body').hasClass("menu-hidden")).toBe(true);
		 });

         /*Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		  it('when we click menu icon it is visible or hidden',function(){
			   $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).not.toBe(true);
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
		  });

    /*Write a new test suite named "Initial Entries" */
		describe('Initial Entries',function(){
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		 beforeEach(function(done) {
            loadFeed(0,done);
        });
		it('does feed have single entry',function(done){
			expect($('.feed .entry').length > 0).toBe(true);
			done();
		});

		});

    /*Write a new test suite named "New Feed Selection"*/
	describe('New Feed Selection',function(){
		var feed;
		var feedd;
		beforeEach(function(done) {
            loadFeed(0, function() {
                feed = $('.feed').html();
                loadFeed(1, function() {
                    feedd = $('.feed').html();
					done();
                });
            });
        });
        /*to check whether feed is loaded or not
         */
		 it('new feed is loaded or not', function() {
            expect(feed).not.toEqual(feedd);
        });
	});
}());
